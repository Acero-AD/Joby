### Requirement: Delete confirmation modal displays position context
The system SHALL display a custom modal when a user initiates a position deletion, showing the position title, company name, and application date to provide clear context about what will be deleted.

#### Scenario: Modal shows position details
- **WHEN** a user clicks a delete action for a position titled "Senior Frontend Developer" at "Google" applied "Mar 5, 2026"
- **THEN** the modal SHALL display a red warning icon, the heading "Delete Application", the position title "Senior Frontend Developer", and the text "Google · Applied Mar 5, 2026" in a red-tinted summary card

#### Scenario: Modal shows permanent deletion warning
- **WHEN** the delete confirmation modal is open
- **THEN** the modal SHALL display the text "This action cannot be undone. All data associated with this application will be permanently removed."

### Requirement: Delete confirmation modal has Cancel and Delete actions
The system SHALL provide Cancel and Delete buttons in the modal footer, plus a close (X) button in the header.

#### Scenario: Cancel closes the modal
- **WHEN** a user clicks the "Cancel" button
- **THEN** the modal SHALL close without deleting the position

#### Scenario: Close button closes the modal
- **WHEN** a user clicks the X button in the modal header
- **THEN** the modal SHALL close without deleting the position

#### Scenario: Clicking overlay closes the modal
- **WHEN** a user clicks the dark overlay behind the modal
- **THEN** the modal SHALL close without deleting the position

#### Scenario: Delete button confirms deletion
- **WHEN** a user clicks the "Delete Application" button
- **THEN** the system SHALL delete the position and close the modal

### Requirement: Delete confirmation modal uses translated strings
The system SHALL use i18n translation keys for all text in the delete confirmation modal.

#### Scenario: Modal renders in active language
- **WHEN** the delete confirmation modal opens with Spanish as the active language
- **THEN** all modal text SHALL display in Spanish
