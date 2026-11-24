# Provenance (short)

This repository is a deliberately small extract of a private Turkish learning-site project owned by the author.

- Included: the FastAPI backend (`backend/`), the dashboard/quiz/progress client JavaScript, the CSS, and new files written for this extract (`mkdocs.yml`, `docs/index.md`, `docs/dashboard.md` adapted without the old lesson list, `docs/assets/js/local-config.js`, `requirements*.txt`, tests).
- Not included: lessons, 158 translated/reference pages, example projects, CDN-loaded editor/ecosystem modules, deploy scripts, the original git history, local databases and secrets.
- Changed after extraction: `backend/main.py`, `backend/rate_limit.py`, `docs/assets/js/api-client.js` and the JS entry points were hardened (CORS limited to `http://localhost:8000`, no trusted proxy headers, visible errors without a secure UUID API), so they are no longer byte-identical to the private source.
- Rights: selected by the owner from their own code. Git authorship is evidence of origin, not a legal proof of every contribution. No independent rights review has been done.
