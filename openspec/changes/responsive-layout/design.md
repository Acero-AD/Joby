## Context

The app currently renders inside a hardcoded `w-[1440px] h-[900px]` container on both pages (Dashboard and Position Show). All layout is rigid: the sidebar is always `260px` wide, the right sidebar always visible, and the applications table uses fixed pixel column widths. There is no responsive intent in the existing code. The app is built with Tailwind CSS v4 + React via Inertia.js — both fully support breakpoints and conditional rendering without new dependencies.

## Goals / Non-Goals

**Goals:**
- Make the app usable on mobile (< 640px) and tablet (640–1024px) screen sizes
- Desktop layout (> 1024px) remains visually unchanged
- Single codebase — no separate mobile routes or components
- No new dependencies

**Non-Goals:**
- PWA (offline support, installability) — deferred to a future change
- Native app wrappers (Capacitor, React Native)
- Touch gestures (swipe to delete, pull to refresh)
- Redesigning the desktop layout

## Decisions

### D1: Three breakpoints — mobile / tablet / desktop

**Decision:** `sm` (640px) as mobile/tablet boundary, `lg` (1024px) as tablet/desktop boundary.

**Rationale:** Tailwind's default `sm`/`lg` breakpoints match the target devices well (modern phones < 640px, tablets 640–1024px, desktops > 1024px). Using built-in breakpoints avoids custom config.

**Alternative considered:** Two breakpoints only (mobile/desktop). Rejected — tablets are a distinct case where the sidebar can stay collapsed but the table can still render, giving a better experience than a phone-optimized card list.

---

### D2: Sidebar becomes a drawer on mobile, icon-only on tablet

**Decision:**
- Mobile: sidebar hidden by default, revealed as a full-height drawer via a hamburger button in a top app bar
- Tablet: sidebar visible but collapsed to icon-only (no labels, no language switcher or user profile)
- Desktop: current sidebar unchanged

**Rationale:** The sidebar is the primary navigation. Hiding it entirely on mobile without an accessible trigger would make the app unusable. An icon-only collapse on tablet preserves navigation access while reclaiming horizontal space for content.

**Alternative considered:** Bottom tab bar on mobile. Rejected for now — it requires a more significant structural change and is better suited for a dedicated mobile redesign in a future iteration.

---

### D3: Applications table → card list on mobile

**Decision:** On mobile, replace the multi-column table with a vertical stack of cards. Each card shows: job title, company, status badge, and date. Edit/delete actions move to a horizontal row at the bottom of the card.

**Rationale:** Fixed-width table columns (240px, 160px, 120px, 80px) physically cannot fit on a 390px screen. A card list is the standard mobile pattern for tabular data and requires no horizontal scrolling.

**Alternative considered:** Horizontal scroll on the table. Rejected — horizontal scrolling in a tracked list is poor UX, and the table has clickable rows which conflicts with scroll behavior.

---

### D4: Right sidebar hidden on mobile and tablet

**Decision:** `RightSidebar` renders only on desktop (`hidden lg:flex`).

**Rationale:** The right sidebar (upcoming interviews, quick actions) is supplementary content. Hiding it on smaller screens keeps the layout clean and the main content accessible. It can be revisited when interview tracking becomes a core workflow.

---

### D5: Modals become full-screen sheets on mobile

**Decision:** On mobile, modals render as full-screen overlays anchored to the bottom of the viewport, sliding up. On tablet and desktop, they remain centered with a max-width.

**Rationale:** Centered modals on small screens are hard to interact with — they often overflow or require zooming. Bottom-sheet patterns are the standard mobile equivalent.

---

### D6: Root container changes to fluid

**Decision:** Replace `w-[1440px] h-[900px] mx-auto` with `w-full min-h-screen` on both pages. The rounded container visual on desktop is preserved by applying the border-radius only at `lg:` and above.

**Rationale:** A fixed-pixel root is the single biggest blocker. Making it fluid unlocks all other responsive work.

## Risks / Trade-offs

- **Desktop regression risk** → All breakpoint classes are additive from mobile up (`sm:`, `lg:`). Desktop styles are the `lg:` defaults, so existing desktop behavior is preserved by design. Mitigate by visually testing desktop at each step.
- **Drawer state management** → The mobile sidebar drawer needs open/close state. This is component-local state, no global state manager needed. But it must close on navigation (Inertia page change). Use an `useEffect` on router events.
- **Card list information density** → The card list shows less data than the table (CV column is deprioritized on mobile). This is acceptable for a tracker — users rarely need CV details on mobile. The detail view is one tap away.
- **Table column widths** → The existing fixed-width column divs (`w-[240px]` etc.) need to be replaced with flex-based responsive widths on tablet. Care needed not to break the desktop table layout.

## Migration Plan

No data migrations. No backend changes. All changes are frontend-only and ship atomically — the app continues to work at desktop sizes throughout development. Tasks are ordered so desktop is never broken at any commit boundary.
