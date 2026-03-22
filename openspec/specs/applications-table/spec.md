## ADDED Requirements

### Requirement: Applications table displays positions
The system SHALL render a table of job applications with columns: Job Title (with date), Company/Link, CV Used, Status, and Actions. Each row SHALL be clickable to navigate to the position detail view. Column headers, empty state text, and row labels SHALL use translated strings.

#### Scenario: Table displays position data
- **WHEN** a user has positions in the database
- **THEN** the table SHALL display each position as a row with title, translated application date prefix, company name, a translated "View" link, CV filename, status badge, and edit/delete action icons

#### Scenario: Empty state
- **WHEN** a user has no positions
- **THEN** the table SHALL display a translated message indicating no applications exist

#### Scenario: Row click navigates to detail view
- **WHEN** a user clicks on a position row (outside of action buttons and external links)
- **THEN** the system SHALL navigate to `/positions/:id` using Inertia

### Requirement: Status badges use color coding
The system SHALL display position status as colored pill badges matching the design system. Status labels SHALL use translated strings.

#### Scenario: Interview status badge
- **WHEN** a position has status "interviewing"
- **THEN** the badge SHALL display "Interview" with yellow background (#FEF3C7) and amber text (#D97706)

#### Scenario: Offer status badge
- **WHEN** a position has status "offered"
- **THEN** the badge SHALL display "Offer" with green background (#D1FAE5) and green text (#059669)

#### Scenario: Rejected status badge
- **WHEN** a position has status "rejected"
- **THEN** the badge SHALL display "Rejected" with red background (#FEE2E2) and red text (#DC2626)

#### Scenario: Applied status badge
- **WHEN** a position has status "applied"
- **THEN** the badge SHALL display "Applied" with indigo background (#E0E7FF) and indigo text (#4F46E5)

#### Scenario: Bookmarked status badge
- **WHEN** a position has status "bookmarked"
- **THEN** the badge SHALL display "Bookmarked" with purple background (#F3F0FF) and purple text (#7C3AED)

#### Scenario: Status labels are translated
- **WHEN** the active language is Spanish
- **THEN** status badges SHALL display translated labels (e.g., "Aplicado", "Entrevista", "Oferta", "Rechazado")

### Requirement: Table has pagination
The system SHALL paginate the applications table, showing 5 rows per page with page navigation controls. Pagination text SHALL use translated strings.

#### Scenario: Pagination displays count
- **WHEN** a user has 24 positions and is on page 1
- **THEN** the footer SHALL display a translated "Showing X of Y applications" text with page numbers and prev/next buttons

#### Scenario: Navigate to next page
- **WHEN** a user clicks the next page button
- **THEN** the table SHALL load the next 5 positions

### Requirement: Table has a filter button
The system SHALL display a "Filter" button in the table header area.

#### Scenario: Filter button present
- **WHEN** the table renders
- **THEN** a filter button with a sliders icon SHALL be visible in the table header

### Requirement: Table rows have edit and delete actions
The system SHALL display edit (pencil) and delete (trash) icons for each table row.

#### Scenario: Delete a position
- **WHEN** a user clicks the delete icon on a position row
- **THEN** the system SHALL delete the position and refresh the table

#### Scenario: Edit a position
- **WHEN** a user clicks the edit icon on a position row
- **THEN** the system SHALL open the edit form for that position

### Requirement: View link opens job URL
The system SHALL display a "View" link badge next to each company name that opens the position's URL.

#### Scenario: Clicking view link
- **WHEN** a user clicks the "View" link on a position
- **THEN** the system SHALL open the position's URL in a new browser tab
