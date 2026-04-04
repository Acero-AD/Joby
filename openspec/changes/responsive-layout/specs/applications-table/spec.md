## MODIFIED Requirements

### Requirement: Applications table displays positions
The system SHALL render job applications in a format appropriate for the current viewport. On desktop (> 1024px), a multi-column table SHALL be displayed with columns: Job Title (with date), Company/Link, CV Used, Status, and Actions. On tablet (640–1024px), a compact table SHALL be displayed with columns: Job Title, Company, Status, and Actions (CV column hidden). On mobile (< 640px), a vertical card list SHALL be displayed. Each entry SHALL be tappable/clickable to navigate to the position detail view. All labels SHALL use translated strings.

#### Scenario: Table displays position data on desktop
- **WHEN** a user has positions and viewport is above 1024px
- **THEN** the table SHALL display each position as a row with title, date, company name, view link, CV filename, status badge, and edit/delete icons

#### Scenario: Compact table on tablet
- **WHEN** a user has positions and viewport is 640–1024px
- **THEN** the table SHALL display each position as a row with title, company, status badge, and edit/delete icons (no CV column)

#### Scenario: Card list on mobile
- **WHEN** a user has positions and viewport is below 640px
- **THEN** each position SHALL render as a card with title, company, status badge, date, and edit/delete action buttons

#### Scenario: Empty state
- **WHEN** a user has no positions
- **THEN** the system SHALL display a translated message indicating no applications exist, regardless of viewport

#### Scenario: Row/card tap navigates to detail view
- **WHEN** a user clicks or taps on a position row or card (outside of action buttons and external links)
- **THEN** the system SHALL navigate to `/positions/:id` using Inertia
