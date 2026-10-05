# Product Reviews Setup

Reviews are stored in Supabase. New submissions start as `pending`; product pages only read `approved` reviews. Admin access uses Supabase Auth plus the `review_admins` allowlist. The browser only receives the publishable key; row-level security controls all database access.

## Configure Supabase

1. Create a Supabase project.
2. In the Supabase SQL Editor, run `supabase/migrations/202610040001_product_reviews.sql`.
3. In Authentication, enable email/password sign-in and create your admin user. Disable public sign-ups after creating the account if customers should not create accounts.
4. Copy the admin user's UUID from the Auth users page. In the SQL Editor, allowlist that account:

   ```sql
   insert into public.review_admins (user_id)
   values ('YOUR-AUTH-USER-UUID');
   ```

5. Copy `.env.example` to `.env.local`. Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` from the Supabase project's Connect/API settings.
6. Restart the dev server with `npm run dev`.
7. Open `/admin/reviews` and sign in with the admin email and password.

Do not put a Supabase secret/service-role key in a `NEXT_PUBLIC_` variable or in the browser. This integration does not need a service-role key.

## Review Workflow

Customers submit a display name, 1–5 star rating, title and review text on a product page. Submissions remain pending until an admin approves them. Rejected reviews stay private; admins can view all statuses from the moderation page.

The form has basic input validation and a honeypot field. Before a public launch, add server-side rate limiting and a privacy/retention policy appropriate to the business.

If Supabase environment variables are missing, the form and admin route show a setup message and do not save review data.