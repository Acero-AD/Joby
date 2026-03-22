## MODIFIED Requirements

### Requirement: Detail view displays position header
The system SHALL display a header with a translated "Back to Applications" link, the position title, a status badge, and translated Edit/Delete action buttons.

#### Scenario: Header renders with position data
- **WHEN** a user navigates to `/positions/:id`
- **THEN** the page SHALL display the position title as a heading, a color-coded status badge, a translated "Edit" button with pencil icon, and a translated "Delete" button with trash icon

#### Scenario: Back link navigates to dashboard
- **WHEN** a user clicks the translated "Back to Applications" link
- **THEN** the system SHALL navigate back to the dashboard

### Requirement: Detail view displays application details card
The system SHALL display a translated "Application Details" card with field labels organized in two columns. All field labels SHALL use translated strings.

#### Scenario: Field labels are translated
- **WHEN** the detail view renders
- **THEN** field labels SHALL display translated text for "Application URL", "Status", "CV File", "Created", "Last Updated"

#### Scenario: CV File field without file
- **WHEN** the position has no CV file attached
- **THEN** the card SHALL display a translated "No CV attached" message

### Requirement: Delete from detail view
The system SHALL allow deleting the position from the detail view with a translated confirmation prompt and redirect to dashboard.

#### Scenario: Delete with confirmation
- **WHEN** a user clicks the "Delete" button on the detail view
- **THEN** the system SHALL show a translated confirmation dialog, and upon confirmation, delete the position and redirect to the dashboard
