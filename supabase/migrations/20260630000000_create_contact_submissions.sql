create table if not exists contact_submissions (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  subject text,
  message text not null,
  created_at timestamptz default now()
);

alter table contact_submissions enable row level security;

-- Only service role can read submissions
create policy "service_role_only" on contact_submissions
  for all using (auth.role() = 'service_role');
