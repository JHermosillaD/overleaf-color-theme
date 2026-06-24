# Overleaf Light Color Theme

![Installs](https://vsmarketplacebadge.apphb.com/installs/jhermosillad.overleaf-color-theme.svg)
![License](https://img.shields.io/github/license/jhermosillad/overleaf-vsc-template.svg)

An unofficial VS Code theme and LaTeX workspace initializer inspired by Overleaf.

## Features

- Light color theme matching Overleaf's editor aesthetic
- One-command LaTeX workspace initializer (adds settings, recommendations).
- Auto-cleans build artifacts after compilation
- SyncTeX double-click enabled by default

## Usage

#### Apply the theme
Open the command palette (`Ctrl+Shift+P`) > Preferences: Color Theme > *Overleaf Light Color Theme*

#### Initialize a LaTeX workspace
Open any LaTeX project folder > Open the command palette (`Ctrl+Shift+P`) > *Overleaf: Initialize LaTeX Workspace*

This adds three files to your project (existing files are never overwritten):

| File | Description |
|---|---|
| `.vscode/settings.json` | Auto-clean build files, word wrap, SyncTeX |
| `.vscode/extensions.json` | Recommends LaTeX Workshop |
| `.gitignore` | Ignores all LaTeX build artifacts |

## Requirements

- [LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop)
- A local LaTeX distribution (TeX Live or MiKTeX)

---
*This project is not affiliated with or endorsed by Overleaf / Digital Science.*