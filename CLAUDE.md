# Instructions for Claude

This project uses plain `.jsx` (not `.tsx` — there's no TypeScript here).

Whenever you edit any file under `src/` that affects rendered UI (components, `App.jsx`, `App.css`), regenerate the screenshots in `docs/`:

- `docs/screenshot.png` — the unit list view (any category, e.g. Space Weirdos Melee/Ranged/Casters)
- `docs/screenshot-lookup.png` — a d20 lookup result view (click any state button to reach it)

To do this: start the dev server, open it in a mobile-sized viewport (~390x844) with chrome-devtools MCP tools, take each screenshot with `take_screenshot`'s `filePath` option pointing at the corresponding `docs/` file, then stop the dev server. Both images are already embedded in `README.md`, so no README edits are needed unless the layout changes significantly.
