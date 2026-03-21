## 1. Backend

- [x] 1.1 Add `show` route for positions in `config/routes.rb`
- [x] 1.2 Add `show` action to `PositionsController` that renders `Positions/Show` Inertia page with position data (including `updated_at`)
- [x] 1.3 Update position serialization to include `updatedAt` field

## 2. Frontend Types & Setup

- [x] 2.1 Add `updatedAt` to `Position` interface in `types.ts`
- [x] 2.2 Add `Positions/Show` page mapping in `application.tsx`

## 3. Detail View Page

- [ ] 3.1 Create `app/javascript/pages/Positions/Show.tsx` with the full detail layout matching the Pencil design: sidebar, header (back link, title, status badge, edit/delete buttons), and Application Details card (two-column fields: URL, Status, CV File, Created, Updated)
- [ ] 3.2 Update `Sidebar` component to accept an `activePage` prop and highlight the correct nav item

## 4. Dashboard Navigation

- [ ] 4.1 Make `ApplicationsTable` rows clickable to navigate to `/positions/:id` via Inertia (excluding action buttons and external links)

## 5. Testing

- [ ] 5.1 Run the test suite and verify everything passes
