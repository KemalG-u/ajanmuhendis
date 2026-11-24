> 🚧 **Status: active development.** It works for the author; interfaces may change.

# ajanmuhendis

[Türkçe](README.tr.md)

A small technical slice of a Turkish AI-learning site ("MühendisAl"): a FastAPI + SQLite backend (anonymous device accounts, page progress, XP, streaks, quiz attempts, feedback) and the matching dashboard/quiz JavaScript, wired into a two-page MkDocs Material site.

It is the starting point for a planned "AjanMühendis" task / run / evidence / rubric studio. **That studio does not exist yet.** What is here today is only the backend and front-end code that was safe to extract. Lessons, translated reference pages and example projects are deliberately not included.

## Quick start

Requirements: Python 3.12 and Node.js (for the JS tests). The pinned lock file `requirements-win312-lock.txt` was resolved for Windows x64 / CPython 3.12 only; on other platforms use `requirements.txt` instead.

```sh
python -m venv .venv
# Windows Git Bash: source .venv/Scripts/activate
# Linux/macOS:      source .venv/bin/activate
python -m pip install --only-binary=:all: --require-hashes -r requirements-win312-lock.txt
python -m mkdocs build --strict
python -m uvicorn backend.main:app --host 127.0.0.1 --port 9100 --no-proxy-headers
# in another terminal:
python -m mkdocs serve -a localhost:8000
```

Open `http://localhost:8000/` (use `localhost`: the API's CORS allow-list contains `http://localhost:8000`, not `127.0.0.1:8000`). Health check: `http://localhost:9100/api/health`.

Tests (synthetic security tests, Node tests for the client code, and a strict site build into a temporary directory):

```sh
python -B tests/dogrula.py
```

## What the API does

| Area | Endpoints |
|---|---|
| Auth | `POST /api/auth/init`, `GET/PATCH /api/me` |
| Progress | `POST /api/progress/seen`, `POST /api/progress/complete`, `GET /api/progress` |
| Quiz | `POST /api/quiz/attempt`, `GET /api/quiz/stats/{page}`, `GET /api/quiz/recent` |
| Streak / feedback | `GET /api/streak`, `GET/POST /api/feedback` |
| XP | `GET /api/xp/daily`, `/weekly`, `/me/total` |

## Limits and honest caveats

- **Not production authentication.** The browser generates a random token with `crypto.randomUUID()`, keeps it in `localStorage` and registers it; the server accepts the client-chosen token. There is no logout, revocation or recovery, and anyone holding the token is that account.
- **Quiz results are client-reported.** The server awards XP from what the client says; this is not a verified exam and not cheat-resistant.
- **Privacy.** Starting the API creates `backend/data.db`; opening the page can create an account record; POST requests are logged with the peer IP and endpoint. Do not use real user data and do not expose the API to a public network. The rate limiter uses the direct peer address (`X-Forwarded-For` is not trusted), so behind a proxy all users share one address.
- **Verification so far:** Python 3.12 strict build, 4 Python security tests, 4 Node tests (a Node VM, not a real browser) and a loopback HTTP smoke test. Browser end-to-end flows have **not** been tested, and no independent privacy or rights review has been done.
- Many dashboard widgets need lesson content that is not included, so they are inactive. There is no AI provider or agent functionality.
- Dependencies are not vendored; see `THIRD_PARTY_NOTICES.md` for the licence inventory. How the code was selected and adapted is summarised in `PROVENANCE.md`.

## Turkey-specific notes

The site, its UI strings and the content model are in Turkish. The Turkish README is `README.tr.md`.

## Licence

MIT, see `LICENSE`. Copyright (c) 2026 Kemal (KarıncaAI). Dependencies keep their own licences. Report security issues privately, see `SECURITY.md`.
