## Context

Joby is a greenfield Rails 8.1 app for tracking job applications. There are no existing tables or models. We need the foundational data layer: users who own positions they're applying to.

PostgreSQL is the database. Active Storage is available for file uploads (CV attachments).

## Goals / Non-Goals

**Goals:**
- Create `users` and `positions` tables with proper associations
- Support CV file attachment on positions via Active Storage
- Define position statuses to track application progress

**Non-Goals:**
- Authentication/login flow (just the user table for now)
- UI or controllers
- Search functionality
- Multiple CV versions per position

## Decisions

### 1. Position status as a string enum
Store status as a string column with Rails enum. Alternatives considered:
- Integer enum: harder to read in the database, error-prone on reordering
- Separate status table: overkill for a small fixed set of values

Statuses: `bookmarked`, `applied`, `interviewing`, `offered`, `rejected`, `withdrawn`, `accepted`

### 2. Active Storage for CV files
Use Rails Active Storage rather than Carrierwave or Shrine. Rationale:
- Built into Rails, no extra gems
- Supports local disk and cloud storage with same API
- One CV per position (single attachment)

### 3. User has basic fields only
Keep the user model minimal: name, email, password_digest. Authentication via `has_secure_password`. No roles, no OAuth — just the basics to start.

## Risks / Trade-offs

- **[No authentication yet]** → The user table exists but login isn't wired up. Acceptable for a first step; auth will come next.
- **[String enum storage]** → Slightly larger than integer but more readable and debuggable in production.
