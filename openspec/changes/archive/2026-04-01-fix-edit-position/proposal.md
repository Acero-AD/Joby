## Why

The edit position buttons exist in both the dashboard table and the position detail view, but they have no click handlers or associated logic. Users cannot edit positions after creating them, which is a core CRUD gap.

## What Changes

- Wire edit buttons in `ApplicationsTable` and `Show` page to open an edit modal
- Create an edit modal component (based on `AddApplicationModal` pattern) that pre-fills with existing position data
- Add an `updatePosition` action to submit PATCH requests via Inertia
- Add edit-specific i18n keys

## Capabilities

### New Capabilities
- `edit-position-modal`: Modal component and logic for editing existing positions from both dashboard and detail views

### Modified Capabilities
- `applications-table`: Edit button gets an onClick handler to open the edit modal
- `position-detail-view`: Edit button gets an onClick handler to open the edit modal

## Impact

- **Frontend**: New modal component, updated `ApplicationsTable` and `Show` page, new action in `positionActions.ts`, new i18n keys
- **Backend**: No changes needed — `PositionsController#update` and routes already exist
