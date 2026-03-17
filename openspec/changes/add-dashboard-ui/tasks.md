## 1. Inertia.js + React Setup

- [x] 1.1 Add `inertia_rails` gem, `@inertiajs/react`, `react`, `react-dom` dependencies and configure Inertia middleware in Rails
- [x] 1.2 Set up Tailwind CSS with custom theme (colors, fonts from Pencil design)
- [x] 1.3 Configure Bun build to handle JSX/React and create the Inertia app entry point (`app/javascript/application.jsx`)
- [x] 1.4 Create the Inertia layout component with the shared app shell

## 2. Dashboard Layout

- [ ] 2.1 Create `DashboardController#index` that loads positions (paginated), computes stats, and renders via Inertia
- [ ] 2.2 Build the Dashboard page component with the two-column layout (left content + 280px right sidebar)
- [ ] 2.3 Build the Sidebar component (logo, navigation with NavItem components, user profile section)
- [ ] 2.4 Build the Header component (welcome message, search box, "Add Application" button)
- [ ] 2.5 Set up routes: root to `dashboard#index`, resourceful routes for positions

## 3. Reusable Components

- [ ] 3.1 Create StatCard component (label, value, icon badge, trend indicator with color variants)
- [ ] 3.2 Create NavItem component (default + active variants with icon and label)
- [ ] 3.3 Create InterviewItem component (dark card with company, time, type icon, status dot)
- [ ] 3.4 Create QuickActionButton component (icon + label in bordered card)
- [ ] 3.5 Build the Stats Row section using 4 StatCard instances with computed data from props
- [ ] 3.6 Build the Right Sidebar with Upcoming Interviews card and Quick Actions card

## 4. Applications Table

- [ ] 4.1 Build the table component with header row (Job Title, Company/Link, CV Used, Status, Actions)
- [ ] 4.2 Build table data rows with status badge color mapping and "View" link for job URL
- [ ] 4.3 Add pagination component (page numbers, prev/next buttons, showing X of Y count)
- [ ] 4.4 Add delete action (destroy position via Inertia visit, refresh table)
- [ ] 4.5 Add filter button UI (placeholder functionality)

## 5. Add Application Modal

- [ ] 5.1 Build the modal overlay and form layout matching the Pencil design (520px wide)
- [ ] 5.2 Add form fields: Job Title, Company, Status dropdown, URL, CV file upload, Notes
- [ ] 5.3 Wire form submission to `PositionsController#create` via Inertia with validation errors
- [ ] 5.4 Handle CV file upload via Active Storage

## 6. Testing & Polish

- [ ] 6.1 Add controller tests for `DashboardController` and `PositionsController`
- [ ] 6.2 Run full test suite and confirm all tests pass
