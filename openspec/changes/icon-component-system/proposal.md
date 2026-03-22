## Why

The frontend has 34+ inline SVGs scattered across 10 components, with 8 icon types duplicated in multiple places. Adding or changing an icon requires copy-pasting SVG markup and hoping it stays consistent. A centralized Icon component would eliminate duplication, make icons easy to use, and keep the codebase clean.

## What Changes

- Create an `Icon` React component that renders icons by name
- Define all 28 existing icons as a centralized icon registry
- Replace all inline SVGs across the codebase with `<Icon name="..." />` calls
- Remove the per-component icon mapping objects (in NavItem, StatCard, InterviewItem, QuickActionButton)

## Capabilities

### New Capabilities
- `icon-system`: Centralized Icon component with a registry of all SVG icons, accepting name, size, and className props

### Modified Capabilities

None — this is a refactor. Existing components render the same icons, just sourced differently.

## Impact

- **Files modified**: All 10 components currently containing inline SVGs
- **New files**: `app/javascript/components/Icon.tsx` (component + icon registry)
- **Dependencies**: None — pure React, no icon library needed
- **Risk**: Low — visual output is identical, just restructured
