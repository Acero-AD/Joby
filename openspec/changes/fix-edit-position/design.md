## Context

Edit buttons exist in both the dashboard table (`ApplicationsTable.tsx:137`) and the detail view (`Show.tsx:50`) but have no click handlers. The backend `PositionsController#update` action and PATCH route already work. The `AddApplicationModal` provides a proven pattern for form modals using Inertia's `useForm`.

## Goals / Non-Goals

**Goals:**
- Make edit buttons functional in both dashboard and detail views
- Reuse the existing `AddApplicationModal` as an `EditApplicationModal` with pre-filled data
- Submit edits via Inertia PATCH to `/positions/:id`

**Non-Goals:**
- Inline editing in the table
- Changing the backend update logic
- Adding new editable fields beyond what already exists (title, company, url, status, cv)

## Decisions

### Separate EditApplicationModal component
Create `EditApplicationModal.tsx` rather than making `AddApplicationModal` dual-purpose. The edit modal receives a `Position` prop to pre-fill fields and uses `useForm` with `put` instead of `post`. This keeps both components simple and avoids conditional branching.

**Alternative considered:** A single shared modal with a `mode` prop — rejected because it adds complexity for minimal code savings, and the footer/header text differs.

### State management via useState in parent components
Both `ApplicationsTable` and `Show` will manage `editingPosition` state (similar to existing `deletingPosition` pattern). The edit button's `onClick` sets this state, which conditionally renders the modal.

### updatePosition action
Add an `updatePosition` function to `positionActions.ts` that calls `router.put(`/positions/${id}`, data, { forceFormData: true })`. However, since the modal uses `useForm`, the form submission will happen inside the modal itself — the action is not strictly needed. The modal will use `useForm`'s `put` method directly, matching the `AddApplicationModal` pattern.

### i18n keys
Add `editModal.*` keys to `en.json` for the edit modal title/subtitle/save button. Reuse `modal.fields.*` and `modal.footer.cancel` from the existing create modal.

## Risks / Trade-offs

- **CV re-upload UX**: When editing, the existing CV filename should display but the user can replace it. If they don't upload a new file, the existing CV stays. The backend already handles this (only updates cv if a new file is sent). Risk: user might think they need to re-upload → Mitigation: show existing filename in the upload area.
