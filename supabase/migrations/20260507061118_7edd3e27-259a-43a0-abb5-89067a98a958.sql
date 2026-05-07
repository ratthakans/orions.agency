create table public.contact_inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  company text not null,
  email text not null,
  brief text not null,
  created_at timestamptz not null default now()
);

alter table public.contact_inquiries enable row level security;

create policy "Anyone can submit an inquiry"
on public.contact_inquiries
for insert
to anon, authenticated
with check (
  char_length(name) between 1 and 100
  and char_length(company) between 1 and 150
  and char_length(email) between 3 and 255
  and char_length(brief) between 1 and 2000
);