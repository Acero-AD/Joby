## ADDED Requirements

### Requirement: Prettier configuration file exists
The project SHALL have a `.prettierrc` file at the repository root.

#### Scenario: Config file present
- **WHEN** a developer checks the repository root
- **THEN** a `.prettierrc` file exists

### Requirement: Prettier ignore file exists
The project SHALL have a `.prettierignore` file that excludes build output and non-source files.

#### Scenario: Build files excluded
- **WHEN** `bun run format` is executed
- **THEN** files in `app/assets/builds/`, `node_modules/`, and `vendor/` are NOT formatted

### Requirement: Consistent formatting rules
Prettier SHALL use a consistent configuration across all frontend files. The configuration SHALL use Prettier defaults with minimal overrides appropriate for the existing codebase.

#### Scenario: Formatting applied uniformly
- **WHEN** `bun run format` is executed on all frontend files
- **THEN** all `.ts` and `.tsx` files in `app/javascript/` are formatted identically on repeated runs
