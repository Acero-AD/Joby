## Context

The Joby frontend uses React 19 + Inertia.js + Tailwind CSS, bundled with Bun. All ~50 user-facing strings across 12 components are hardcoded in JSX. The app currently supports only English. The user wants English and Spanish from day one.

## Goals / Non-Goals

**Goals:**
- Add i18next with React integration for translation support
- Extract all hardcoded strings into translation keys
- Support English (default) and Spanish
- Persist language preference across sessions
- Add a language switcher in the sidebar

**Non-Goals:**
- Backend/server-side translations (flash messages, error messages from Rails)
- Dynamic content translation (user-generated data like job titles, company names)
- Right-to-left (RTL) language support
- Pluralization rules beyond simple count-based (English/Spanish are straightforward)
- Date format localization (dates come pre-formatted from the backend)

## Decisions

### 1. Use `react-i18next` with `i18next`
**Choice:** `i18next` + `react-i18next` for the translation framework.
**Rationale:** De facto standard for React i18n. Lightweight (~15KB gzipped), excellent TypeScript support, and well-maintained. The `useTranslation()` hook integrates cleanly with functional components. Alternatives like `react-intl` are heavier and more complex for this use case.

### 2. JSON translation files organized by namespace
**Choice:** Single namespace with flat JSON files at `app/javascript/locales/{en,es}.json`.
**Rationale:** With ~50 strings, a single namespace keeps things simple. Keys use dot notation grouped by component area (e.g., `sidebar.menu`, `table.headers.jobTitle`). No need for multiple namespaces or lazy loading at this scale.

### 3. Browser language detection with localStorage fallback
**Choice:** Use `i18next-browser-languagedetector` for initial language detection, persist choice in localStorage.
**Rationale:** Respects the user's browser language on first visit, then remembers their explicit choice. No backend persistence needed — this is a single-user app.

### 4. Language switcher in the sidebar
**Choice:** Add a compact language toggle (EN/ES) in the sidebar, above the user profile section.
**Rationale:** The sidebar is always visible on every page. A simple toggle is sufficient for two languages. If more languages are added later, this can be replaced with a dropdown.

### 5. Translation key naming convention
**Choice:** Keys follow the pattern `{area}.{context}.{element}` — e.g., `sidebar.nav.dashboard`, `detail.labels.applicationUrl`, `modal.fields.jobTitle`.
**Rationale:** Grouping by UI area makes keys discoverable and avoids conflicts. Matches how the components are organized.

### 6. i18n initialization in a dedicated config file
**Choice:** Create `app/javascript/i18n.ts` imported at the top of `application.tsx`.
**Rationale:** Keeps i18n setup isolated from the app entry point. The import triggers initialization before React renders.

## Risks / Trade-offs

- **Risk:** Missing translations show raw keys → Mitigation: English is the fallback language; missing Spanish keys fall back to English. Lint the JSON files to catch missing keys.
- **Risk:** Bundle size increase → Mitigation: i18next core + react-i18next + detector is ~15KB gzipped. Acceptable for the functionality.
- **Trade-off:** No backend translations means Rails flash messages and validation errors remain in English. This is acceptable for V1; backend i18n can be added later independently.
