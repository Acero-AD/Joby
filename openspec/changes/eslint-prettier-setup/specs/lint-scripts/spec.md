## ADDED Requirements

### Requirement: Lint script available
The project SHALL have a `lint` script in `package.json` that runs ESLint on all frontend files.

#### Scenario: Run lint
- **WHEN** a developer runs `bun run lint`
- **THEN** ESLint checks all files in `app/javascript/`

### Requirement: Lint fix script available
The project SHALL have a `lint:fix` script in `package.json` that auto-fixes ESLint violations where possible.

#### Scenario: Run lint fix
- **WHEN** a developer runs `bun run lint:fix`
- **THEN** ESLint auto-fixes all fixable violations in `app/javascript/`

### Requirement: Format script available
The project SHALL have a `format` script in `package.json` that runs Prettier on all frontend files.

#### Scenario: Run format
- **WHEN** a developer runs `bun run format`
- **THEN** Prettier formats all files in `app/javascript/`

### Requirement: Format check script available
The project SHALL have a `format:check` script in `package.json` that checks formatting without modifying files.

#### Scenario: Run format check
- **WHEN** a developer runs `bun run format:check`
- **THEN** Prettier reports any unformatted files without modifying them

### Requirement: CI integration
The `bin/ci` script SHALL run lint and format checks so that CI fails on violations.

#### Scenario: CI catches lint errors
- **WHEN** `bin/ci` is executed and there are ESLint violations
- **THEN** the script exits with a non-zero status

#### Scenario: CI catches formatting issues
- **WHEN** `bin/ci` is executed and there are unformatted files
- **THEN** the script exits with a non-zero status
