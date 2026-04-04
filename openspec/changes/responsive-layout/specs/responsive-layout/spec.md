## ADDED Requirements

### Requirement: Root container is fluid and viewport-filling
The system SHALL use a fluid, full-viewport root container on both the Dashboard and Position Show pages. The fixed `1440px × 900px` container SHALL be replaced with `w-full min-h-screen`. Rounded corners SHALL apply only at desktop breakpoints (`lg:` and above).

#### Scenario: App fills viewport on mobile
- **WHEN** a user opens the app on a 390px wide screen
- **THEN** the root container SHALL fill the full viewport width and at least the full viewport height with no horizontal overflow

#### Scenario: App fills viewport on tablet
- **WHEN** a user opens the app on a 768px wide screen
- **THEN** the root container SHALL fill the full viewport width and at least the full viewport height

#### Scenario: Desktop layout preserved
- **WHEN** a user opens the app on a 1440px wide screen
- **THEN** the layout SHALL appear visually equivalent to the current desktop design with rounded corners and gradient background

### Requirement: Breakpoints follow a three-tier system
The system SHALL use three layout tiers: mobile (< 640px), tablet (640px–1024px), and desktop (> 1024px). Tailwind's `sm:` prefix applies at 640px and `lg:` at 1024px.

#### Scenario: Mobile layout on narrow viewport
- **WHEN** viewport width is below 640px
- **THEN** the app SHALL render the mobile layout variant

#### Scenario: Tablet layout on mid-range viewport
- **WHEN** viewport width is between 640px and 1024px
- **THEN** the app SHALL render the tablet layout variant

#### Scenario: Desktop layout on wide viewport
- **WHEN** viewport width is above 1024px
- **THEN** the app SHALL render the desktop layout variant

### Requirement: Right sidebar is hidden on mobile and tablet
The system SHALL hide `RightSidebar` on mobile and tablet viewports.

#### Scenario: Right sidebar hidden on mobile
- **WHEN** viewport width is below 1024px
- **THEN** the right sidebar SHALL NOT be visible or occupy space in the layout

#### Scenario: Right sidebar visible on desktop
- **WHEN** viewport width is above 1024px
- **THEN** the right sidebar SHALL be visible as in the current desktop design
