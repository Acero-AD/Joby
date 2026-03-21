## Context

The dashboard currently lists job applications in a table. Users need to click into a position to see full details. The "Job Application Detail V1" design in Pencil defines the layout: a sidebar + main content area with header (back link, title, status badge, edit/delete actions) and an "Application Details" card with fields split into two columns.

The app uses Rails + Inertia.js + React. Navigation between pages is handled via Inertia's `router.visit()` / `Link` component.

## Goals / Non-Goals

**Goals:**
- Implement a detail view page matching the Pencil design
- Enable row-click navigation from dashboard table to detail view
- Reuse the existing Sidebar component
- Display all position fields: title, status, URL, CV file, created/updated dates

**Non-Goals:**
- Inline editing from the detail view (edit button will redirect to edit form later)
- CV file download functionality (display only for V1)
- Position detail V2 (expanded layout with interviews/timeline)

## Decisions

### 1. New Inertia page at `Positions/Show`
**Choice:** Create `app/javascript/pages/Positions/Show.tsx` as a standalone Inertia page.
**Rationale:** Follows the Inertia convention of mapping controller actions to page components. Keeps the Dashboard page simple.

### 2. Reuse Sidebar component
**Choice:** Import and render the existing `Sidebar` component with "Applications" nav item highlighted.
**Rationale:** Maintains consistent navigation across pages. The sidebar is already extracted as a component.

### 3. Row click navigates via Inertia
**Choice:** Wrap each table row in an Inertia visit to `/positions/:id`.
**Rationale:** SPA-like navigation without full page reloads. Consistent with how the app handles navigation.

### 4. PositionsController#show serves the data
**Choice:** Add a `show` action to the existing `PositionsController`.
**Rationale:** RESTful, follows Rails conventions. The controller already handles create/update/destroy.

### 5. Extend Position type with `updatedAt`
**Choice:** Add `updatedAt` to the Position TypeScript interface and serialize it from the backend.
**Rationale:** The detail view needs the "Last Updated" field. The dashboard doesn't show it but it won't hurt to include it.

## Risks / Trade-offs

- **Risk:** Sidebar component may need props for active nav state → Mitigation: Add an `activePage` prop to Sidebar.
- **Risk:** Delete from detail view needs redirect back to dashboard → Mitigation: Use `router.delete` with `onSuccess` callback to redirect.
