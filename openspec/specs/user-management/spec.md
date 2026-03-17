## ADDED Requirements

### Requirement: User has basic profile data
The system SHALL store users with a name, email address, and password digest.

#### Scenario: Valid user creation
- **WHEN** a user is created with name "Jane Doe", email "jane@example.com", and a password
- **THEN** the user record is persisted with all fields populated

#### Scenario: Email must be unique
- **WHEN** a user tries to register with an email that already exists
- **THEN** the system SHALL reject the record with a validation error

#### Scenario: Email must be present
- **WHEN** a user is created without an email
- **THEN** the system SHALL reject the record with a validation error

#### Scenario: Name must be present
- **WHEN** a user is created without a name
- **THEN** the system SHALL reject the record with a validation error

### Requirement: User has secure password
The system SHALL use `has_secure_password` to store passwords securely via bcrypt.

#### Scenario: Password is hashed
- **WHEN** a user sets their password to "secret123"
- **THEN** the stored `password_digest` SHALL NOT equal the plaintext password

#### Scenario: Password authentication
- **WHEN** a user authenticates with the correct password
- **THEN** the system SHALL return the user record

### Requirement: User owns multiple positions
The system SHALL associate a user with zero or more positions.

#### Scenario: User with no positions
- **WHEN** a new user is created
- **THEN** the user SHALL have an empty positions collection

#### Scenario: Destroying a user destroys positions
- **WHEN** a user with positions is destroyed
- **THEN** all associated positions SHALL also be destroyed
