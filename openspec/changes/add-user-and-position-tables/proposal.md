## Why

The app needs a data foundation to track users and their job positions. Without database tables, there's no way to persist user accounts or the positions they're applying to. This is the first building block for the job application tracker.

## What Changes

- Add a `users` table with basic profile data (name, email, password digest)
- Add a `positions` table linked to users, storing the job URL, application status, and an attached CV file
- Set up Active Record models with associations and validations
- Configure Active Storage for CV file uploads

## Capabilities

### New Capabilities
- `user-management`: User accounts with basic profile data (name, email, authentication)
- `position-tracking`: Job positions linked to users with URL, status, and CV attachment

### Modified Capabilities
<!-- None — this is greenfield -->

## Impact

- New database migrations for `users` and `positions` tables
- New Active Record models: `User`, `Position`
- Active Storage setup for file attachments
- No existing code affected (greenfield)
