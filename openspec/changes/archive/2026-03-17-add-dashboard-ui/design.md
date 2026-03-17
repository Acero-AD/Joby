## Context

Joby has User and Position models with PostgreSQL backend but no frontend. The stack includes Rails 8.1 with Inertia.js and React (per CLAUDE.md). A complete dashboard design exists in `openspec/frontend/joby.pen` with:
- A 1440x900 dashboard layout: 260px sidebar + main content (left column + 280px right sidebar)
- 5 reusable components: StatCard, NavItem Default, NavItem Active, InterviewItem, QuickActionButton
- Design tokens: purple/pink gradient (#A855F7 → #EC4899), Inter font, consistent spacing
- An Add Application modal (520px wide) with form fields

## Goals / Non-Goals

**Goals:**
- Set up Inertia.js with React rendering in Rails
- Build the dashboard layout (sidebar + main content) as the app shell
- Implement the applications table with CRUD operations
- Create reusable React components matching the Pencil design system
- Add the "Add Application" modal

**Non-Goals:**
- Authentication/login flow (no session management yet)
- Calendar, Documents, or Settings pages (sidebar links exist but are non-functional)
- Real-time updates or WebSocket integration
- Analytics page
- Mobile responsive layout (desktop-first for now)

## Decisions

### 1. Inertia.js with React (not Hotwire/Turbo)
CLAUDE.md specifies "React via Inertia.js for frontend". This replaces the default Hotwire setup. Inertia handles page transitions and props passing from Rails controllers to React components.

### 2. Tailwind CSS for styling
Use Tailwind CSS to match the design's utility-based approach. The Pencil file uses specific hex colors, Inter font, and pixel-based spacing that map cleanly to Tailwind classes and a custom theme config.

### 3. Two-spec approach: layout shell vs interactive components
Split the work into:
- **Dashboard layout + table** (the body): sidebar nav, stats row, table with data, pagination — rendered server-side via Inertia props
- **Reusable components**: StatCard, NavItem, InterviewItem, QuickActionButton, AddApplicationModal — built as standalone React components

This lets us build the shell first with an empty sidebar (navigation links present but non-functional), then compose it with components.

### 4. Controller structure
Single `DashboardController#index` action that loads positions with pagination, computes stats (counts by status), and passes everything as Inertia props. Position CRUD uses `PositionsController` with standard RESTful actions that redirect back to dashboard.

### 5. Design token mapping
Extract colors and spacing from the Pencil file into Tailwind config:
- Primary gradient: `#A855F7` → `#EC4899` (purple to pink)
- Background gradient: `#FAF5FF` → `#FDF2F8` → `#F9FAFB` → `#F5F3FF`
- Dark surface: `#18181B` (interviews card)
- Status colors: yellow (#FEF3C7/#D97706), green (#D1FAE5/#059669), red (#FEE2E2/#DC2626), blue (#E0E7FF/#4F46E5), purple (#F3F0FF/#7C3AED)

## Risks / Trade-offs

- **[Inertia replaces Hotwire]** → Need to remove turbo-rails/stimulus default setup and add inertia-rails gem + @inertiajs/react. Some existing JS config will change.
- **[No auth yet]** → Dashboard loads for any user. Will hardcode or use first user until auth is built.
- **[Desktop-only]** → Design is 1440px wide. Mobile will come later.
