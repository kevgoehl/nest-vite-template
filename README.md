nest-vite-template
===========

Monorepo template for a NestJS backend and a Vite + React frontend (Tailwind + shadcn-style UI), with a single dev entry and backend-served production build.

Features
- npm workspaces monorepo: `apps/backend` + `apps/frontend`
- One-command dev runner spawns both servers
- Vite proxy for `/api` during dev
- Production build served by Nest via `@nestjs/serve-static` (guarded)
- Ready-to-use shadcn-style Button and utilities
- Issue/PR templates and EditorConfig

Getting Started
- Install: `npm install`
- Dev: `npm run dev` (frontend at http://localhost:5173, backend at http://localhost:3000)
- Build: `npm run build` (builds frontend then backend)
- Start (prod): `npm start` (Nest serves the built frontend)
- Start (build + prod): `npm run start:all` (builds then starts in one command)

Project Structure
- `apps/backend`: NestJS app
  - `src/app.module.ts`: serves built frontend when available
  - `src/app.controller.ts`: `GET /api/health`
  - `.env.example`: documents `PORT` and `SERVE_STATIC`
- `apps/frontend`: Vite + React
  - Tailwind configured; shadcn-style `Button` in `src/components/ui`
  - `components.json` for shadcn/ui CLI compatibility
  - `.env.example` for Vite public vars
- `scripts/run-dev.mjs`: single entry that runs both dev servers

shadcn/ui
- Add more components in `apps/frontend` with: `npx shadcn@latest add <component>`

Environment Variables
- Backend: copy `apps/backend/.env.example` to `.env` and adjust. `PORT`, `SERVE_STATIC` supported.
- Frontend: public vars must be prefixed with `VITE_` (see `.env.example`).

Notes
- In dev, open the frontend at http://localhost:5173 (Vite proxy forwards `/api`).
- In prod, `npm start` serves the compiled frontend from the backend. Set `SERVE_STATIC=false` to disable static serving.

License
- MIT. Free to use, modify, and redistribute. Please retain the copyright and permission notice in copies or substantial portions of the software.
- Attribution appreciated: link back to this template or mention the original in your README.

Attribution (optional)
If you want to give credit in your project, you can add one of these to your README:

Markdown line:
```
Built from a template by @kevgoehl (https://github.com/kevgoehl).
```

Badge:
```
[![Template](https://img.shields.io/badge/template-by%20%40kevgoehl-blue)](https://github.com/kevgoehl)
```
 
