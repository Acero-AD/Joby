## ADDED Requirements

### Requirement: Status config defines all application statuses
The system SHALL have a single configuration file that defines all valid application statuses: bookmarked, applied, interviewing, offered, rejected, withdrawn, accepted.

#### Scenario: All statuses defined
- **WHEN** the status config is imported
- **THEN** it contains entries for all 7 statuses

### Requirement: Status config defines badge colors
Each status entry SHALL include badge styling (background color and text color) used by `StatusBadge`.

#### Scenario: Badge colors available
- **WHEN** `StatusBadge` renders a status
- **THEN** it uses badge colors from the centralized config, not local hardcoded values

### Requirement: Status config provides ordered status keys
The config SHALL export an ordered list of status keys for use in form dropdowns.

#### Scenario: Form dropdown uses config keys
- **WHEN** `AddApplicationModal` renders the status dropdown
- **THEN** it uses the status keys list from the config

### Requirement: Status config defines stat card styling
The config SHALL include optional stat card styling (icon name, icon color, icon background, trend icon, trend color) for statuses that appear as dashboard stat cards.

#### Scenario: StatsRow uses config for card styling
- **WHEN** `StatsRow` renders stat cards
- **THEN** it uses icon/color values from the config instead of hardcoded values

### Requirement: No hardcoded status colors remain in components
After migration, no component SHALL contain hardcoded status color values. All status-related styling SHALL come from the centralized config.

#### Scenario: No remaining hardcoded status colors
- **WHEN** components that display status information are inspected
- **THEN** all color values for statuses originate from `statusConfig.ts`
