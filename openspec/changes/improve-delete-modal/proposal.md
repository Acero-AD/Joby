## Why

Delete confirmation currently uses the native browser `confirm()` dialog, which is visually inconsistent with the rest of the app and provides no context about what's being deleted. A custom modal matching the Pencil design ("Delete Application Modal") gives users a better experience with clear context (position title, company) and consistent styling.

## What Changes

- Create a `DeleteConfirmationModal` React component matching the Pencil design: warning icon header, position summary card, permanent deletion warning, Cancel/Delete buttons
- Replace `confirm()` calls in `positionActions.ts` with the new modal
- Update both delete triggers (ApplicationsTable row action and Positions/Show detail view button) to show the modal
- Add i18n translation keys for all modal text

## Capabilities

### New Capabilities
- `delete-confirmation-modal`: Custom confirmation modal for deleting a position, showing the position's title and company context before confirming.

### Modified Capabilities
- `applications-table`: Delete action triggers the custom modal instead of browser confirm.
- `position-detail-view`: Delete button triggers the custom modal instead of browser confirm.

## Impact

- **Frontend**: New `DeleteConfirmationModal` component, updated `ApplicationsTable`, updated `Positions/Show`, updated `positionActions.ts`
- **Translations**: New keys added to `en.json` and `es.json` for delete modal text
- **No backend changes**: Delete API remains the same
