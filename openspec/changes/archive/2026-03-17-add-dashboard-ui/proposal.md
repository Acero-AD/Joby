## Why

The backend models (User, Position) exist but there is no UI to interact with them. Users need a dashboard to view, create, edit, and manage their job applications. A complete design exists in the Pencil file (`openspec/frontend/joby.pen`) that defines the layout, components, and design system.

## What Changes

- Add Inertia.js integration with React for frontend rendering
- Create a dashboard page with sidebar navigation, stats cards, applications table, upcoming interviews panel, and quick actions
- Build reusable React components matching the Pencil design system: StatCard, NavItem, InterviewItem, QuickActionButton
- Create the dashboard layout with a sidebar (navigation + user profile) and a main content area split into left (stats + table) and right (interviews + quick actions) columns
- Add a positions controller serving data to the dashboard via Inertia
- Create the applications table with columns: Job Title, Company/Link, CV Used, Status, Actions (edit/delete)
- Add an "Add Application" modal for creating new positions

## Capabilities

### New Capabilities
- `dashboard-layout`: Main app shell with sidebar navigation, header, and content area structure
- `dashboard-components`: Reusable UI components (StatCard, NavItem, InterviewItem, QuickActionButton) matching the design system
- `applications-table`: Table view of job applications with status badges, links, CV info, pagination, filtering, and edit/delete actions
- `add-application-modal`: Modal form for creating a new position (title, company, URL, CV upload, status, notes)

### Modified Capabilities
<!-- None -->

## Impact

- New npm dependencies: `@inertiajs/react`, `react`, `react-dom`, Tailwind CSS (or equivalent for styling)
- New Rails controller: `DashboardController` (or `PositionsController` with dashboard action)
- New React components under `app/javascript/`
- Inertia.js middleware added to Rails
- Routes updated for dashboard and position CRUD
