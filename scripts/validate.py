#!/usr/bin/env python3
"""
validate.py — local "contract" checks for the vibe-coding-prompt-template repo.

WHAT IS THIS?
    This repository is mostly Markdown prompt templates, so it has no
    traditional test suite. Instead we keep a set of structural rules —
    the "contract" — that the templates must always satisfy. For example,
    templates/AGENTS.md must always contain certain section headings, and
    the part1/part2/part3 prompt files must keep their handoff blocks.

    This script checks those rules so you can catch mistakes *before*
    opening a pull request. CI runs exactly the same checks (see
    .github/workflows/repo-lint.yml), plus an external link check.

HOW TO RUN:
    From the repo root (recommended):
        python scripts/validate.py

    From anywhere else, using the full path also works:
        python C:\\path\\to\\vibe-coding-prompt-template\\scripts\\validate.py

    CI mode (what GitHub Actions runs):
        python scripts/validate.py --ci

    Exit code 0 means every check passed; 1 means at least one failed.

DEPENDENCIES:
    None — only the Python standard library is used. If PyYAML happens to
    be installed it is used for stricter YAML validation, but it is NOT
    required; a tolerant built-in parser is used as a fallback.

WHEN A CHECK FAILS:
    Each FAIL line tells you what is wrong and usually how to fix it.
    If you believe the contract itself should change, open an issue first
    (see .github/CONTRIBUTING.md) and update this script together with
    the templates in the same PR.
"""

from __future__ import annotations

import argparse
import json
import re
import shutil
import subprocess
import sys
from pathlib import Path

# --------------------------------------------------------------------------
# Repo root is resolved from this file's location (repo_root/scripts/),
# so the script works no matter which directory you run it from.
# --------------------------------------------------------------------------
REPO_ROOT = Path(__file__).resolve().parent.parent

# The three root-level prompt files that make up the core workflow.
PART_FILES = [
    "part1-deepresearch.md",
    "part2-prd-mvp.md",
    "part3-tech-design-mvp.md",
]


# --------------------------------------------------------------------------
# Small helpers
# --------------------------------------------------------------------------
def read_text(path: Path) -> str:
    """Read a file as UTF-8, replacing undecodable bytes instead of crashing."""
    return path.read_text(encoding="utf-8", errors="replace")


def parse_simple_yaml_mapping(text: str) -> dict:
    """Tolerant fallback parser for *simple* YAML (top-level `key: value`).

    Used only when PyYAML is not installed. It understands the flat
    `key: value` scalars used in SKILL.md frontmatter. It cannot detect
    every kind of invalid YAML — that is an accepted trade-off so the
    script stays dependency-free.
    """
    data: dict = {}
    for line in text.splitlines():
        match = re.match(r"^([A-Za-z0-9_-]+):\s*(.*)$", line)
        if match:
            value = match.group(2).strip().strip('"').strip("'")
            data[match.group(1)] = value
    return data


def parse_frontmatter(markdown: str):
    """Extract the YAML frontmatter of a Markdown file as a dict.

    Returns None when the file has no well-formed `--- ... ---` block.
    Uses PyYAML when available, otherwise the tolerant fallback parser.
    """
    lines = markdown.splitlines()
    if not lines or lines[0].strip() != "---":
        return None
    end = None
    for i in range(1, len(lines)):
        if lines[i].strip() in ("---", "..."):
            end = i
            break
    if end is None:
        return None
    body = "\n".join(lines[1:end])
    try:
        import yaml  # type: ignore  # optional dependency
    except ImportError:
        return parse_simple_yaml_mapping(body)
    try:
        data = yaml.safe_load(body)
    except Exception:
        return None  # PyYAML is installed and says this is invalid YAML
    return data if isinstance(data, dict) else None


# --------------------------------------------------------------------------
# Contract check 1 — templates/AGENTS.md keeps its canonical headings.
#
# The headings below are matched as *line-start* substrings so trailing
# emoji (e.g. "## Protected Areas 🛡️") do not matter.
# --------------------------------------------------------------------------
AGENTS_REQUIRED_HEADINGS = [
    "## Project Overview & Stack",
    "## Setup & Commands",
    "## Protected Areas",
    "## Coding Conventions",
    "## How I Should Think",
    "## What NOT To Do",
    "## Engineering Constraints",
    "## Current State",
    "## Roadmap",
    "## Context Files",
]


def check_agents_headings():
    path = REPO_ROOT / "templates" / "AGENTS.md"
    if not path.exists():
        return False, "templates/AGENTS.md not found"
    text = read_text(path)
    missing = [
        h
        for h in AGENTS_REQUIRED_HEADINGS
        if not re.search(rf"^{re.escape(h)}(\s|$)", text, re.MULTILINE)
    ]
    if missing:
        return False, "templates/AGENTS.md is missing headings: " + "; ".join(missing)
    return True, f"all {len(AGENTS_REQUIRED_HEADINGS)} required headings present"


# --------------------------------------------------------------------------
# Contract check 2 — each part file ends its output template with a
# "Handoff Context" block so the next step in the workflow can pick up.
# --------------------------------------------------------------------------
def check_handoff_context():
    problems = []
    for name in PART_FILES:
        path = REPO_ROOT / name
        if not path.exists():
            problems.append(f"{name} not found")
        elif "Handoff Context" not in read_text(path):
            problems.append(f"{name} has no 'Handoff Context' block")
    if problems:
        return False, "; ".join(problems)
    return True, "'Handoff Context' present in part1, part2 and part3"


# --------------------------------------------------------------------------
# Contract check 3 — part2 contains one "Out of Scope (Not in MVP)"
# section per persona template, i.e. exactly 3 occurrences.
# --------------------------------------------------------------------------
def check_out_of_scope_sections():
    path = REPO_ROOT / "part2-prd-mvp.md"
    if not path.exists():
        return False, "part2-prd-mvp.md not found"
    heading = "## Out of Scope (Not in MVP)"
    # Count only real headings (line-anchored) — prose mentions of the
    # heading text inside instructions/blockquotes must not inflate the count.
    count = sum(
        1
        for line in read_text(path).splitlines()
        if line.strip() == heading
    )
    if count != 3:
        return (
            False,
            f"part2-prd-mvp.md contains '{heading}' {count} time(s), expected exactly 3 "
            "(one per persona template)",
        )
    return True, f"'{heading}' appears exactly 3 times"


# --------------------------------------------------------------------------
# Contract check 4 — part3 keeps its "## Project Structure" section and
# must not resurrect fabricated Cursor config that was removed.
# --------------------------------------------------------------------------
FORBIDDEN_PART3_STRINGS = ["cursor.sh", "ai.autoComplete", "ai.explainCode"]


def check_part3_project_structure():
    path = REPO_ROOT / "part3-tech-design-mvp.md"
    if not path.exists():
        return False, "part3-tech-design-mvp.md not found"
    if "## Project Structure" not in read_text(path):
        return False, "part3-tech-design-mvp.md is missing '## Project Structure'"
    return True, "'## Project Structure' present"


def check_part3_no_fabricated_config():
    path = REPO_ROOT / "part3-tech-design-mvp.md"
    if not path.exists():
        return False, "part3-tech-design-mvp.md not found"
    text = read_text(path)
    found = [s for s in FORBIDDEN_PART3_STRINGS if s in text]
    if found:
        return (
            False,
            "part3-tech-design-mvp.md mentions fabricated config: "
            + ", ".join(found)
            + " (these were removed — do not re-add them)",
        )
    return True, "no fabricated config strings (cursor.sh, ai.autoComplete, ai.explainCode)"


# --------------------------------------------------------------------------
# Contract check 5 — every .claude/skills/<name>/SKILL.md has YAML
# frontmatter with a `name` (equal to the directory name) and a
# non-empty `description`.
# --------------------------------------------------------------------------
def check_skill_frontmatter():
    skills_dir = REPO_ROOT / ".claude" / "skills"
    if not skills_dir.is_dir():
        return False, ".claude/skills/ directory not found"
    problems = []
    skill_count = 0
    for entry in sorted(skills_dir.iterdir()):
        if not entry.is_dir():
            continue
        skill_md = entry / "SKILL.md"
        if not skill_md.exists():
            problems.append(f"{entry.name}: directory has no SKILL.md")
            continue
        skill_count += 1
        frontmatter = parse_frontmatter(read_text(skill_md))
        if frontmatter is None:
            problems.append(f"{entry.name}: SKILL.md has no valid YAML frontmatter block")
            continue
        name = str(frontmatter.get("name", "")).strip()
        description = str(frontmatter.get("description", "")).strip()
        if not name:
            problems.append(f"{entry.name}: frontmatter is missing 'name'")
        elif name != entry.name:
            problems.append(
                f"{entry.name}: frontmatter name '{name}' does not match directory name"
            )
        if not description:
            problems.append(f"{entry.name}: frontmatter is missing 'description'")
    if skill_count == 0:
        return False, "no SKILL.md files found under .claude/skills/"
    if problems:
        return False, "; ".join(problems)
    return True, f"{skill_count} skill(s) have valid frontmatter (name + description)"


# --------------------------------------------------------------------------
# Contract check 6 — .claude/settings.json is valid JSON, and
# CITATION.cff is valid YAML with the required citation keys.
# --------------------------------------------------------------------------
def check_settings_json():
    path = REPO_ROOT / ".claude" / "settings.json"
    if not path.exists():
        return False, ".claude/settings.json not found"
    try:
        json.loads(read_text(path))
    except json.JSONDecodeError as exc:
        return False, f".claude/settings.json is not valid JSON: {exc}"
    return True, ".claude/settings.json parses as valid JSON"


def check_citation_cff():
    path = REPO_ROOT / "CITATION.cff"
    if not path.exists():
        return False, "CITATION.cff not found"
    text = read_text(path)
    required = ["cff-version", "title", "authors"]
    try:
        import yaml  # type: ignore  # optional dependency
    except ImportError:
        yaml = None
    if yaml is not None:
        # Strict path: real YAML parser is available.
        try:
            data = yaml.safe_load(text)
        except Exception as exc:
            return False, f"CITATION.cff is not valid YAML: {exc}"
        if not isinstance(data, dict):
            return False, "CITATION.cff did not parse to a YAML mapping"
        missing = [key for key in required if key not in data]
        if "year" not in data and "preferred-citation" not in data:
            missing.append("year or preferred-citation")
    else:
        # Fallback path (no PyYAML): check for the required keys with
        # regexes. `year` may be nested (e.g. under preferred-citation),
        # so it is matched at any indentation.
        top_level_keys = set(re.findall(r"^([A-Za-z-]+):", text, re.MULTILINE))
        missing = [key for key in required if key not in top_level_keys]
        has_year = re.search(r"^\s+year\s*:", text, re.MULTILINE) is not None
        if not has_year and "preferred-citation" not in top_level_keys:
            missing.append("year or preferred-citation")
    if missing:
        return False, "CITATION.cff is missing required keys: " + ", ".join(missing)
    parser_used = "PyYAML" if yaml is not None else "built-in fallback parser"
    return True, f"CITATION.cff has all required keys ({parser_used})"


# --------------------------------------------------------------------------
# Contract check 7 — legacy hook config must stay gone:
#   a) .claude/hooks/hooks.json must not exist (hooks live in settings.json)
#   b) .claude/settings.local.json must not be committed (it is personal,
#      machine-local Claude Code config)
# --------------------------------------------------------------------------
def check_no_legacy_hooks_file():
    path = REPO_ROOT / ".claude" / "hooks" / "hooks.json"
    if path.exists():
        return (
            False,
            ".claude/hooks/hooks.json exists — hooks moved to .claude/settings.json; "
            "delete the legacy file",
        )
    return True, ".claude/hooks/hooks.json absent (hooks live in settings.json)"


def check_settings_local_not_committed(ci_mode: bool):
    rel = ".claude/settings.local.json"
    git = shutil.which("git")
    if git is not None:
        try:
            result = subprocess.run(
                [git, "ls-files", "--error-unmatch", "--", rel],
                cwd=REPO_ROOT,
                capture_output=True,
                timeout=30,
            )
            if result.returncode == 0:
                return (
                    False,
                    f"{rel} is tracked by git — it is personal local config and must not "
                    f"be committed. Fix with: git rm --cached {rel}",
                )
            return True, f"{rel} is not tracked by git"
        except Exception:
            pass  # fall through to the disk-presence fallback below
    # Fallback when git is unavailable: look at the file on disk.
    # In CI a checkout only contains committed files, so presence = committed.
    # Locally an *untracked* settings.local.json is fine, so only warn.
    if (REPO_ROOT / ".claude" / "settings.local.json").exists():
        if ci_mode:
            return False, f"{rel} exists in the CI checkout — it must not be committed"
        return (
            True,
            f"{rel} exists locally but git is unavailable to verify it is untracked "
            "(make sure it stays uncommitted)",
        )
    return True, f"{rel} not present"


# --------------------------------------------------------------------------
# Contract check 8 — skill question-bank anchors exist in the part files.
#
# The workflow skills tell the agent to follow *quoted section names*
# (anchors) inside the part1/part2/part3 question banks, e.g. vibe-prd
# says: Level A → "Path A — Vibe-Coder Questions". If someone renames one
# of those sections in a part file, the skills silently break — this
# check makes CI catch that.
#
# HOW TO EXTEND: when a skill quotes a new part-file section, add a
# (skill, part file, anchor) row to SKILL_ANCHORS below. The anchor must
# be the exact quoted string from the SKILL.md. Matching is a substring
# check against the part file, so trailing colons in the actual headings
# (e.g. "### Path A — Vibe-Coder Questions:") do not matter.
# Keep this table in sync when editing the quoted strings in the skills.
# --------------------------------------------------------------------------
def check_skill_anchors():
    SKILL_ANCHORS = [
        # vibe-research → part1-deepresearch.md (one row per level path)
        ("vibe-research", "part1-deepresearch.md", "If User Selects A (Vibe-coder)"),
        ("vibe-research", "part1-deepresearch.md", "If User Selects B (Developer)"),
        ("vibe-research", "part1-deepresearch.md", "If User Selects C (In Between)"),
        # vibe-prd → part2-prd-mvp.md (shared initial questions + 3 paths)
        ("vibe-prd", "part2-prd-mvp.md", "Initial Questions for ALL Users"),
        ("vibe-prd", "part2-prd-mvp.md", "Path A — Vibe-Coder Questions"),
        ("vibe-prd", "part2-prd-mvp.md", "Path B — Developer Questions"),
        ("vibe-prd", "part2-prd-mvp.md", "Path C — In-Between Questions"),
        # vibe-techdesign → part3-tech-design-mvp.md (3 level paths)
        ("vibe-techdesign", "part3-tech-design-mvp.md", "Path A — Vibe-Coder Questions"),
        ("vibe-techdesign", "part3-tech-design-mvp.md", "Path B — Developer Questions"),
        ("vibe-techdesign", "part3-tech-design-mvp.md", "Path C — In-Between Questions"),
    ]
    problems = []
    part_cache: dict = {}
    for skill, part_name, anchor in SKILL_ANCHORS:
        part_path = REPO_ROOT / part_name
        if not part_path.exists():
            problems.append(f"{part_name} not found (needed by {skill})")
            continue
        if part_name not in part_cache:
            part_cache[part_name] = read_text(part_path)
        if anchor not in part_cache[part_name]:
            problems.append(
                f'{skill} expects "{anchor}" in {part_name}, but it is not there — '
                "was the section renamed? Restore the heading or update the skill "
                "quote and this table"
            )
    if problems:
        return False, "; ".join(problems)
    return True, f"all {len(SKILL_ANCHORS)} skill anchors found in part1/part2/part3"


# --------------------------------------------------------------------------
# Contract check 9 — the three workflow skills (research/prd/techdesign)
# each mention "Handoff Context", so a user resuming mid-workflow knows
# what to carry into the next step.
# --------------------------------------------------------------------------
WORKFLOW_SKILLS = ["vibe-research", "vibe-prd", "vibe-techdesign"]


def check_workflow_skills_handoff_context():
    problems = []
    for skill in WORKFLOW_SKILLS:
        path = REPO_ROOT / ".claude" / "skills" / skill / "SKILL.md"
        if not path.exists():
            problems.append(f"{skill}: SKILL.md not found")
        elif "Handoff Context" not in read_text(path):
            problems.append(f"{skill}: SKILL.md does not mention 'Handoff Context'")
    if problems:
        return False, "; ".join(problems)
    return True, "'Handoff Context' mentioned in " + ", ".join(WORKFLOW_SKILLS)


# --------------------------------------------------------------------------
# Contract check 10 — every SKILL.md declares `allowed-tools` in its
# frontmatter, so each skill runs with an explicit, reviewable tool set.
# --------------------------------------------------------------------------
def check_skills_allowed_tools():
    skills_dir = REPO_ROOT / ".claude" / "skills"
    if not skills_dir.is_dir():
        return False, ".claude/skills/ directory not found"
    problems = []
    skill_count = 0
    for entry in sorted(skills_dir.iterdir()):
        if not entry.is_dir():
            continue
        skill_md = entry / "SKILL.md"
        if not skill_md.exists():
            continue  # missing SKILL.md is already reported by check 5
        skill_count += 1
        frontmatter = parse_frontmatter(read_text(skill_md))
        if frontmatter is None:
            continue  # invalid/missing frontmatter is already reported by check 5
        tools = str(frontmatter.get("allowed-tools", "")).strip()
        if not tools:
            problems.append(f"{entry.name}: frontmatter is missing 'allowed-tools'")
    if skill_count == 0:
        return False, "no SKILL.md files found under .claude/skills/"
    if problems:
        return False, "; ".join(problems)
    return True, f"all {skill_count} skill(s) declare 'allowed-tools'"


# --------------------------------------------------------------------------
# Runner
# --------------------------------------------------------------------------
def main() -> int:
    parser = argparse.ArgumentParser(
        description="Check the repo's structural contract (the same checks CI runs)."
    )
    parser.add_argument(
        "--ci",
        action="store_true",
        help="CI mode: same checks, plus stricter handling when git is unavailable.",
    )
    args = parser.parse_args()

    # (label, callable) — callables return (ok: bool, detail: str).
    checks = [
        ("1.  templates/AGENTS.md has all required section headings", check_agents_headings),
        ("2.  part1/part2/part3 contain a 'Handoff Context' block", check_handoff_context),
        ("3.  part2 has exactly 3 'Out of Scope (Not in MVP)' sections", check_out_of_scope_sections),
        ("4a. part3 contains '## Project Structure'", check_part3_project_structure),
        ("4b. part3 has no fabricated config (cursor.sh / ai.autoComplete / ai.explainCode)", check_part3_no_fabricated_config),
        ("5.  .claude/skills/*/SKILL.md frontmatter (name + description)", check_skill_frontmatter),
        ("6a. .claude/settings.json is valid JSON", check_settings_json),
        ("6b. CITATION.cff is valid with required keys", check_citation_cff),
        ("7a. .claude/hooks/hooks.json does not exist", check_no_legacy_hooks_file),
        ("7b. .claude/settings.local.json is not committed", lambda: check_settings_local_not_committed(args.ci)),
        ("8.  skill question-bank anchors exist in part1/part2/part3", check_skill_anchors),
        ("9.  workflow skills mention 'Handoff Context'", check_workflow_skills_handoff_context),
        ("10. all skills declare 'allowed-tools' in frontmatter", check_skills_allowed_tools),
    ]

    print(f"Repo contract checks — {REPO_ROOT}")
    print(f"Mode: {'CI' if args.ci else 'local'} (python {sys.version.split()[0]})")
    print()

    failures = 0
    for label, check in checks:
        try:
            ok, detail = check()
        except Exception as exc:  # a crashing check is a failing check
            ok, detail = False, f"check crashed with {type(exc).__name__}: {exc}"
        status = "PASS" if ok else "FAIL"
        print(f"[{status}] {label}")
        print(f"       {detail}")
        if not ok:
            failures += 1

    print()
    passed = len(checks) - failures
    if failures:
        print(f"Result: {passed} passed, {failures} FAILED out of {len(checks)} checks.")
        print("Fix the FAIL lines above, then re-run: python scripts/validate.py")
        return 1
    print(f"Result: all {len(checks)} checks passed.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
