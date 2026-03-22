## ADDED Requirements

### Requirement: ESLint configuration file exists
The project SHALL have an `eslint.config.js` file at the repository root using ESLint v9 flat config format.

#### Scenario: Config file present
- **WHEN** a developer checks the repository root
- **THEN** an `eslint.config.js` file exists

### Requirement: TypeScript support
ESLint SHALL be configured with `typescript-eslint` to analyze `.ts` and `.tsx` files.

#### Scenario: TypeScript files are linted
- **WHEN** `bun run lint` is executed
- **THEN** all `.ts` and `.tsx` files in `app/javascript/` are checked

### Requirement: React support
ESLint SHALL include `eslint-plugin-react` and `eslint-plugin-react-hooks` with recommended rules.

#### Scenario: React rules enforced
- **WHEN** a component violates React hook rules (e.g., conditional hook call)
- **THEN** ESLint reports an error

### Requirement: Prettier conflict prevention
ESLint SHALL include `eslint-config-prettier` to disable all rules that conflict with Prettier.

#### Scenario: No formatting rules from ESLint
- **WHEN** ESLint runs on a Prettier-formatted file
- **THEN** ESLint reports zero formatting-related violations

### Requirement: Scoped to frontend files
ESLint SHALL only target files in `app/javascript/` and ignore build output, node_modules, and non-JS files.

#### Scenario: Build files excluded
- **WHEN** `bun run lint` is executed
- **THEN** files in `app/assets/builds/` and `node_modules/` are NOT linted
