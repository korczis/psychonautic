#!/usr/bin/env python3
"""
ASCII to Mermaid Converter for Psychonautic Documentation

Converts ASCII flow diagrams in markdown files to Mermaid syntax with:
- Clickable internal links
- Proper node IDs
- Support for various ASCII patterns

Usage:
    python ascii_to_mermaid.py [--dry-run] [--file FILE] [--all]
"""

import argparse
import hashlib
import json
import os
import re
import sys
from pathlib import Path
from typing import Optional

# Base URL for internal links
BASE_URL = ""  # Relative links work in Zola

# Regex patterns for ASCII diagram detection
ASCII_PATTERNS = [
    r'[┌┬├│─╔═║╠╦╚╩╝╗╬╟╢╤╧╪╫]',  # Box drawing chars
    r'^\s*[\|\+\-]{3,}',  # Simple ASCII boxes
    r'^\s*[↓↑←→⇒⇐⇑⇓]',  # Arrows
    r'^\s*\[[^\]]+\]\s*[-=]+>\s*\[[^\]]+\]',  # [A] --> [B] patterns
]

# Internal link pattern in content
INTERNAL_LINK_PATTERN = re.compile(r'\[([^\]]+)\]\(@/([^)]+)\)')


def extract_internal_links(text: str) -> dict[str, str]:
    """Extract internal links from markdown text and return mapping."""
    links = {}
    for match in INTERNAL_LINK_PATTERN.finditer(text):
        label = match.group(1)
        path = match.group(2)
        # Convert path to URL
        url = '/' + path.replace('.md', '/')
        links[label.lower()] = url
    return links


def generate_node_id(label: str) -> str:
    """Generate a valid Mermaid node ID from label."""
    # Create hash-based ID for consistency
    clean = re.sub(r'[^a-zA-Z0-9]', '', label)
    if not clean:
        clean = hashlib.md5(label.encode()).hexdigest()[:8]
    return f"node_{clean[:20]}"


def is_ascii_diagram(code_block: str) -> bool:
    """Check if a code block contains an ASCII diagram."""
    for pattern in ASCII_PATTERNS:
        if re.search(pattern, code_block, re.MULTILINE):
            return True
    return False


def parse_flow_diagram(ascii_text: str, context_links: dict[str, str]) -> Optional[str]:
    """
    Parse ASCII flow diagram and convert to Mermaid flowchart.
    Returns Mermaid code or None if parsing fails.
    """
    lines = ascii_text.strip().split('\n')

    nodes = []
    edges = []
    node_map = {}  # label -> node_id
    click_statements = []

    # Pattern for detecting flow elements
    arrow_pattern = re.compile(r'^\s*[\|\s]*[↓↑→←v\^]\s*$')
    label_pattern = re.compile(r'[\[\(]?([A-Za-z0-9áčďéěíňóřšťúůýžÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ\s\-\+\,\.\/\(\)]+)[\]\)]?')

    current_node = None
    prev_node = None

    for line in lines:
        line_stripped = line.strip()

        # Skip empty lines, decorative lines, headers
        if not line_stripped or line_stripped.startswith('=') or line_stripped.startswith('-'):
            continue

        # Skip pure arrow lines
        if arrow_pattern.match(line_stripped):
            continue

        # Skip box borders
        if all(c in '┌┬┐├┼┤└┴┘│─┃━╔╦╗╠╬╣╚╩╝║═' for c in line_stripped.replace(' ', '')):
            continue

        # Extract label from line
        # Remove box characters and arrows
        clean_line = re.sub(r'[┌┬┐├┼┤└┴┘│─┃━╔╦╗╠╬╣╚╩╝║═\[\]\(\)↓↑→←]', '', line_stripped)
        clean_line = re.sub(r'^[\s\|v\^]+', '', clean_line)
        clean_line = re.sub(r'[\s\|v\^]+$', '', clean_line)
        clean_line = clean_line.strip()

        if not clean_line or len(clean_line) < 2:
            continue

        # Check if this is a step indicator like [1], [2], etc
        step_match = re.match(r'^\[(\d+)\]\s*(.+)$', clean_line)
        if step_match:
            clean_line = step_match.group(2).strip()

        if clean_line and clean_line not in node_map:
            node_id = generate_node_id(clean_line)
            node_map[clean_line] = node_id

            # Check for internal link
            link_url = None
            for link_label, url in context_links.items():
                if link_label in clean_line.lower():
                    link_url = url
                    break

            # Format node label (escape special chars)
            safe_label = clean_line.replace('"', "'").replace('<', '&lt;').replace('>', '&gt;')
            nodes.append(f'    {node_id}["{safe_label}"]')

            if link_url:
                click_statements.append(f'    click {node_id} "{link_url}" "{clean_line}"')

            # Create edge from previous node
            if prev_node and prev_node != node_id:
                edges.append(f'    {prev_node} --> {node_id}')

            prev_node = node_id

    if len(nodes) < 2:
        return None

    # Build Mermaid diagram
    mermaid_lines = ['flowchart TD']
    mermaid_lines.extend(nodes)
    mermaid_lines.append('')
    mermaid_lines.extend(edges)

    if click_statements:
        mermaid_lines.append('')
        mermaid_lines.extend(click_statements)

    return '\n'.join(mermaid_lines)


def parse_hierarchy_diagram(ascii_text: str, context_links: dict[str, str]) -> Optional[str]:
    """Parse hierarchical ASCII diagram (tree structure)."""
    lines = ascii_text.strip().split('\n')

    nodes = []
    edges = []
    node_map = {}
    click_statements = []

    indent_stack = []  # (indent_level, node_id)

    for line in lines:
        if not line.strip():
            continue

        # Calculate indent level
        indent = len(line) - len(line.lstrip())

        # Extract label
        clean = re.sub(r'^[\s\-\+\*\|├└─┬│]+', '', line)
        clean = clean.strip()

        if not clean or len(clean) < 2:
            continue

        node_id = generate_node_id(clean)
        if clean not in node_map:
            node_map[clean] = node_id
            safe_label = clean.replace('"', "'")
            nodes.append(f'    {node_id}["{safe_label}"]')

            # Check for links
            for link_label, url in context_links.items():
                if link_label in clean.lower():
                    click_statements.append(f'    click {node_id} "{url}" "{clean}"')
                    break

        # Find parent based on indent
        while indent_stack and indent_stack[-1][0] >= indent:
            indent_stack.pop()

        if indent_stack:
            parent_id = indent_stack[-1][1]
            edges.append(f'    {parent_id} --> {node_id}')

        indent_stack.append((indent, node_id))

    if len(nodes) < 2:
        return None

    mermaid_lines = ['flowchart TD']
    mermaid_lines.extend(nodes)
    mermaid_lines.append('')
    mermaid_lines.extend(edges)

    if click_statements:
        mermaid_lines.append('')
        mermaid_lines.extend(click_statements)

    return '\n'.join(mermaid_lines)


def convert_ascii_to_mermaid(ascii_text: str, context_links: dict[str, str]) -> Optional[str]:
    """Main conversion function - tries different parsers."""
    # Try flow diagram parser first
    result = parse_flow_diagram(ascii_text, context_links)
    if result:
        return result

    # Try hierarchy parser
    result = parse_hierarchy_diagram(ascii_text, context_links)
    if result:
        return result

    return None


def process_markdown_file(filepath: Path, dry_run: bool = False) -> dict:
    """Process a single markdown file and convert ASCII diagrams."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Split frontmatter from content
    # Frontmatter is between +++ ... +++ or --- ... ---
    frontmatter_pattern = re.compile(r'^(\+\+\+.*?\+\+\+|\-\-\-.*?\-\-\-)\s*', re.DOTALL)
    fm_match = frontmatter_pattern.match(content)

    if fm_match:
        frontmatter = fm_match.group(0)
        body = content[fm_match.end():]
        body_offset = fm_match.end()
    else:
        frontmatter = ''
        body = content
        body_offset = 0

    # Extract internal links from the whole file for context
    context_links = extract_internal_links(content)

    # Find code blocks only in body (not frontmatter)
    code_block_pattern = re.compile(r'```\s*\n(.*?)\n```', re.DOTALL)

    conversions = []
    new_body = body
    offset = 0

    for match in code_block_pattern.finditer(body):
        code = match.group(1)

        # Check if it's already mermaid
        if code.strip().startswith('flowchart') or code.strip().startswith('graph'):
            continue

        # Check if it's an ASCII diagram
        if not is_ascii_diagram(code):
            continue

        # Try to convert
        mermaid_code = convert_ascii_to_mermaid(code, context_links)

        if mermaid_code:
            # Create replacement with both ASCII (in details) and Mermaid
            replacement = f'''```mermaid
{mermaid_code}
```

<details>
<summary>ASCII verze diagramu</summary>

```
{code}
```

</details>'''

            start = match.start() + offset
            end = match.end() + offset
            new_body = new_body[:start] + replacement + new_body[end:]
            offset += len(replacement) - (end - start)

            conversions.append({
                'original': code[:100] + '...' if len(code) > 100 else code,
                'mermaid': mermaid_code[:100] + '...' if len(mermaid_code) > 100 else mermaid_code
            })

    if conversions and not dry_run:
        # Rejoin frontmatter with modified body
        new_content = frontmatter + new_body
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)

    return {
        'file': str(filepath),
        'conversions': len(conversions),
        'details': conversions
    }


def find_markdown_files(content_dir: Path) -> list[Path]:
    """Find all markdown files in content directory."""
    return list(content_dir.rglob('*.md'))


def main():
    parser = argparse.ArgumentParser(description='Convert ASCII diagrams to Mermaid')
    parser.add_argument('--dry-run', action='store_true', help='Show what would be converted without making changes')
    parser.add_argument('--file', type=str, help='Process single file')
    parser.add_argument('--all', action='store_true', help='Process all markdown files')
    parser.add_argument('--content-dir', type=str, default='content', help='Content directory path')
    parser.add_argument('--json', action='store_true', help='Output results as JSON')

    args = parser.parse_args()

    if not args.file and not args.all:
        parser.print_help()
        sys.exit(1)

    results = []

    if args.file:
        filepath = Path(args.file)
        if not filepath.exists():
            print(f"Error: File not found: {filepath}", file=sys.stderr)
            sys.exit(1)
        result = process_markdown_file(filepath, args.dry_run)
        results.append(result)

    if args.all:
        content_dir = Path(args.content_dir)
        if not content_dir.exists():
            print(f"Error: Content directory not found: {content_dir}", file=sys.stderr)
            sys.exit(1)

        files = find_markdown_files(content_dir)
        for filepath in files:
            result = process_markdown_file(filepath, args.dry_run)
            if result['conversions'] > 0:
                results.append(result)

    if args.json:
        print(json.dumps(results, indent=2, ensure_ascii=False))
    else:
        total = sum(r['conversions'] for r in results)
        print(f"\n{'[DRY RUN] ' if args.dry_run else ''}Conversion Summary:")
        print(f"  Files processed: {len(results)}")
        print(f"  Diagrams converted: {total}")

        for result in results:
            if result['conversions'] > 0:
                print(f"\n  {result['file']}: {result['conversions']} conversions")


if __name__ == '__main__':
    main()
