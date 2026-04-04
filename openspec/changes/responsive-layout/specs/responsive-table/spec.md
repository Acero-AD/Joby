## ADDED Requirements

### Requirement: Applications table renders as card list on mobile
On mobile viewports (< 640px), the system SHALL replace the multi-column table with a vertical list of cards. Each card SHALL display: job title, company name, status badge, application date, and edit/delete action buttons.

#### Scenario: Card list on mobile
- **WHEN** viewport width is below 640px
- **THEN** the applications table SHALL render as a vertical stack of cards instead of a table with column headers

#### Scenario: Card shows key fields
- **WHEN** a card renders on mobile
- **THEN** it SHALL display the job title, company name, status badge, and application date

#### Scenario: Card tap navigates to detail
- **WHEN** a user taps on a card (outside action buttons)
- **THEN** the system SHALL navigate to the position detail view

#### Scenario: Card shows edit and delete actions
- **WHEN** a card renders on mobile
- **THEN** edit and delete icon buttons SHALL be visible and tappable within the card

### Requirement: Applications table is compact on tablet
On tablet viewports (640px–1024px), the system SHALL render the table with flexible column widths instead of fixed pixel widths, dropping the CV column to fit the available space.

#### Scenario: Compact table on tablet
- **WHEN** viewport width is between 640px and 1024px
- **THEN** the table SHALL render with flexible columns showing: Job Title, Company, Status, and Actions (CV column hidden)

#### Scenario: Desktop table unchanged
- **WHEN** viewport width is above 1024px
- **THEN** the table SHALL render exactly as in the current desktop design with all columns visible
