## Why

The frontend has no linting or formatting tooling. Code style consistency relies entirely on developer discipline, which doesn't scale. Adding ESLint and Prettier establishes automated guardrails that catch bugs, enforce conventions, and keep formatting uniform across all TypeScript/React files.

## What Changes

- Add ESLint with TypeScript and React plugins for static analysis
- Add Prettier for automatic code formatting
- Configure ESLint-Prettier integration to avoid rule conflicts
- Add npm scripts for linting and formatting (`lint`, `lint:fix`, `format`)
- Fix any existing violations in the current codebase
- Add lint step to `bin/ci`

## Capabilities

### New Capabilities
- `eslint-config`: ESLint configuration with TypeScript and React rules, integrated with Prettier
- `prettier-config`: Prettier configuration for consistent code formatting
- `lint-scripts`: npm scripts and CI integration for running linters

### Modified Capabilities

None — this is tooling-only, no behavioral changes to existing features.

## Impact

- **Dependencies**: New devDependencies (eslint, prettier, related plugins/configs)
- **Files**: New config files (`.eslintrc.*`, `.prettierrc.*`, `.prettierignore`)
- **CI**: `bin/ci` updated to include lint check
- **Existing code**: Minor formatting/lint fixes across `app/javascript/` files
