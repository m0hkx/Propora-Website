# AGENTS.md

Vite + React 19 + TypeScript template, pre-Propora rebrand. No tests, CI, Tailwind, router, or backend.

## Entrypoints

- `index.html` → `src/main.tsx` → `src/App.tsx` (composes sections from `src/components/`)
- Landing styles: `src/index.css` (tokens + primitives) + `src/landing.css` (section layouts) + `src/atmosphere.css` (fixed architectural backdrop); demo data in `src/data/site.ts`
- Config: `vite.config.ts` (bare `react()` plugin), `tsconfig.json` references `tsconfig.app.json` (`src`) + `tsconfig.node.json` (`vite.config.ts`)

## Commands

- `npm run dev` — HMR dev server
- `npm run build` — `tsc -b && vite build`; always run before finishing (typecheck + build in one)
- `npm run lint` — `eslint .` (flat config, `dist` ignored)
- `npm run preview` — serve `dist/` locally
- No test runner, formatter, or CI — `build` + `lint` is the full verification

## TypeScript / lint gotchas

- `noUnusedLocals` + `noUnusedParameters` on — unused imports/vars fail `npm run build`
- `verbatimModuleSyntax`: use `import type { … }` for type-only imports
- `erasableSyntaxOnly`: no enums, namespaces, or parameter properties
- `allowImportingTsExtensions` + `moduleResolution: bundler` — import with `.tsx` extension where used (see `main.tsx`)
- ESLint is `recommended` only (not type-checked); `react-hooks` + `react-refresh` apply — don't export non-components from component files

## Styling — read before touching CSS

- Source of truth for all new Propora UI: `design-system/colors.md` (§11 tokens, §16 drop-in snippets, §6 approved gradients, §13–14 usage rules). Reuse HEX/radius/shadow values verbatim; don't invent colors.
- `src/index.css` now implements the Propora tokens (§11) + button/badge primitives (§5). `src/App.css` is dead template leftover — do not import it.
- Plain CSS only — do not add Tailwind (`colors.md` §11 mapping is conceptual-only), no dark theme except the approved ink→teal CTA panel, no glassmorphism beyond the topbar pattern, body text never pure black (`#134E4A`).
- Assets: bundled images live in `src/assets/` (imported); shared icons in `public/icons.svg` referenced as `<use href="/icons.svg#<id>">`.
