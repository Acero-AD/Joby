## Context

The frontend uses TypeScript + React via Inertia.js (~1,172 lines across 23 files in `app/javascript/`). There is no linting or formatting tooling configured. The project uses Bun as the JS runtime and bundler.

## Goals / Non-Goals

**Goals:**
- Automated static analysis catching bugs and anti-patterns in TypeScript/React code
- Consistent code formatting across all frontend files
- No conflicts between ESLint and Prettier rules
- Simple npm scripts for developer workflow
- CI integration via `bin/ci`

**Non-Goals:**
- Linting CSS/Tailwind classes (Tailwind v4 handles this differently)
- Git hooks (pre-commit) — keep it simple for now
- Linting Ruby or non-JS files
- Custom ESLint plugins or complex rule customization

## Decisions

### ESLint v9 flat config over legacy `.eslintrc`

Use the new `eslint.config.js` flat config format. ESLint v9 is current and the legacy config format is deprecated. Flat config is simpler and more explicit.

**Alternative**: `.eslintrc.json` — rejected because it's deprecated and will be removed in ESLint v10.

### eslint-config-prettier over eslint-plugin-prettier

Use `eslint-config-prettier` to disable ESLint rules that conflict with Prettier, rather than running Prettier as an ESLint rule. This keeps concerns separated — ESLint for code quality, Prettier for formatting.

**Alternative**: `eslint-plugin-prettier` — rejected because it's slower (runs Prettier inside ESLint) and produces noisier output.

### Minimal rule customization

Start with recommended presets (`eslint:recommended`, `typescript-eslint/recommended`, `plugin:react/recommended`) and `eslint-config-prettier`. Only add custom rules if the defaults cause friction.

**Alternative**: Strict/stylistic rulesets — rejected to avoid fighting the linter early on. Can tighten later.

### Prettier defaults with minimal overrides

Use Prettier's defaults (print width 80, double quotes, semicolons, trailing commas). Only override if the existing codebase has a strong divergent pattern.

**Alternative**: Heavy customization — rejected per Prettier's philosophy of minimal config.

## Risks / Trade-offs

- **Initial fix churn**: Existing files will need formatting fixes, creating a noisy diff → Mitigate by doing all fixes in a single dedicated commit
- **Bun compatibility**: Some ESLint plugins may have edge cases with Bun → Mitigate by testing `bun run lint` during setup; fall back to npx if needed
