## ADDED Requirements

### Requirement: TypeScript configuration
The project SHALL have a `tsconfig.json` with `strict: true`, JSX set to `react-jsx`, and paths resolving from `app/javascript/`.

#### Scenario: Valid TypeScript config
- **WHEN** `tsc --noEmit` is run against the project
- **THEN** it completes with no errors

### Requirement: Shared type definitions
The project SHALL have a `app/javascript/types.ts` file defining interfaces for all backend data shapes: `User`, `Position`, `Stats`, `Pagination`, and `DashboardProps`.

#### Scenario: Types match backend data
- **WHEN** the Dashboard page receives props from the Rails controller
- **THEN** the props SHALL conform to the `DashboardProps` interface

### Requirement: Typed React components
All React component files SHALL use `.tsx` extension and define typed props interfaces.

#### Scenario: Component files use TSX
- **WHEN** listing files in `app/javascript/components/` and `app/javascript/pages/`
- **THEN** all React component files have `.tsx` extension with no remaining `.jsx` files

#### Scenario: Props are typed
- **WHEN** a component accepts props
- **THEN** the component SHALL declare a TypeScript interface or type for its props

### Requirement: Typed entry point
The Inertia entry point SHALL be `app/javascript/application.tsx` and the Bun build config SHALL reference it.

#### Scenario: Build succeeds with TSX entry
- **WHEN** `bun run build` is executed
- **THEN** the build completes successfully using the `.tsx` entry point

### Requirement: TypeScript dependencies
The project SHALL include `typescript`, `@types/react`, and `@types/react-dom` as dependencies.

#### Scenario: Dependencies installed
- **WHEN** `bun install` is run
- **THEN** `typescript`, `@types/react`, and `@types/react-dom` are present in `node_modules`
