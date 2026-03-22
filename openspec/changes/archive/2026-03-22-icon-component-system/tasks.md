## 1. Create Icon Component

- [x] 1.1 Create `app/javascript/components/Icon.tsx` with the Icon component and icon registry containing all 28 icons

## 2. Migrate Components

- [x] 2.1 Replace inline SVGs in `Header.tsx` with Icon component
- [x] 2.2 Replace inline SVGs in `Sidebar.tsx` and `NavItem.tsx` with Icon component
- [x] 2.3 Replace inline SVGs in `ApplicationsTable.tsx` with Icon component
- [x] 2.4 Replace inline SVGs in `Pagination.tsx` with Icon component
- [x] 2.5 Replace inline SVGs in `StatCard.tsx` and `StatsRow.tsx` with Icon component
- [x] 2.6 Replace inline SVGs in `AddApplicationModal.tsx` with Icon component
- [x] 2.7 Replace inline SVGs in `DeleteConfirmationModal.tsx` with Icon component
- [x] 2.8 Replace inline SVGs in `InterviewItem.tsx` and `QuickActionButton.tsx` with Icon component
- [x] 2.9 Replace inline SVGs in `Positions/Show.tsx` with Icon component

## 3. Verify

- [x] 3.1 Grep for remaining `<svg` tags in app/javascript/ (excluding Icon.tsx) and confirm zero matches
- [x] 3.2 Run lint and format checks pass
- [x] 3.3 Run Rails tests pass
