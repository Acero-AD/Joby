## ADDED Requirements

### Requirement: Detail view displays position header
The system SHALL display a header with a translated "Back to Applications" link, the position title, a status badge, and translated Edit/Delete action buttons.

#### Scenario: Header renders with position data
- **WHEN** a user navigates to `/positions/:id`
- **THEN** the page SHALL display the position title as a heading, a color-coded status badge, a translated "Edit" button with pencil icon, and a translated "Delete" button with trash icon

#### Scenario: Edit button opens edit modal
- **WHEN** the user clicks the "Edit" button in the detail view header
- **THEN** the system SHALL open the `EditApplicationModal` pre-filled with the position's data

#### Scenario: Back link navigates to dashboard
- **WHEN** a user clicks the translated "Back to Applications" link
- **THEN** the system SHALL navigate back to the dashboard

### Requirement: Detail view displays application details card
The system SHALL display a translated "Application Details" card with field labels organized in two columns. All field labels SHALL use translated strings.

#### Scenario: Field labels are translated
- **WHEN** the detail view renders
- **THEN** field labels SHALL display translated text for "Application URL", "Status", "CV File", "Created", "Last Updated"

#### Scenario: Application URL field
- **WHEN** the position has a URL
- **THEN** the card SHALL display the URL as a clickable link with an external-link icon, using purple text (#7C3AED)

#### Scenario: Status field
- **WHEN** the position has a status
- **THEN** the card SHALL display the status as a colored pill badge matching the status color scheme

#### Scenario: CV File field with file attached
- **WHEN** the position has a CV file attached
- **THEN** the card SHALL display the CV filename and file size in a styled file row with a file-text icon and download icon

#### Scenario: CV File field without file
- **WHEN** the position has no CV file attached
- **THEN** the card SHALL display a translated "No CV attached" message

#### Scenario: Created date field
- **WHEN** the position has a created_at timestamp
- **THEN** the card SHALL display the date formatted as "Month Day, Year" with a calendar icon

#### Scenario: Last Updated field
- **WHEN** the position has an updated_at timestamp
- **THEN** the card SHALL display the date formatted as "Month Day, Year" with a clock icon

### Requirement: Detail view has sidebar navigation
The system SHALL display the shared sidebar with "Applications" highlighted as the active navigation item.

#### Scenario: Sidebar shows active state
- **WHEN** the detail view renders
- **THEN** the sidebar SHALL highlight "Applications" with the active gradient style

### Requirement: Delete from detail view
The system SHALL allow deleting the position from the detail view by opening the delete confirmation modal, and upon confirmation, redirect to the dashboard.

#### Scenario: Delete with confirmation
- **WHEN** a user clicks the "Delete" button on the detail view
- **THEN** the system SHALL open the delete confirmation modal showing the position's details, and upon confirmation, delete the position and redirect to the dashboard
