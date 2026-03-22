## MODIFIED Requirements

### Requirement: Table rows have edit and delete actions
The system SHALL display edit (pencil) and delete (trash) icons for each table row.

#### Scenario: Delete a position
- **WHEN** a user clicks the delete icon on a position row
- **THEN** the system SHALL open the delete confirmation modal showing the position's details

#### Scenario: Edit a position
- **WHEN** a user clicks the edit icon on a position row
- **THEN** the system SHALL open the edit form for that position
