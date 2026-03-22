## ADDED Requirements

### Requirement: Language switcher in sidebar
The system SHALL display a language toggle in the sidebar, above the user profile section, allowing users to switch between English and Spanish.

#### Scenario: Switcher displays current language
- **WHEN** the sidebar renders with English active
- **THEN** the switcher SHALL highlight "EN" as the active option with "ES" as the alternative

#### Scenario: Switching to Spanish
- **WHEN** a user clicks "ES" in the language switcher
- **THEN** all UI text SHALL immediately update to Spanish without a page reload

#### Scenario: Switching back to English
- **WHEN** a user clicks "EN" in the language switcher while Spanish is active
- **THEN** all UI text SHALL immediately update to English without a page reload
