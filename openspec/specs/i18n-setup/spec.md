## ADDED Requirements

### Requirement: i18n initialization
The system SHALL initialize i18next with react-i18next before the React app renders, configured with English as the default language and Spanish as an additional language.

#### Scenario: Default language is English
- **WHEN** a user visits the app for the first time
- **THEN** the system SHALL render all UI text in English

#### Scenario: Fallback to English for missing translations
- **WHEN** the active language is Spanish and a translation key has no Spanish value
- **THEN** the system SHALL display the English translation as fallback

### Requirement: Language detection
The system SHALL detect the user's preferred language from the browser settings on first visit using `i18next-browser-languagedetector`.

#### Scenario: Browser language matches supported language
- **WHEN** a user with browser language set to `es` visits the app for the first time
- **THEN** the system SHALL render the UI in Spanish

#### Scenario: Browser language not supported
- **WHEN** a user with browser language set to `fr` visits the app for the first time
- **THEN** the system SHALL fall back to English

### Requirement: Language persistence
The system SHALL persist the user's language choice in localStorage so it is remembered across sessions.

#### Scenario: Language persists after page reload
- **WHEN** a user selects Spanish and reloads the page
- **THEN** the system SHALL render the UI in Spanish

### Requirement: Translation files structure
The system SHALL store translations in JSON files at `app/javascript/locales/en.json` and `app/javascript/locales/es.json` with keys grouped by UI area.

#### Scenario: Translation files contain all UI strings
- **WHEN** the app renders any component
- **THEN** all user-facing strings SHALL be sourced from translation keys, not hardcoded in JSX
