---
name: update-screenshots
description: Regenerate the README screenshots in docs/ after a UI-affecting change under src/
allowed-tools: Bash, mcp__chrome-devtools__new_page, mcp__chrome-devtools__navigate_page, mcp__chrome-devtools__resize_page, mcp__chrome-devtools__take_snapshot, mcp__chrome-devtools__take_screenshot, mcp__chrome-devtools__click, mcp__chrome-devtools__close_page
---

# Update Screenshots

Regenerate the two screenshots embedded in `README.md` after any change to `src/` that affects
rendered UI (components, `App.jsx`, `App.css`).

- `docs/screenshot.png` — the unit list view (any category, e.g. Space Weirdos Melee/Ranged/Casters)
- `docs/screenshot-lookup.png` — a d20 lookup result view (click any state button to reach it)

## Steps

1. Start the dev server in the background (`npm run dev`) and wait for it to be ready.
2. Open it with `mcp__chrome-devtools__new_page`, then `mcp__chrome-devtools__resize_page` to a
   mobile-sized viewport (~390x844).
3. Take the unit list screenshot with `mcp__chrome-devtools__take_screenshot`, using its
   `filePath` option to write directly to `docs/screenshot.png`.
4. Click any state button (e.g. under Melee/Ranged) to reach a d20 lookup result, then take the
   second screenshot to `docs/screenshot-lookup.png`.
5. Close the page and stop the dev server.

Both images are already embedded in `README.md`, so no README edits are needed unless the layout
changes significantly (e.g. new sections that should also be documented/screenshotted).
