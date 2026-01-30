#!/usr/bin/env python3
"""
Mermaid Link Validator for Psychonautic Documentation

Tests that:
1. All Mermaid diagrams render without errors
2. All click links point to valid internal pages
3. Links work after Zola build

Usage:
    python test_mermaid_links.py [--content-dir DIR] [--public-dir DIR]
"""

import argparse
import json
import os
import re
import subprocess
import sys
from pathlib import Path
from typing import NamedTuple


class TestResult(NamedTuple):
    passed: bool
    message: str
    file: str
    details: str = ""


def find_mermaid_blocks(content: str) -> list[tuple[int, str]]:
    """Find all mermaid code blocks in content."""
    pattern = re.compile(r'```mermaid\s*\n(.*?)\n```', re.DOTALL)
    blocks = []
    for match in pattern.finditer(content):
        line_num = content[:match.start()].count('\n') + 1
        blocks.append((line_num, match.group(1)))
    return blocks


def extract_click_links(mermaid_code: str) -> list[tuple[str, str]]:
    """Extract click statement URLs from mermaid code."""
    # Pattern: click nodeId "url" "tooltip" or click nodeId href "url"
    click_pattern = re.compile(r'click\s+\w+\s+(?:href\s+)?"([^"]+)"')
    return [(m.group(1), m.group(0)) for m in click_pattern.finditer(mermaid_code)]


def validate_mermaid_syntax(mermaid_code: str, filepath: str, line_num: int) -> TestResult:
    """Validate Mermaid syntax using mmdc (mermaid-cli)."""
    try:
        # Write temp file
        import tempfile
        with tempfile.NamedTemporaryFile(mode='w', suffix='.mmd', delete=False) as f:
            f.write(mermaid_code)
            temp_path = f.name

        output_path = temp_path.replace('.mmd', '.svg')

        # Run mmdc
        result = subprocess.run(
            ['mmdc', '-i', temp_path, '-o', output_path, '-q'],
            capture_output=True,
            text=True,
            timeout=30
        )

        # Cleanup
        os.unlink(temp_path)
        if os.path.exists(output_path):
            os.unlink(output_path)

        if result.returncode != 0:
            return TestResult(
                passed=False,
                message=f"Mermaid syntax error at line {line_num}",
                file=filepath,
                details=result.stderr or result.stdout
            )

        return TestResult(
            passed=True,
            message=f"Mermaid syntax valid at line {line_num}",
            file=filepath
        )

    except subprocess.TimeoutExpired:
        return TestResult(
            passed=False,
            message=f"Mermaid render timeout at line {line_num}",
            file=filepath
        )
    except FileNotFoundError:
        return TestResult(
            passed=False,
            message="mmdc (mermaid-cli) not found - install with: npm install -g @mermaid-js/mermaid-cli",
            file=filepath
        )
    except Exception as e:
        return TestResult(
            passed=False,
            message=f"Unexpected error: {e}",
            file=filepath
        )


def validate_internal_link(url: str, public_dir: Path, filepath: str) -> TestResult:
    """Validate that an internal link points to existing content."""
    # Skip external links
    if url.startswith('http://') or url.startswith('https://'):
        return TestResult(
            passed=True,
            message=f"External link (skipped): {url}",
            file=filepath
        )

    # Normalize URL to path
    clean_url = url.strip('/')
    if not clean_url:
        clean_url = 'index'

    # Check multiple possible paths
    possible_paths = [
        public_dir / clean_url / 'index.html',
        public_dir / f'{clean_url}.html',
        public_dir / clean_url,
    ]

    for path in possible_paths:
        if path.exists():
            return TestResult(
                passed=True,
                message=f"Link valid: {url}",
                file=filepath
            )

    return TestResult(
        passed=False,
        message=f"Broken internal link: {url}",
        file=filepath,
        details=f"Checked paths: {[str(p) for p in possible_paths]}"
    )


def validate_link_in_source(url: str, content_dir: Path, filepath: str) -> TestResult:
    """Validate link against source content (before build)."""
    if url.startswith('http://') or url.startswith('https://'):
        return TestResult(
            passed=True,
            message=f"External link (skipped): {url}",
            file=filepath
        )

    clean_url = url.strip('/')
    if not clean_url:
        return TestResult(passed=True, message="Root link", file=filepath)

    # Convert URL to content path
    possible_paths = [
        content_dir / f'{clean_url}.md',
        content_dir / clean_url / '_index.md',
        content_dir / f'{clean_url}/index.md',
    ]

    for path in possible_paths:
        if path.exists():
            return TestResult(
                passed=True,
                message=f"Source link valid: {url}",
                file=filepath
            )

    return TestResult(
        passed=False,
        message=f"Broken source link: {url}",
        file=filepath,
        details=f"Expected one of: {[str(p) for p in possible_paths]}"
    )


def test_markdown_file(filepath: Path, content_dir: Path, public_dir: Path = None) -> list[TestResult]:
    """Test all mermaid diagrams in a markdown file."""
    results = []

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    mermaid_blocks = find_mermaid_blocks(content)

    if not mermaid_blocks:
        return results

    for line_num, mermaid_code in mermaid_blocks:
        # Test syntax
        syntax_result = validate_mermaid_syntax(mermaid_code, str(filepath), line_num)
        results.append(syntax_result)

        # Test links
        click_links = extract_click_links(mermaid_code)
        for url, statement in click_links:
            if public_dir and public_dir.exists():
                link_result = validate_internal_link(url, public_dir, str(filepath))
            else:
                link_result = validate_link_in_source(url, content_dir, str(filepath))
            results.append(link_result)

    return results


def run_tests(content_dir: Path, public_dir: Path = None) -> tuple[list[TestResult], int, int]:
    """Run all tests and return results with pass/fail counts."""
    all_results = []
    passed = 0
    failed = 0

    md_files = list(content_dir.rglob('*.md'))

    for filepath in md_files:
        results = test_markdown_file(filepath, content_dir, public_dir)
        all_results.extend(results)

    for result in all_results:
        if result.passed:
            passed += 1
        else:
            failed += 1

    return all_results, passed, failed


def main():
    parser = argparse.ArgumentParser(description='Test Mermaid diagrams and links')
    parser.add_argument('--content-dir', type=str, default='content', help='Content directory')
    parser.add_argument('--public-dir', type=str, help='Built public directory (optional)')
    parser.add_argument('--json', action='store_true', help='Output as JSON')
    parser.add_argument('--verbose', '-v', action='store_true', help='Verbose output')
    parser.add_argument('--fail-fast', action='store_true', help='Stop on first failure')

    args = parser.parse_args()

    content_dir = Path(args.content_dir)
    public_dir = Path(args.public_dir) if args.public_dir else None

    if not content_dir.exists():
        print(f"Error: Content directory not found: {content_dir}", file=sys.stderr)
        sys.exit(1)

    print(f"Testing Mermaid diagrams in: {content_dir}")
    if public_dir:
        print(f"Validating links against: {public_dir}")

    results, passed, failed = run_tests(content_dir, public_dir)

    if args.json:
        output = {
            'summary': {
                'total': passed + failed,
                'passed': passed,
                'failed': failed
            },
            'results': [
                {
                    'passed': r.passed,
                    'message': r.message,
                    'file': r.file,
                    'details': r.details
                }
                for r in results
            ]
        }
        print(json.dumps(output, indent=2))
    else:
        print(f"\n{'='*60}")
        print(f"Test Results: {passed} passed, {failed} failed")
        print(f"{'='*60}")

        if args.verbose or failed > 0:
            for result in results:
                if not result.passed or args.verbose:
                    status = "PASS" if result.passed else "FAIL"
                    print(f"\n[{status}] {result.message}")
                    print(f"  File: {result.file}")
                    if result.details:
                        print(f"  Details: {result.details}")

    sys.exit(0 if failed == 0 else 1)


if __name__ == '__main__':
    main()
