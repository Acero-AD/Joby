# Joby

A job application tracker for software engineers, evolving into a job search engine and full search suite.

## Stack

- Ruby on Rails 8.1 (Ruby 4.0.1)
- React via Inertia.js for frontend
- Bun 1.0.1 for JavaScript bundling
- PostgreSQL
- Kamal for deployment
- Better Stack for observability (logging, uptime monitoring, error tracking, status page)

## Development Commands

- `bin/dev` — start the development server (Rails + Bun watcher)
- `bin/rails test` — run the test suite
- `bin/rubocop` — lint Ruby code
- `bin/ci` — run the full CI pipeline locally (lint, security, tests)
- `bin/setup` — initial project setup

## Workflow

- Use the OpenSpec workflow for changes: `/openspec-propose` to propose, `/openspec-apply-change` to implement.
- Always run `bin/rails test` after making changes.
- Commit automatically after completing each task.

## Code Style

- Follow Rails Omakase conventions and the existing RuboCop config (`.rubocop.yml`).
- Keep it simple. Don't over-engineer.

## Communication

- Be concise. Short answers, minimal explanation, just get things done.
- Only be more verbose when explicitly asked.

## Commits
- Don't use the coauthored tag
