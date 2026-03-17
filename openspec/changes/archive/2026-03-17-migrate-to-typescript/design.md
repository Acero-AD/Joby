## Context

The frontend has 14 React components (.jsx) and 3 Stimulus controllers (.js) built with Bun. There's no TypeScript configuration yet. Bun natively supports TypeScript transpilation, so no additional build tooling is needed — just renaming files and adding type annotations.

## Goals / Non-Goals

**Goals:**
- All React components and pages use `.tsx` with typed props
- Shared type definitions for backend data shapes (User, Position, Stats, Pagination)
- Strict `tsconfig.json` configured for React JSX
- Build pipeline works unchanged (Bun handles `.tsx` natively)

**Non-Goals:**
- Adding runtime type validation (e.g., zod)
- Typing Stimulus controllers beyond basic renaming to `.ts`
- Achieving 100% strict typing in first pass — `any` is acceptable for complex edge cases

## Decisions

### 1. Type definitions in a single `types.ts` file
Props interfaces will live in each component file. Shared data types (User, Position, etc.) go in `app/javascript/types.ts`. This keeps things simple — one import path for shared types, co-located prop types.

**Alternative**: Separate `types/` directory with one file per model → overkill for ~4 types.

### 2. Use Bun's built-in TypeScript support
Bun transpiles TypeScript natively — no need for `tsc` in the build pipeline. We add `typescript` as a dev dependency only for IDE support and `tsc --noEmit` type checking.

**Alternative**: Add `tsc` to the build chain → unnecessary overhead, Bun already handles it.

### 3. Strict tsconfig
Use `"strict": true` from the start. It's easier to start strict than to tighten later.

### 4. Rename files in-place with `git mv`
Use `git mv` to preserve file history.

## Risks / Trade-offs

- **Risk**: Bun's TypeScript support may have edge cases with certain TS features → Mitigation: We use standard React patterns, nothing exotic.
- **Trade-off**: Adding types to every component prop is upfront work, but pays off immediately with IDE autocomplete and error catching.
