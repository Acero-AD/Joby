## ADDED Requirements

### Requirement: Icon component renders icons by name
The system SHALL provide an `Icon` component that accepts a `name` prop and renders the corresponding SVG icon.

#### Scenario: Render a known icon
- **WHEN** `<Icon name="trash" />` is rendered
- **THEN** the component outputs an SVG element matching the trash icon paths

#### Scenario: Render an unknown icon name
- **WHEN** `<Icon name="nonexistent" />` is rendered
- **THEN** the component returns `null` (renders nothing)

### Requirement: Icon component supports size customization
The system SHALL accept an optional `size` prop (number) that sets both width and height of the SVG. The default size SHALL be 24.

#### Scenario: Default size
- **WHEN** `<Icon name="search" />` is rendered without a size prop
- **THEN** the SVG has `width="24"` and `height="24"`

#### Scenario: Custom size
- **WHEN** `<Icon name="search" size={16} />` is rendered
- **THEN** the SVG has `width="16"` and `height="16"`

### Requirement: Icon component supports className customization
The system SHALL accept an optional `className` prop that is applied to the SVG element, allowing Tailwind utility classes for color, spacing, and other styling.

#### Scenario: Custom class applied
- **WHEN** `<Icon name="search" className="text-gray-500" />` is rendered
- **THEN** the SVG element includes `class="text-gray-500"`

### Requirement: Icon registry contains all existing icons
The icon registry SHALL include all 28 icons currently used inline across the codebase: warning, close, search, plus, external-link, edit, trash, chevron-left, chevron-right, layout-dashboard, briefcase, document, calendar, settings, upload, bookmark, bar-chart, video, phone, users, circle-check, circle-x, trending-up, trending-down, clock, star, download, info.

#### Scenario: All icons available
- **WHEN** the icon registry is checked
- **THEN** it contains entries for all 28 icon names listed above

### Requirement: Icons use stroke-based rendering
All icons SHALL render with `fill="none"` and `stroke="currentColor"` to inherit color from the parent element's text color via CSS.

#### Scenario: Color inheritance
- **WHEN** an Icon is rendered inside `<span className="text-red-500"><Icon name="trash" /></span>`
- **THEN** the icon renders in red, inheriting the parent's text color

### Requirement: All inline SVGs replaced
After migration, no component in `app/javascript/` SHALL contain inline `<svg>` elements. All icons SHALL use the `<Icon>` component.

#### Scenario: No remaining inline SVGs
- **WHEN** `app/javascript/components/` and `app/javascript/pages/` are searched for `<svg` tags
- **THEN** zero matches are found (excluding the Icon component itself)
