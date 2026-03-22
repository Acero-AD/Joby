## Why

All user-facing strings are hardcoded in React components, making it impossible to support multiple languages. Adding internationalization now (with ~12 components and ~50 strings) is far cheaper than retrofitting later as the app grows. The initial languages are English (default) and Spanish.

## What Changes

- Add `react-i18next` and `i18next` as frontend dependencies for translation support
- Create translation JSON files for English (`en`) and Spanish (`es`)
- Extract all hardcoded user-facing strings from components into translation keys
- Add a language switcher to the Sidebar so users can toggle between English and Spanish
- Configure i18n initialization with browser language detection and localStorage persistence

## Capabilities

### New Capabilities
- `i18n-setup`: i18next initialization, configuration, language detection, and persistence. Translation file structure and loading.
- `language-switcher`: UI control in the sidebar for switching between English and Spanish.

### Modified Capabilities
- `dashboard-layout`: Dashboard page components use translation keys instead of hardcoded strings.
- `dashboard-components`: Stats, header, right sidebar, and table components use translation keys.
- `add-application-modal`: Modal labels, placeholders, and buttons use translation keys.
- `applications-table`: Table headers, empty state, and row labels use translation keys.
- `position-detail-view`: Detail view labels and buttons use translation keys.

## Impact

- **Dependencies**: New packages `i18next`, `react-i18next`, `i18next-browser-languagedetector`
- **Frontend**: All 12 components updated to use `useTranslation()` hook instead of hardcoded strings
- **New files**: Translation JSONs (`en.json`, `es.json`), i18n config file, LanguageSwitcher component
- **Bundle size**: Minimal increase (~15KB gzipped for i18next)
- **No backend changes**: All translations are frontend-only
