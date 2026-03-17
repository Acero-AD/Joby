## 1. Dependencies & Configuration

- [x] 1.1 Add `typescript`, `@types/react`, `@types/react-dom` via bun
- [x] 1.2 Create `tsconfig.json` with strict mode, react-jsx, and correct paths
- [x] 1.3 Update `bun.config.js` entrypoint from `application.jsx` to `application.tsx`

## 2. Shared Types

- [x] 2.1 Create `app/javascript/types.ts` with User, Position, Stats, Pagination, and DashboardProps interfaces

## 3. Rename & Type Components

- [x] 3.1 Rename `application.jsx` → `application.tsx` and add types
- [x] 3.2 Rename all component `.jsx` files to `.tsx` and add prop interfaces (Sidebar, Header, NavItem, StatCard, StatsRow, StatusBadge, Pagination, ApplicationsTable, InterviewItem, QuickActionButton, RightSidebar, AddApplicationModal)
- [x] 3.3 Rename `pages/Dashboard/Index.jsx` → `Index.tsx` and type the page props

## 4. Stimulus Controllers

- [x] 4.1 Rename Stimulus `.js` controllers to `.ts`

## 5. Verify

- [x] 5.1 Run `bun run build` and confirm the build succeeds
- [x] 5.2 Run `bin/rails test` and confirm all tests pass
