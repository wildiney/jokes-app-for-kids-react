# Uncle's Jokes 😄

A kid-friendly PWA that displays Portuguese riddles (charadas) one at a time — built for children aged 5–10.

**Live demo:** https://wildiney.github.io/jokes-app-for-kids-react/

---

## Features

- Shuffled riddles on every visit — no two sessions are the same
- Answer reveals automatically after 2 seconds with a bouncy animation
- Installable as a PWA (works offline after first visit)
- Vibrant, readable UI designed for young children

## Tech stack

| Layer | Tool |
|---|---|
| Framework | React 19 + TypeScript |
| Build | Vite 6 |
| Styling | CSS Modules + CSS custom properties |
| Font | Nunito (Google Fonts) |
| PWA | vite-plugin-pwa (Workbox) |
| Tests | Vitest + Testing Library |
| Deploy | GitHub Pages via `gh-pages` |

## Getting started

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

## Commands

```bash
pnpm dev        # Start dev server
pnpm build      # TypeScript check + production build
pnpm preview    # Preview production build locally
pnpm lint       # ESLint with auto-fix
pnpm deploy     # Build + deploy to GitHub Pages
pnpm exec vitest      # Run tests in watch mode
pnpm exec vitest run  # Run tests once (CI)
```

## Project structure

```
src/
  components/
    Header/         # App title bar
    Footer/         # Copyright footer
    Jokes/          # Joke list container
      Joke/         # Single riddle card (question + answer)
    shared/
      Buttons/      # Reusable button component
  context/
    jokes-context.tsx   # Global state (shuffled jokes, current index)
  jokes.json            # Riddle data
```

## Architecture

State is managed with the React Context API only. `JokesProvider` wraps the app in `main.tsx`, holding the shuffled jokes array and the current index. The `Jokes` component reads context and renders the current `<Joke>`. The `Button` calls `changeNumberHandler` to advance to the next riddle. No routing — single view.
