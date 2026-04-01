## MODIFIED Requirements

### Requirement: Edit button opens edit modal
The edit button in the actions column SHALL open the `EditApplicationModal` with the corresponding position data when clicked.

#### Scenario: User clicks edit in table row
- **WHEN** the user clicks the edit icon button in a table row's actions column
- **THEN** the `EditApplicationModal` opens pre-filled with that position's data

#### Scenario: Edit click does not navigate
- **WHEN** the user clicks the edit button
- **THEN** the row click navigation is prevented (existing `handleRowClick` guard on buttons)
