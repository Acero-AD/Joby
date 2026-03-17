## ADDED Requirements

### Requirement: Applications table displays positions
The system SHALL render a table of job applications with columns: Job Title (with date), Company/Link, CV Used, Status, and Actions.

#### Scenario: Table displays position data
- **WHEN** a user has positions in the database
- **THEN** the table SHALL display each position as a row with title, application date, company name, a "View" link to the job URL, CV filename, status badge, and edit/delete action icons

#### Scenario: Empty state
- **WHEN** a user has no positions
- **THEN** the table SHALL display a message indicating no applications exist

### Requirement: Status badges use color coding
The system SHALL display position status as colored pill badges matching the design system.

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

### Requirement: Table has pagination
The system SHALL paginate the applications table, showing 5 rows per page with page navigation controls.

#### Scenario: Pagination displays count
- **WHEN** a user has 24 positions and is on page 1
- **THEN** the footer SHALL display "Showing 5 of 24 applications" with page numbers and prev/next buttons

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
