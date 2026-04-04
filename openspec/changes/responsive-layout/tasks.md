## 1. Root Layout

- [x] 1.1 Replace `w-[1440px] h-[900px]` with `w-full min-h-screen` on Dashboard page, apply rounded corners only at `lg:`
- [x] 1.2 Replace `w-[1440px] h-[900px]` with `w-full min-h-screen` on Position Show page, apply rounded corners only at `lg:`
- [x] 1.3 Hide `RightSidebar` on mobile and tablet (`hidden lg:flex`)

## 2. Sidebar — Desktop & Tablet

- [x] 2.1 Add icon-only collapsed mode to Sidebar for tablet (`sm:` to `lg:` range): show only nav icons, hide labels, language switcher, and user profile
- [x] 2.2 Adjust sidebar width to `w-16` on tablet and `w-[260px]` on desktop

## 3. Mobile Navigation

- [x] 3.1 Create `TopAppBar` component with Joby logo and hamburger menu button (mobile only)
- [x] 3.2 Add drawer open/close state to pages, pass down to Sidebar and TopAppBar
- [x] 3.3 Render Sidebar as a fixed full-height overlay drawer on mobile with semi-transparent backdrop
- [x] 3.4 Close drawer on backdrop tap and on navigation (hook into Inertia router events)
- [x] 3.5 Render `TopAppBar` on mobile (`block lg:hidden`) in both Dashboard and Position Show pages

## 4. Stats Row

- [x] 4.1 Make `StatsRow` wrap to a 2×2 grid on mobile (`grid grid-cols-2 lg:flex`)

## 5. Applications Table — Card List

- [x] 5.1 Create `PositionCard` component displaying job title, company, status badge, date, and edit/delete actions
- [x] 5.2 Render `PositionCard` list on mobile (below `sm:`) inside `ApplicationsTable`
- [x] 5.3 Hide the existing table on mobile, show only on `sm:` and above

## 6. Applications Table — Tablet Compact

- [x] 6.1 Replace fixed-pixel column widths with flexible widths on the table for tablet
- [x] 6.2 Hide the CV column on tablet (`hidden lg:flex` on that column)

## 7. Modals — Mobile Full-Screen

- [x] 7.1 Update `AddApplicationModal` to render full-screen on mobile (`sm:` gets centered overlay, mobile gets full-screen sheet)
- [x] 7.2 Update `EditApplicationModal` to render full-screen on mobile
- [x] 7.3 Update `DeleteConfirmationModal` to render full-screen on mobile

## 8. Position Detail View

- [x] 8.1 Stack the two-column application details card to single column on mobile and tablet (`flex-col lg:flex-row`)
- [x] 8.2 Render `TopAppBar` on mobile in Position Show page

## 9. Touch & Accessibility

- [x] 9.1 Ensure all interactive elements (buttons, row taps) have a minimum touch target of 44px on mobile
