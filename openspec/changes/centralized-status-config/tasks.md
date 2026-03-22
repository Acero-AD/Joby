## 1. Create Status Config

- [x] 1.1 Create `app/javascript/config/statusConfig.ts` with all status definitions (badge colors, keys list, stat card styling)

## 2. Migrate Components

- [x] 2.1 Refactor `StatusBadge.tsx` to use badge colors from statusConfig
- [x] 2.2 Refactor `AddApplicationModal.tsx` to use status keys from statusConfig
- [x] 2.3 Refactor `StatsRow.tsx` to use stat card styling from statusConfig
- [x] 2.4 Simplify `StatCard.tsx` props if applicable (no changes needed — stays generic)

## 3. Verify

- [x] 3.1 Run lint and format checks
- [x] 3.2 Run Rails tests
