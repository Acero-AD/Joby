## ADDED Requirements

### Requirement: Mobile has a top app bar with menu trigger
On mobile viewports (< 640px), the system SHALL render a top app bar containing the Joby logo and a hamburger menu icon button. The left sidebar SHALL be hidden by default.

#### Scenario: Top app bar visible on mobile
- **WHEN** viewport width is below 640px
- **THEN** a top bar with the Joby logo and a hamburger icon SHALL be visible at the top of the screen

#### Scenario: Left sidebar hidden by default on mobile
- **WHEN** viewport width is below 640px
- **THEN** the sidebar SHALL NOT be visible without user interaction

### Requirement: Mobile sidebar opens as a drawer
On mobile, tapping the hamburger button SHALL open the sidebar as a full-height overlay drawer from the left, with a backdrop overlay behind it.

#### Scenario: Open drawer
- **WHEN** a user taps the hamburger icon on mobile
- **THEN** the sidebar drawer SHALL slide in from the left and a semi-transparent backdrop SHALL appear behind it

#### Scenario: Close drawer via backdrop
- **WHEN** a user taps the backdrop while the drawer is open
- **THEN** the drawer SHALL close

#### Scenario: Drawer closes on navigation
- **WHEN** a user taps a navigation item in the open drawer
- **THEN** the drawer SHALL close after navigation

### Requirement: Tablet shows an icon-only collapsed sidebar
On tablet viewports (640px–1024px), the system SHALL render a collapsed sidebar showing only navigation icons, without labels, language switcher, or user profile section.

#### Scenario: Tablet sidebar renders icon-only
- **WHEN** viewport width is between 640px and 1024px
- **THEN** the sidebar SHALL be visible with icon-only navigation items and no text labels

#### Scenario: Desktop sidebar unchanged
- **WHEN** viewport width is above 1024px
- **THEN** the sidebar SHALL render exactly as in the current desktop design with all labels and sections visible
