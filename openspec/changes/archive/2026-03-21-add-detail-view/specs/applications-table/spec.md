## MODIFIED Requirements

### Requirement: Applications table displays positions
The system SHALL render a table of job applications with columns: Job Title (with date), Company/Link, CV Used, Status, and Actions. Each row SHALL be clickable to navigate to the position detail view.

#### Scenario: Table displays position data
- **WHEN** a user has positions in the database
- **THEN** the table SHALL display each position as a row with title, application date, company name, a "View" link to the job URL, CV filename, status badge, and edit/delete action icons

#### Scenario: Empty state
- **WHEN** a user has no positions
- **THEN** the table SHALL display a message indicating no applications exist

#### Scenario: Row click navigates to detail view
- **WHEN** a user clicks on a position row (outside of action buttons and external links)
- **THEN** the system SHALL navigate to `/positions/:id` using Inertia
