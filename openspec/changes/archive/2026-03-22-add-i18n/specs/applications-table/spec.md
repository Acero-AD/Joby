## MODIFIED Requirements

### Requirement: Applications table displays positions
The system SHALL render a table of job applications with columns: Job Title (with date), Company/Link, CV Used, Status, and Actions. Each row SHALL be clickable to navigate to the position detail view. Column headers, empty state text, and row labels SHALL use translated strings.

#### Scenario: Table displays position data
- **WHEN** a user has positions in the database
- **THEN** the table SHALL display each position as a row with title, translated application date prefix, company name, a translated "View" link, CV filename, status badge, and edit/delete action icons

#### Scenario: Empty state
- **WHEN** a user has no positions
- **THEN** the table SHALL display a translated message indicating no applications exist

### Requirement: Table has pagination
The system SHALL paginate the applications table, showing 5 rows per page with page navigation controls. Pagination text SHALL use translated strings.

#### Scenario: Pagination displays count
- **WHEN** a user has 24 positions and is on page 1
- **THEN** the footer SHALL display a translated "Showing X of Y applications" text with page numbers and prev/next buttons

### Requirement: Status badges use color coding
The system SHALL display position status as colored pill badges matching the design system. Status labels SHALL use translated strings.

#### Scenario: Status labels are translated
- **WHEN** the active language is Spanish
- **THEN** status badges SHALL display translated labels (e.g., "Aplicado", "Entrevista", "Oferta", "Rechazado")
