## 1. Edit Modal Component

- [x] 1.1 Create `EditApplicationModal.tsx` based on `AddApplicationModal` pattern, accepting a `Position` prop, pre-filling form fields, and using `useForm` with `put` to PATCH `/positions/:id`
- [x] 1.2 Show existing CV filename in the upload area when the position has an attached CV
- [x] 1.3 Add `editModal` i18n keys to `en.json` (title, subtitle, save button text)

## 2. Wire Edit Buttons

- [x] 2.1 Add `editingPosition` state and `EditApplicationModal` rendering to `ApplicationsTable.tsx`, wire the edit button's `onClick`
- [x] 2.2 Add `editingPosition` state and `EditApplicationModal` rendering to `Show.tsx`, wire the edit button's `onClick`

## 3. Verify

- [x] 3.1 Run `bin/rails test` to ensure no regressions
