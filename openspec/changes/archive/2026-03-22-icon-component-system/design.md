## Context

The frontend has 34+ inline SVGs across 10 components. Some components (NavItem, StatCard, InterviewItem, QuickActionButton) already use internal icon mapping objects, but these are isolated per component. 8 icon types are duplicated across multiple files (trash, chevrons, external-link, edit, document, close, calendar, clock).

All icons are stroke-based (`fill="none"`, `stroke="currentColor"`) from the Lucide icon set style, sized at 24x24 viewBox.

## Goals / Non-Goals

**Goals:**
- Single `<Icon name="trash" />` component replacing all inline SVGs
- One file containing all icon path data (easy to find, add, or modify)
- Support for size and className customization
- Zero visual changes — pixel-identical output

**Non-Goals:**
- Installing an icon library (lucide-react, heroicons, etc.) — keep it dependency-free
- Tree-shaking or code-splitting icons — the total SVG data is tiny (~3KB)
- Animated icons or multi-color icons
- Icon sprite sheets or external SVG files

## Decisions

### Single Icon component with path registry over individual icon components

Use one `<Icon name="trash" />` component backed by a `Record<string, JSX.Element>` registry, rather than creating `<TrashIcon />`, `<SearchIcon />`, etc.

**Why**: 28 icons × 1 file each = unnecessary file bloat. A single registry is simpler to maintain, import, and extend. The component count stays at 1 instead of 28+.

**Alternative**: Individual icon components (like heroicons) — rejected because the project is small and doesn't benefit from per-icon tree-shaking.

### Keep icon paths inline in the registry over external SVG files

Store SVG path data directly in the Icon component file as JSX, rather than loading `.svg` files or using a sprite sheet.

**Why**: Bun's build system doesn't need special SVG loaders. JSX paths are type-safe and work with the existing setup. Total payload is small.

**Alternative**: SVG sprite sheet with `<use>` references — rejected for added build complexity with minimal benefit at this scale.

### Props: name (required), size (optional), className (optional)

Keep the API minimal. `size` defaults to 24 and sets both width and height. `className` allows custom Tailwind classes. Color inherits from `currentColor` via parent text color.

**Alternative**: Separate `width`/`height` props, `color` prop — rejected as over-engineering. Tailwind classes via `className` cover all cases.

## Risks / Trade-offs

- **Migration noise**: Touching 10 files in one change creates a large diff → Mitigate by doing the Icon component first, then migrating one component group at a time
- **Missing an icon**: If an inline SVG gets missed, it still works but creates inconsistency → Mitigate by grepping for `<svg` after migration to verify none remain
