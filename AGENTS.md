# AI Tools Hub — working notes

Static marketing site for an AI tools directory. There is no backend, no build
step, no package manager and no database: the site is plain HTML/CSS/JS.

## Layout

- `public/` — the whole website (`index.html`, `tutorials.html`, `privacy.html`,
  `terms.html`, `style.css`, `script.js`). This directory is what gets served;
  put every new page or asset here.
- `AI_Tools_Hub_website.zip` — the original upload this site was extracted from.
  Ignore it; edit the files in `public/`.

## Running it

```sh
docker compose -f docker-compose.base44.yml up -d
```

Serves `public/` over nginx on **host port 3000**. Files are bind-mounted
read-only, so a change to any file in `public/` is served immediately — no
rebuild, no restart. The preview iframe will not refresh by itself; force a
reload to see edits.

## What the site does

- `index.html#tools` renders the tool directory from the `tools` array in
  `public/script.js` (name, category, description, official URL).
- The search box filters that array live; the category tiles under
  `#categories` set the same filter via their `data-filter` attribute. A
  category filter with no matching tool shows the "No tools found" message.
- `tutorials.html`, `privacy.html`, `terms.html` are static content pages.

Note: the tool categories in the directory include `Research`, which is not one
of the six category tiles — that is intentional in the data, not a bug.

## Not wired up

- The contact form in `index.html` posts to `formsubmit.co` with the literal
  placeholder `REPLACE_WITH_YOUR_EMAIL`; it will not deliver mail until the
  owner substitutes a real address. No credentials are required to run this
  site, and no compose service depends on any secret.
- No analytics or advertising is included.

## Verifying it works

1. `curl -s -o /dev/null -w '%{http_code}\n' http://localhost:3000/` → `200`.
2. Load `/` and confirm the tool grid fills with 8 cards from `script.js`.
3. Type in the search box and confirm the grid narrows; click a category tile
   and confirm the box is populated with that category and the grid filters.
4. Load `/tutorials.html`, `/privacy.html` and `/terms.html` and confirm each
   renders its heading.
