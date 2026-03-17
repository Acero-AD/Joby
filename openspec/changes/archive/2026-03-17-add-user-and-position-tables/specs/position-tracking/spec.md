## ADDED Requirements

### Requirement: Position belongs to a user
The system SHALL associate each position with exactly one user.

#### Scenario: Position created for a user
- **WHEN** a position is created for a user
- **THEN** the position's `user_id` SHALL reference that user

#### Scenario: Position requires a user
- **WHEN** a position is created without a user
- **THEN** the system SHALL reject the record with a validation error

### Requirement: Position stores job URL
The system SHALL store a URL for the job posting.

#### Scenario: Valid URL stored
- **WHEN** a position is created with url "https://company.com/jobs/123"
- **THEN** the position record SHALL persist the url

#### Scenario: URL must be present
- **WHEN** a position is created without a url
- **THEN** the system SHALL reject the record with a validation error

### Requirement: Position tracks application status
The system SHALL track the status of each position with predefined values: bookmarked, applied, interviewing, offered, rejected, withdrawn, accepted.

#### Scenario: Default status
- **WHEN** a position is created without specifying a status
- **THEN** the status SHALL default to "bookmarked"

#### Scenario: Valid status transition
- **WHEN** a position's status is updated to "applied"
- **THEN** the system SHALL persist the new status

#### Scenario: Invalid status rejected
- **WHEN** a position's status is set to an invalid value like "unknown"
- **THEN** the system SHALL raise an error

### Requirement: Position supports CV file attachment
The system SHALL allow attaching a single CV file to a position via Active Storage.

#### Scenario: Attach CV to position
- **WHEN** a PDF file is attached as CV to a position
- **THEN** the position SHALL have an attached CV accessible via `position.cv`

#### Scenario: Position without CV is valid
- **WHEN** a position is created without a CV attachment
- **THEN** the position SHALL be valid
