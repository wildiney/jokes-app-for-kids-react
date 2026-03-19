# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm run dev          # Start dev server on port 3000

# Build & Preview
npm run build        # TypeScript compile + Vite production build
npm run preview      # Preview production build locally

# Lint
npm run lint         # ESLint with auto-fix on src/

# Test
npx vitest           # Run all tests
npx vitest run       # Run tests once (CI mode)
npx vitest run src/components/Jokes  # Run a single test file/directory

# Deploy
npm run deploy       # Build + deploy to GitHub Pages
```

## Architecture

A single-page PWA displaying kid-friendly Portuguese riddles (Q&A jokes) one at a time.

**State management:** React Context API only (`src/context/jokes-context.tsx`). The `JokesProvider` wraps the app in `main.tsx`, holding the jokes array (shuffled on init), current index, and a `changeNumberHandler` navigation function. No routing — single view.

**Data flow:** `jokes.json` → shuffled on load → `JokesContext` tracks index → `Jokes` component renders current joke → `Button` calls `changeNumberHandler` to advance.

**Component structure:** Functional components with CSS Modules (`.module.css` per component). No component library. Styling uses CSS custom properties defined in `App.css`.

**Testing:** Vitest + Testing Library (JSDOM environment). No test files currently exist — new tests go alongside components.

**Deployment:** GitHub Pages via `gh-pages`. Vite base path is `/jokes-app-for-kids-react/`.

## Key Notes

- TypeScript strict mode is enabled — `noUnusedLocals`, `noUnusedParameters` are enforced.
- Tailwind CSS is installed but not actively used; styling is CSS Modules + custom properties.
- ESLint is configured to allow unescaped HTML entities (needed for joke punctuation).
- PWA service worker uses Workbox auto-update strategy.
