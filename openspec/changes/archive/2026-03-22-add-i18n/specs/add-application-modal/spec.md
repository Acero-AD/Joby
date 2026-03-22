## MODIFIED Requirements

### Requirement: Add Application modal form
The system SHALL display a modal dialog for creating a new position with fields: Job Title, Company, Status (dropdown), URL, CV file upload, and Notes. All labels, placeholders, and button text SHALL use translated strings.

#### Scenario: Modal opens from Add Application button
- **WHEN** a user clicks the "Add Application" button in the dashboard header
- **THEN** a modal SHALL appear with translated form labels and a translated header

#### Scenario: Modal can be closed
- **WHEN** a user clicks the close button (X) on the modal
- **THEN** the modal SHALL close without saving

### Requirement: Status dropdown has predefined options
The system SHALL display a dropdown with all position statuses using translated labels: Bookmarked, Applied, Interviewing, Offered, Rejected, Withdrawn, Accepted.

#### Scenario: Default status selection
- **WHEN** the modal opens
- **THEN** the status dropdown SHALL default to the translated "Bookmarked" option
