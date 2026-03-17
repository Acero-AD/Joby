## Why

The React frontend currently uses plain JavaScript (.jsx). Migrating to TypeScript now — while there are only ~14 component files — avoids a much larger migration later and gives us type safety for props, Inertia page data, and API contracts going forward.

## What Changes

- Rename all `.jsx` files under `app/javascript/` to `.tsx` (components, pages, entry point)
- Rename Stimulus `.js` controllers to `.ts`
- Add a `tsconfig.json` with strict settings appropriate for React + Inertia
- Add TypeScript type definitions for shared data shapes (User, Position, Pagination, Stats)
- Update `bun.config.js` entrypoint from `.jsx` to `.tsx`
- Add `typescript` and `@types/react`, `@types/react-dom` dependencies

## Capabilities

### New Capabilities
- `typescript-setup`: TypeScript configuration, type definitions, and build pipeline integration

### Modified Capabilities

_(none — no spec-level behavior changes, only implementation language)_

## Impact

- **Files**: All 14 `.jsx` component/page files renamed to `.tsx`, 3 Stimulus `.js` files renamed to `.ts`
- **Build**: `bun.config.js` entrypoint changes from `application.jsx` to `application.tsx`
- **Dependencies**: `typescript`, `@types/react`, `@types/react-dom` added to `package.json`
- **No runtime behavior changes** — this is purely a developer-experience improvement
