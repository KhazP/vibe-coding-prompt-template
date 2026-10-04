"""Focused regressions for copyable prompt fences; run with unittest discovery."""

import unittest

from validate import prompt_template_problems, scan_fences


class FenceTests(unittest.TestCase):
    def test_shorter_and_other_character_markers_are_literal(self):
        text = "````markdown\n```bash\necho hello\n```\n~~~\n`````\n"
        blocks, problems = scan_fences(text)
        self.assertEqual(problems, [])
        self.assertEqual([(b.start_line, b.end_line) for b in blocks], [(1, 6)])

    def test_close_allows_up_to_three_spaces_and_trailing_whitespace(self):
        blocks, problems = scan_fences("  ~~~text\ncontent\n   ~~~~ \t\n")
        self.assertEqual(problems, [])
        self.assertEqual(blocks[0].end_line, 3)

    def test_wrong_character_or_short_marker_does_not_close(self):
        for text in ("```python\npass\n~~~\n", "````markdown\ncontent\n```\n"):
            with self.subTest(text=text):
                blocks, problems = scan_fences(text)
                self.assertEqual(len(problems), 1)
                self.assertIsNone(blocks[0].end_line)

    def test_language_tagged_line_cannot_close_a_block(self):
        blocks, problems = scan_fences("```markdown\n```python\npass\n```\n")
        self.assertEqual(problems, [])
        self.assertEqual(blocks[0].end_line, 4)
        _, problems = scan_fences("```markdown\n```python\n")
        self.assertEqual(len(problems), 1)

    def test_backticks_in_info_prevent_backtick_fence_opening(self):
        self.assertEqual(scan_fences("```code with `inline` text\n"), ([], []))
        blocks, problems = scan_fences("~~~code with `inline` text\n~~~\n")
        self.assertEqual(problems, [])
        self.assertEqual(len(blocks), 1)

    def test_indented_and_quoted_examples_are_outside_top_level_scope(self):
        self.assertEqual(scan_fences("    ```text\n\t~~~\n> ```text\n"), ([], []))


class PromptTemplateTests(unittest.TestCase):
    @staticmethod
    def prompt(fence="````", inner="```\nwireframe\n```\n"):
        return "\n".join(
            f"### For {persona}, create:\n\n{fence}markdown\n# Document\n"
            f"{inner}## Handoff Context\n- Stage: prd\n{fence}\n"
            for persona in ("Vibe-Coders", "Developers", "In-Between Users")
        ) + "\n---\n\n## Final Instructions\nSave the document.\n"

    def test_whole_templates_accept_nested_fences(self):
        self.assertEqual(prompt_template_problems(self.prompt()), [])
        self.assertEqual(prompt_template_problems(self.prompt(fence="~~~")), [])

    def test_simple_template_does_not_need_longer_fences(self):
        self.assertEqual(prompt_template_problems(self.prompt(fence="```", inner="")), [])

    def test_premature_nested_closes_fail_even_with_balanced_fence_counts(self):
        # This reproduces the original PRD wireframe bug: both the fence count
        # and the generic closure check pass, but part of the output escapes
        # its copyable block before the Handoff Context.
        text = self.prompt(fence="```")
        self.assertEqual(sum(line.startswith("```") for line in text.splitlines()) % 2, 0)
        self.assertEqual(scan_fences(text)[1], [])
        problems = prompt_template_problems(text)
        self.assertEqual(len(problems), 3)
        self.assertTrue(all("not its section end" in problem for problem in problems))

    def test_missing_persona_or_opening_is_reported(self):
        text = self.prompt().replace("### For Developers, create:", "### Removed persona")
        self.assertTrue(any("expected 3" in problem for problem in prompt_template_problems(text)))
        text = self.prompt().replace("````markdown", "Output follows:", 1)
        self.assertTrue(any("must start" in problem for problem in prompt_template_problems(text)))


if __name__ == "__main__":
    unittest.main()
