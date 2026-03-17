## 1. Database Setup

- [x] 1.1 Create migration for `users` table (name:string, email:string, password_digest:string) with unique index on email
- [x] 1.2 Create migration for `positions` table (user:references, url:string, status:string) with default status "bookmarked"
- [x] 1.3 Run migrations and verify schema

## 2. Models

- [x] 2.1 Create `User` model with `has_secure_password`, validations (presence of name/email, uniqueness of email), and `has_many :positions, dependent: :destroy`
- [x] 2.2 Create `Position` model with `belongs_to :user`, validations (presence of url), enum for status, and `has_one_attached :cv`

## 3. Tests

- [x] 3.1 Write model tests for `User` (validations, secure password, association)
- [x] 3.2 Write model tests for `Position` (validations, enum, association, CV attachment)
- [x] 3.3 Run full test suite and confirm all tests pass
