## ADDED Requirements

### Requirement: StatCard component displays a metric
The system SHALL render a StatCard component showing a label, numeric value, icon badge, and change indicator.

#### Scenario: StatCard with positive trend
- **WHEN** a StatCard is rendered with label "Total Applications", value "24", and change "+12% this month"
- **THEN** the card SHALL display the label, value, a green trending-up icon, and the change text

#### Scenario: StatCard with negative trend
- **WHEN** a StatCard is rendered with label "Rejections", value "8", and change "-5% vs last month"
- **THEN** the card SHALL display the label, value, a red trending-down icon, and the change text in red

#### Scenario: StatCard with neutral info
- **WHEN** a StatCard is rendered with label "Interviews", value "5", and change "3 scheduled this week"
- **THEN** the card SHALL display the label, value, and the change text in gray

### Requirement: Dashboard displays four stat cards
The system SHALL display four stat cards in a row: Total Applications, Interviews, Offers, Rejections. Each card SHALL compute its value from the user's positions data. Card labels and descriptions SHALL use translated strings.

#### Scenario: Stats reflect actual position data
- **WHEN** a user has 10 positions with statuses: 3 applied, 2 interviewing, 2 offered, 3 rejected
- **THEN** Total Applications SHALL show "10", Interviews SHALL show "2", Offers SHALL show "2", Rejections SHALL show "3" with translated labels

### Requirement: NavItem component renders navigation links
The system SHALL render NavItem components with an icon and label. The active item SHALL have a purple-to-pink gradient background with white text.

#### Scenario: Active nav item
- **WHEN** the Dashboard NavItem is active
- **THEN** it SHALL display with a gradient background (#A855F7 → #EC4899) and white icon/text

#### Scenario: Default nav item
- **WHEN** a NavItem is not active
- **THEN** it SHALL display with no background, gray icon (#6B7280), and dark text (#374151)

### Requirement: InterviewItem component displays upcoming interviews
The system SHALL render InterviewItem components inside a dark-themed card (#18181B) showing company name, interview time, type icon, and a status dot. Section headers SHALL use translated strings.

#### Scenario: Interview item with details
- **WHEN** an InterviewItem is rendered for "Google" with time "Mar 10, 10:00 AM" and type "video"
- **THEN** it SHALL display a yellow video icon badge, "Google" in white text, the time in gray, and a green status dot

#### Scenario: Interview section header
- **WHEN** the dashboard loads
- **THEN** the interviews section SHALL display a translated "Upcoming Interviews" heading and translated "View all" link

### Requirement: QuickActionButton component
The system SHALL render QuickActionButton components with an icon and label in a light purple-bordered card. Button labels SHALL use translated strings.

#### Scenario: Quick action buttons displayed
- **WHEN** the dashboard loads
- **THEN** three quick action buttons SHALL be visible with translated labels for "Upload New CV", "Saved Jobs", "Analytics"
