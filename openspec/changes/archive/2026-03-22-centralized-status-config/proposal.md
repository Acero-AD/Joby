## Why

Status-related data (colors, keys, stat card styling) is scattered across multiple components. `StatusBadge` owns the badge colors, `AddApplicationModal` owns the status key list, and `StatsRow` hardcodes stat card colors per status. Changing a status color or adding a new status requires editing multiple files. A single config file would make this a one-place change.

## What Changes

- Create a `statusConfig.ts` file as the single source of truth for all status-related data: keys, badge colors, and stat card styling
- Refactor `StatusBadge`, `AddApplicationModal`, `StatsRow`, and `StatCard` to consume from the config
- Remove hardcoded color values from individual components

## Capabilities

### New Capabilities
- `status-config`: Centralized status configuration defining keys, badge colors, and stat card styling for all application statuses

### Modified Capabilities

None — visual output is identical, just restructured.

## Impact

- **New file**: `app/javascript/config/statusConfig.ts`
- **Files modified**: `StatusBadge.tsx`, `AddApplicationModal.tsx`, `StatsRow.tsx`, `StatCard.tsx`
- **Dependencies**: None
- **Risk**: Low — pure refactor, no visual changes
