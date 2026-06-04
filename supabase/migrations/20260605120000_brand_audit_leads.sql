-- Optional dedicated table for Brand Audit leads (cleaner reporting than packing into contact_inquiries).
-- Apply with: supabase db push   (or run in the Supabase SQL editor)
-- After applying, you can switch the insert in src/pages/Diagnostic.tsx from
--   contact_inquiries  →  brand_audit_leads.

create table if not exists public.brand_audit_leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  brand text not null,
  email text not null,
  score int not null,
  tier text not null,
  weakest jsonb,          -- e.g. [{"axis":"Data Maturity","pct":33}, ...]
  note text,
  created_at timestamptz not null default now()
);

alter table public.brand_audit_leads enable row level security;

create policy "Anyone can submit an audit lead"
on public.brand_audit_leads
for insert
to anon, authenticated
with check (
  char_length(name) between 1 and 100
  and char_length(brand) between 1 and 150
  and char_length(email) between 3 and 255
  and score between 0 and 100
  and char_length(tier) between 1 and 40
);
