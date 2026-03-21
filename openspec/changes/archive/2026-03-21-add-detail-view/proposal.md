## Why

Users can see their job applications listed in the dashboard table, but cannot view the full details of a single application. Clicking a row should navigate to a detail view showing all application fields (URL, status, CV, dates) with edit/delete actions.

## What Changes

- Add a new Inertia page `Positions/Show` that renders the job application detail view
- Add a `show` action to `PositionsController` serving the detail data
- Add a Rails route for `GET /positions/:id`
- Make dashboard table rows clickable, navigating to the detail view via Inertia
- Add a "Back to Dashboard" link to return to the dashboard

## Capabilities

### New Capabilities
- `position-detail-view`: Display a single job application's full details (title, status badge, application URL, CV file info, created/updated dates) with edit and delete actions, matching the "Job Application Detail V1" Pencil design.

### Modified Capabilities
- `applications-table`: Table rows become clickable to navigate to the detail view.

## Impact

- **Routes**: New `GET /positions/:id` route
- **Controllers**: New `show` action in `PositionsController`
- **Frontend**: New `Positions/Show` page component, updated `ApplicationsTable` row click handler, new Inertia page mapping
- **Types**: Extended `Position` interface with `updatedAt` field
