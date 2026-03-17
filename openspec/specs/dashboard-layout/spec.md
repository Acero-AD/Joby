## ADDED Requirements

### Requirement: Dashboard page is the root route
The system SHALL render the dashboard as the root route (`/`) using Inertia.js with React.

#### Scenario: Visiting root URL
- **WHEN** a user visits `/`
- **THEN** the system SHALL render the Dashboard React component via Inertia

### Requirement: Dashboard has a sidebar
The system SHALL render a 260px-wide sidebar on the left with a logo, navigation links, and a user profile section at the bottom.

#### Scenario: Sidebar displays logo
- **WHEN** the dashboard loads
- **THEN** a purple/pink gradient logo icon with "J" and the brand name "Joby" SHALL be visible at the top of the sidebar

#### Scenario: Sidebar displays navigation
- **WHEN** the dashboard loads
- **THEN** the sidebar SHALL display navigation items: Dashboard (active), Applications, Documents, Calendar, Settings

#### Scenario: Sidebar displays user profile
- **WHEN** the dashboard loads
- **THEN** the sidebar SHALL display the current user's name, role, and avatar initial at the bottom

#### Scenario: Navigation links are non-functional except Dashboard
- **WHEN** a user clicks a non-Dashboard navigation item
- **THEN** no navigation SHALL occur (placeholder for future pages)

### Requirement: Dashboard has a main content area
The system SHALL render the main content area to the right of the sidebar, split into a left column (stats + table) and a right column (280px wide for interviews + quick actions).

#### Scenario: Main content layout
- **WHEN** the dashboard loads
- **THEN** the main area SHALL display a welcome header, stats row, applications table in the left column, and upcoming interviews + quick actions in the right column

### Requirement: Dashboard header shows welcome message
The system SHALL display a personalized welcome header with the user's first name and a subtitle.

#### Scenario: Welcome header with user name
- **WHEN** a user named "Diego" views the dashboard
- **THEN** the header SHALL display "Welcome back, Diego!" with subtitle "Track and manage your job applications"

### Requirement: Dashboard header has a search box and add button
The system SHALL display a search box and an "Add Application" button in the header actions area.

#### Scenario: Add Application button
- **WHEN** a user clicks the "Add Application" button
- **THEN** the Add Application modal SHALL open
