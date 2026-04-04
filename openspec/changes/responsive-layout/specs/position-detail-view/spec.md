## MODIFIED Requirements

### Requirement: Detail view displays application details card
The system SHALL display a translated "Application Details" card. On desktop (> 1024px), fields SHALL be organized in two side-by-side columns. On mobile and tablet, fields SHALL stack vertically in a single column. All field labels SHALL use translated strings.

#### Scenario: Two-column layout on desktop
- **WHEN** the detail view renders on desktop
- **THEN** the application details card SHALL display fields in two columns side by side (left: URL, Status, CV File; right: Created, Last Updated)

#### Scenario: Single-column layout on mobile and tablet
- **WHEN** the detail view renders on mobile or tablet
- **THEN** the application details card SHALL display all fields stacked vertically in a single column

#### Scenario: Field labels are translated
- **WHEN** the detail view renders
- **THEN** field labels SHALL display translated text for "Application URL", "Status", "CV File", "Created", "Last Updated"

#### Scenario: Application URL field
- **WHEN** the position has a URL
- **THEN** the card SHALL display the URL as a clickable link with an external-link icon, using purple text (#7C3AED)

#### Scenario: CV File field with file attached
- **WHEN** the position has a CV file attached
- **THEN** the card SHALL display the CV filename in a styled file row with a file-text icon and download icon

#### Scenario: CV File field without file
- **WHEN** the position has no CV file attached
- **THEN** the card SHALL display a translated "No CV attached" message

### Requirement: Detail view has sidebar navigation
The system SHALL display the shared sidebar with "Applications" highlighted as the active navigation item. On mobile, the sidebar SHALL be accessible via the top app bar drawer. On tablet, the sidebar SHALL be icon-only collapsed. On desktop, the full sidebar SHALL be visible.

#### Scenario: Sidebar shows active state on desktop
- **WHEN** the detail view renders on desktop
- **THEN** the sidebar SHALL highlight "Applications" with the active gradient style and full labels

#### Scenario: Mobile top app bar on detail view
- **WHEN** the detail view renders on mobile
- **THEN** a top app bar with hamburger icon SHALL be visible instead of the left sidebar
