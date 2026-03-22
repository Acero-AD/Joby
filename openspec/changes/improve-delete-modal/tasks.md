## 1. Translation Keys

- [x] 1.1 Add delete modal translation keys to `en.json` and `es.json` (title, body text, warning note, cancel button, delete button, position context format)

## 2. Delete Confirmation Modal Component

- [ ] 2.1 Create `app/javascript/components/DeleteConfirmationModal.tsx` matching the Pencil design: warning icon header, position summary card (title + company/date), permanent deletion warning, Cancel/Delete buttons
- [ ] 2.2 Use i18n translation keys for all modal text

## 3. Update Delete Triggers

- [ ] 3.1 Update `positionActions.ts` to remove the `confirm()` call — export a plain `deletePosition` that only does `router.delete()`
- [ ] 3.2 Update `ApplicationsTable.tsx` to manage modal state and show `DeleteConfirmationModal` on delete click
- [ ] 3.3 Update `Positions/Show.tsx` to manage modal state and show `DeleteConfirmationModal` on delete click

## 4. Testing

- [ ] 4.1 Run the test suite and verify everything passes
