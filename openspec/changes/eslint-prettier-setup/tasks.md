## 1. Install Dependencies

- [x] 1.1 Add ESLint v9, typescript-eslint, eslint-plugin-react, eslint-plugin-react-hooks, and eslint-config-prettier as devDependencies
- [x] 1.2 Add Prettier as a devDependency

## 2. Configuration Files

- [x] 2.1 Create `eslint.config.js` with flat config: TypeScript, React, React Hooks recommended rules, and eslint-config-prettier
- [x] 2.2 Create `.prettierrc` with project formatting rules
- [x] 2.3 Create `.prettierignore` excluding build output, node_modules, and vendor

## 3. Scripts and CI

- [x] 3.1 Add `lint`, `lint:fix`, `format`, and `format:check` scripts to `package.json`
- [x] 3.2 Add lint and format check steps to `bin/ci`

## 4. Fix Existing Code

- [x] 4.1 Run `bun run format` to fix all formatting issues
- [x] 4.2 Run `bun run lint:fix` to auto-fix lint violations
- [x] 4.3 Manually fix any remaining lint errors that can't be auto-fixed
