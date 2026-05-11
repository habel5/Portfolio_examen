create table if not exists public.portfolio_evidence (
  id uuid primary key,
  process_code text not null,
  file_name text not null,
  file_type text not null,
  file_size bigint not null,
  note text,
  storage_path text not null,
  created_at timestamptz not null default now()
);

alter table public.portfolio_evidence enable row level security;

drop policy if exists "portfolio evidence can be read" on public.portfolio_evidence;
create policy "portfolio evidence can be read"
on public.portfolio_evidence for select
to anon
using (true);

drop policy if exists "portfolio evidence can be added" on public.portfolio_evidence;
create policy "portfolio evidence can be added"
on public.portfolio_evidence for insert
to anon
with check (true);

drop policy if exists "portfolio evidence can be deleted" on public.portfolio_evidence;
create policy "portfolio evidence can be deleted"
on public.portfolio_evidence for delete
to anon
using (true);

insert into storage.buckets (id, name, public)
values ('bewijslast', 'bewijslast', false)
on conflict (id) do nothing;

drop policy if exists "portfolio files can be read" on storage.objects;
create policy "portfolio files can be read"
on storage.objects for select
to anon
using (bucket_id = 'bewijslast');

drop policy if exists "portfolio files can be uploaded" on storage.objects;
create policy "portfolio files can be uploaded"
on storage.objects for insert
to anon
with check (bucket_id = 'bewijslast');

drop policy if exists "portfolio files can be deleted" on storage.objects;
create policy "portfolio files can be deleted"
on storage.objects for delete
to anon
using (bucket_id = 'bewijslast');
