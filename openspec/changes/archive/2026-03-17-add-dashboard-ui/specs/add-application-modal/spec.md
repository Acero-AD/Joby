## ADDED Requirements

### Requirement: Add Application modal form
The system SHALL display a modal dialog for creating a new position with fields: Job Title, Company, Status (dropdown), URL, CV file upload, and Notes.

#### Scenario: Modal opens from Add Application button
- **WHEN** a user clicks the "Add Application" button in the dashboard header
- **THEN** a modal SHALL appear with the form fields and a header "Add New Application"

#### Scenario: Modal can be closed
- **WHEN** a user clicks the close button (X) on the modal
- **THEN** the modal SHALL close without saving

### Requirement: Modal form creates a position
The system SHALL submit the form data to create a new Position record associated with the current user.

#### Scenario: Successful form submission
- **WHEN** a user fills in Job Title "Frontend Dev", Company "Google", URL "https://google.com/jobs/123", selects status "applied", and clicks "Save Application"
- **THEN** the system SHALL create a new Position with the provided data and close the modal
- **THEN** the dashboard table SHALL refresh to show the new position

#### Scenario: Form validation - required fields
- **WHEN** a user submits the form without a URL
- **THEN** the system SHALL display a validation error for the URL field

### Requirement: CV file upload in modal
The system SHALL allow attaching a CV file (PDF) via the file upload field in the modal.

#### Scenario: Attach CV file
- **WHEN** a user selects a PDF file in the CV upload field and submits the form
- **THEN** the position SHALL be created with the CV attached via Active Storage

#### Scenario: No CV is optional
- **WHEN** a user submits the form without selecting a CV file
- **THEN** the position SHALL be created successfully without a CV attachment

### Requirement: Status dropdown has predefined options
The system SHALL display a dropdown with all position statuses: Bookmarked, Applied, Interviewing, Offered, Rejected, Withdrawn, Accepted.

#### Scenario: Default status selection
- **WHEN** the modal opens
- **THEN** the status dropdown SHALL default to "Bookmarked"
