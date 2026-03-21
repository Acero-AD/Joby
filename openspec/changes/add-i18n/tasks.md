## 1. Setup & Configuration

- [x] 1.1 Install `i18next`, `react-i18next`, and `i18next-browser-languagedetector` via bun
- [x] 1.2 Create `app/javascript/i18n.ts` with i18next initialization (English default, Spanish, browser detection, localStorage persistence)
- [x] 1.3 Import `i18n.ts` at the top of `app/javascript/application.tsx`

## 2. Translation Files

- [x] 2.1 Create `app/javascript/locales/en.json` with all English strings organized by UI area (sidebar, header, stats, table, modal, detail, common)
- [x] 2.2 Create `app/javascript/locales/es.json` with all Spanish translations matching the same key structure

## 3. Language Switcher

- [x] 3.1 Create `app/javascript/components/LanguageSwitcher.tsx` with EN/ES toggle
- [x] 3.2 Add the LanguageSwitcher to `Sidebar.tsx` above the user profile section

## 4. Migrate Components — Sidebar & Navigation

- [x] 4.1 Update `Sidebar.tsx` to use `useTranslation()` for navigation labels, "MENU" label, and "Job Seeker" text
- [x] 4.2 Update `NavItem.tsx` if labels are passed as translation keys

## 5. Migrate Components — Header & Stats

- [x] 5.1 Update `Header.tsx` to use translated welcome message, subtitle, search placeholder, and "Add Application" button
- [x] 5.2 Update `StatsRow.tsx` to use translated stat card labels and descriptions
- [x] 5.3 Update `StatCard.tsx` if it renders any hardcoded text

## 6. Migrate Components — Table & Pagination

- [ ] 6.1 Update `ApplicationsTable.tsx` to use translated column headers, "Recent Applications" title, "Filter" button, empty state, "Applied" prefix, "View" link, and "No CV" text
- [ ] 6.2 Update `StatusBadge.tsx` to use translated status labels
- [ ] 6.3 Update `Pagination.tsx` to use translated "Showing X of Y applications" text

## 7. Migrate Components — Modal

- [ ] 7.1 Update `AddApplicationModal.tsx` to use translated header, field labels, placeholders, status options, file upload text, and button labels

## 8. Migrate Components — Detail View

- [ ] 8.1 Update `Positions/Show.tsx` to use translated "Back to Applications", "Edit", "Delete", field labels, "No URL", "No CV attached", "Application Details", and confirmation dialog text

## 9. Migrate Components — Right Sidebar

- [ ] 9.1 Update `RightSidebar.tsx` to use translated "Upcoming Interviews", "View all", "Quick Actions", and quick action button labels

## 10. Testing

- [ ] 10.1 Run the test suite and verify everything passes
