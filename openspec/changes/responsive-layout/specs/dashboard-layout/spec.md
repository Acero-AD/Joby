## MODIFIED Requirements

### Requirement: Dashboard has a sidebar
The system SHALL render a sidebar with a logo, navigation links, and a user profile section. On desktop (> 1024px), the sidebar SHALL be 260px wide and always visible. On tablet (640–1024px), the sidebar SHALL be collapsed to icon-only width. On mobile (< 640px), the sidebar SHALL be hidden by default and accessible via a drawer triggered by a hamburger button in a top app bar. Navigation labels SHALL use translated strings.

#### Scenario: Sidebar displays logo
- **WHEN** the dashboard loads on desktop or tablet
- **THEN** a purple/pink gradient logo icon with "J" and the brand name "Joby" SHALL be visible at the top of the sidebar

#### Scenario: Sidebar displays navigation on desktop
- **WHEN** the dashboard loads on desktop
- **THEN** the sidebar SHALL display translated navigation items: Dashboard, Applications, Documents, Calendar, Settings with labels

#### Scenario: Sidebar displays icon-only navigation on tablet
- **WHEN** the dashboard loads on tablet
- **THEN** the sidebar SHALL display navigation icons only, without text labels

#### Scenario: Sidebar displays user profile on desktop
- **WHEN** the dashboard loads on desktop
- **THEN** the sidebar SHALL display the current user's name, role, and avatar initial at the bottom

#### Scenario: Sidebar hidden on mobile
- **WHEN** the dashboard loads on mobile
- **THEN** no sidebar SHALL be visible until the user taps the hamburger menu icon

#### Scenario: Navigation links are non-functional except Dashboard
- **WHEN** a user clicks a non-Dashboard navigation item
- **THEN** no navigation SHALL occur (placeholder for future pages)

### Requirement: Dashboard has a main content area
The system SHALL render the main content area. On desktop (> 1024px), this SHALL be split into a left column (stats + table) and a right column (280px for interviews + quick actions). On mobile and tablet, the right column SHALL be hidden and content SHALL stack vertically in a single column.

#### Scenario: Main content layout on desktop
- **WHEN** the dashboard loads on desktop
- **THEN** the main area SHALL display a welcome header, stats row, applications table in the left column, and upcoming interviews + quick actions in the right column

#### Scenario: Main content layout on mobile and tablet
- **WHEN** the dashboard loads on mobile or tablet
- **THEN** the main area SHALL display a stats row and applications table in a single full-width column with no right sidebar
