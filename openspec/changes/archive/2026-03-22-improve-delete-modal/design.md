## Context

The app currently uses `confirm()` from `positionActions.ts` for delete confirmation. Delete is triggered from two places: the ApplicationsTable row action button and the Positions/Show detail view button. Both call `deletePosition(id)` which uses `confirm()`. The app has i18n support via react-i18next.

The Pencil design defines a "Delete Application Modal" with:
- Header: warning icon (triangle-alert) in red circle + "Delete Application" title + close (X) button
- Body: confirmation question, a red-tinted card showing position title + company/date, and a permanent deletion warning
- Footer: Cancel button (outlined) + "Delete Application" button (red, with trash icon)
- 440px wide, rounded-20, white bg, subtle shadow

## Goals / Non-Goals

**Goals:**
- Replace browser `confirm()` with a custom React modal matching the Pencil design
- Show contextual info (position title, company, date) in the modal
- Support i18n for all modal text
- Reuse from both delete locations (table and detail view)

**Non-Goals:**
- Generic confirmation modal for other actions (this is delete-specific)
- Undo/soft-delete functionality
- Animation/transitions for the modal

## Decisions

### 1. Stateful modal managed by parent components
**Choice:** Each page that triggers delete manages the modal's open/close state and passes the position data to the modal.
**Rationale:** Simpler than a global modal system. Only two places trigger delete. The modal receives `position`, `onConfirm`, and `onClose` as props.

### 2. Move delete logic out of positionActions into the modal's onConfirm
**Choice:** `positionActions.ts` no longer handles confirm — it only does the `router.delete()` call. The modal's confirm button calls the delete action directly.
**Rationale:** `positionActions.deletePosition` currently couples the confirm dialog with the API call. Decoupling them lets the modal own the confirmation UX while the action owns the API call.

### 3. Position data passed as props
**Choice:** The modal receives the full `Position` object to display title, company, and date.
**Rationale:** All needed data is already available in both the table (positions array) and detail view (position prop). No extra API calls needed.

## Risks / Trade-offs

- **Risk:** Two places need state management for the modal → Mitigation: Simple `useState` in each parent; the modal component itself is shared.
