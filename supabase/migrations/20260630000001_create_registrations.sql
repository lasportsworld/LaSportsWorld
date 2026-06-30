create table if not exists registrations (
  id uuid default gen_random_uuid() primary key,
  program_type text not null,
  parent_name text not null,
  email text not null,
  phone text not null,
  child_name text not null,
  child_age text not null,
  notes text,
  created_at timestamptz default now()
);

alter table registrations enable row level security;

create policy "service_role_only" on registrations
  for all using (auth.role() = 'service_role');
