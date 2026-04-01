## ADDED Requirements

### Requirement: Edit modal displays with pre-filled position data
The system SHALL display an edit modal pre-filled with the position's current title, company, url, status, and CV filename when the user triggers an edit action.

#### Scenario: Modal opens with existing data
- **WHEN** the user clicks the edit button for a position
- **THEN** the edit modal opens with all form fields populated with the position's current values

#### Scenario: Existing CV filename displayed
- **WHEN** the position has an attached CV
- **THEN** the CV upload area displays the existing filename instead of "Choose file"

### Requirement: Edit modal submits updates via PATCH
The system SHALL submit the edited position data as a PATCH request to `/positions/:id` using Inertia's `useForm` with `forceFormData: true`.

#### Scenario: Successful update
- **WHEN** the user modifies fields and clicks save
- **THEN** the system sends a PATCH request with the updated data and closes the modal on success

#### Scenario: Validation errors displayed
- **WHEN** the server returns validation errors
- **THEN** the modal displays error messages under the corresponding fields

#### Scenario: CV not re-uploaded
- **WHEN** the user edits other fields but does not upload a new CV
- **THEN** the existing CV attachment is preserved

### Requirement: Edit modal can be dismissed
The system SHALL allow the user to close the edit modal via the close button, cancel button, or clicking the backdrop overlay.

#### Scenario: Close via cancel button
- **WHEN** the user clicks the cancel button
- **THEN** the modal closes without submitting changes

#### Scenario: Close via backdrop click
- **WHEN** the user clicks the backdrop overlay
- **THEN** the modal closes without submitting changes
