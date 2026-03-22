## MODIFIED Requirements

### Requirement: Dashboard header shows welcome message
The system SHALL display a personalized welcome header with the user's first name and a subtitle, using translated strings.

#### Scenario: Welcome header with user name
- **WHEN** a user named "Diego" views the dashboard
- **THEN** the header SHALL display a translated welcome message with the user's first name and a translated subtitle

### Requirement: Dashboard header has a search box and add button
The system SHALL display a search box and an "Add Application" button in the header actions area, using translated strings.

#### Scenario: Add Application button
- **WHEN** a user clicks the translated "Add Application" button
- **THEN** the Add Application modal SHALL open

### Requirement: Dashboard has a sidebar
The system SHALL render a 260px-wide sidebar on the left with a logo, navigation links, and a user profile section at the bottom. Navigation labels SHALL use translated strings.

#### Scenario: Sidebar displays navigation
- **WHEN** the dashboard loads
- **THEN** the sidebar SHALL display translated navigation items: Dashboard, Applications, Documents, Calendar, Settings
