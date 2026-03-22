## Context

Status data is currently spread across 3 components:
- `StatusBadge.tsx`: badge bg/text colors per status (7 statuses)
- `AddApplicationModal.tsx`: `statusKeys` array for the form dropdown
- `StatsRow.tsx`: hardcoded `iconColor`, `iconBg`, `trendIcon`, `trendColor` per stat card

The stat cards map to a subset of statuses (total/interviewing/offered/rejected), each with its own icon + color scheme.

## Goals / Non-Goals

**Goals:**
- One file (`statusConfig.ts`) that defines all status-related styling
- Components import from config instead of owning color values
- Adding a new status = editing one file

**Non-Goals:**
- Making status config dynamic/server-driven
- Changing any visual output
- Refactoring the stat card component API (just moving where colors come from)

## Decisions

### Single config object per status over separate color maps

Define one `StatusConfig` record keyed by status name, with badge colors and optional stat card styling nested inside. This keeps related data together rather than spreading across multiple maps.

**Alternative**: Separate `badgeColors`, `statCardConfig` exports — rejected because it fragments the same conceptual data.

### Config file at `app/javascript/config/statusConfig.ts`

Use a `config/` directory to separate data-like configuration from components.

**Alternative**: Put it in `types.ts` or a utils file — rejected because it's configuration data, not types or utilities.

### Keep StatCard generic, drive config from StatsRow

`StatCard` stays a generic presentation component. `StatsRow` uses the config to pass the right colors. This avoids coupling StatCard to status semantics.

## Risks / Trade-offs

- **Minimal risk**: Pure refactor with identical visual output
