# Personal Homepage (Simplified)

This repository now uses a minimal static homepage setup.

## Files you only need to edit

- `index.html`: layout, style, and page behavior
- `content/main.md`: main homepage content (news, papers, experience, etc.)
- `images/`: your avatar and paper figures

## Why this is simpler

- no Jekyll build dependency
- no Ruby/Gem setup
- no theme include/layout complexity
- content updates from one markdown file

## Local preview

Use a simple static server:

`python3 -m http.server 8000`

Then open `http://127.0.0.1:8000`.
