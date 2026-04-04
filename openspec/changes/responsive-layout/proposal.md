## Why

The app is built with a hardcoded `1440px × 900px` container, making it completely unusable on mobile or tablet devices. As the app grows in features, retrofitting responsiveness becomes increasingly expensive — doing it now, before the feature set expands, is the right moment.

## What Changes

- Remove fixed-pixel root container (`w-[1440px] h-[900px]`) in favor of fluid, full-viewport layout
- Sidebar becomes a collapsible drawer (mobile) or stays visible (tablet/desktop)
- Right sidebar hidden on mobile and tablet, visible on desktop only
- Stats row wraps to a 2×2 grid on mobile
- Applications table transforms into a card list on mobile, compact table on tablet
- Modals become full-screen sheets on mobile
- Touch targets enlarged across interactive elements
- Breakpoints: mobile < 640px, tablet 640–1024px, desktop > 1024px

## Capabilities

### New Capabilities

- `responsive-layout`: Fluid layout system replacing fixed-pixel root container, with breakpoint-aware composition for all pages
- `mobile-navigation`: Mobile navigation pattern (bottom bar or hamburger drawer) replacing always-visible left sidebar on small screens
- `responsive-table`: Applications table adapts to a card list on mobile and compact table on tablet

### Modified Capabilities

- `dashboard-layout`: Layout constraints change — no longer fixed dimensions, now fluid and breakpoint-driven
- `applications-table`: Rendering changes by breakpoint — full table on desktop, card list on mobile
- `position-detail-view`: Layout stacks vertically on mobile instead of side-by-side columns

## Impact

- `app/javascript/pages/Dashboard/Index.tsx` — root container + layout
- `app/javascript/pages/Positions/Show.tsx` — root container + detail layout
- `app/javascript/components/Sidebar.tsx` — collapsible/drawer behavior
- `app/javascript/components/RightSidebar.tsx` — hidden on mobile/tablet
- `app/javascript/components/ApplicationsTable.tsx` — card list variant
- `app/javascript/components/StatsRow.tsx` — wrapping grid
- `app/javascript/components/AddApplicationModal.tsx` — full-screen on mobile
- `app/javascript/components/EditApplicationModal.tsx` — full-screen on mobile
- `app/javascript/components/DeleteConfirmationModal.tsx` — full-screen on mobile
- No backend changes, no new dependencies — pure Tailwind breakpoint work
