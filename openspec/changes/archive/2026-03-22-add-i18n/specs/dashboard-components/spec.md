## MODIFIED Requirements

### Requirement: Dashboard displays four stat cards
The system SHALL display four stat cards in a row: Total Applications, Interviews, Offers, Rejections. Each card SHALL compute its value from the user's positions data. Card labels and descriptions SHALL use translated strings.

#### Scenario: Stats reflect actual position data
- **WHEN** a user has 10 positions with statuses: 3 applied, 2 interviewing, 2 offered, 3 rejected
- **THEN** Total Applications SHALL show "10", Interviews SHALL show "2", Offers SHALL show "2", Rejections SHALL show "3" with translated labels

### Requirement: InterviewItem component displays upcoming interviews
The system SHALL render InterviewItem components inside a dark-themed card (#18181B) showing company name, interview time, type icon, and a status dot. Section headers SHALL use translated strings.

#### Scenario: Interview section header
- **WHEN** the dashboard loads
- **THEN** the interviews section SHALL display a translated "Upcoming Interviews" heading and translated "View all" link

### Requirement: QuickActionButton component
The system SHALL render QuickActionButton components with an icon and label in a light purple-bordered card. Button labels SHALL use translated strings.

#### Scenario: Quick action buttons displayed
- **WHEN** the dashboard loads
- **THEN** three quick action buttons SHALL be visible with translated labels for "Upload New CV", "Saved Jobs", "Analytics"
