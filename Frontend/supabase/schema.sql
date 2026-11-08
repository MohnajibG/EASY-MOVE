-- Easy Move — schéma Supabase pour le formulaire de devis
-- À exécuter une fois dans : Supabase Dashboard > SQL Editor > New query

-- 1. Table des demandes de devis
create table if not exists booking_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  lang text not null default 'fr',

  depart_adresse text not null,
  depart_etage text not null,
  depart_ascenseur text,

  arrivee_adresse text not null,
  arrivee_etage text not null,
  arrivee_ascenseur text,

  type_bien text not null,
  description text,
  photos text[] not null default '{}',

  prenom text not null,
  nom text not null,
  telephone text not null,
  email text not null,
  date_souhaitee date not null,
  message text,

  status text not null default 'nouveau'
);

-- 2. Sécurité : la clé publique (anon) peut uniquement CRÉER une demande,
--    jamais lire, modifier ou supprimer celles des autres.
alter table booking_requests enable row level security;

create policy "Public peut créer une demande"
  on booking_requests for insert
  to anon
  with check (true);

-- Pour consulter les demandes, utilise le Table Editor du dashboard Supabase
-- (connecté avec ton compte, pas avec la clé anon) — ou crée un compte
-- admin authentifié plus tard si tu veux une page de gestion dédiée.

-- 3. Bucket de stockage pour les photos jointes au formulaire
insert into storage.buckets (id, name, public)
values ('booking-photos', 'booking-photos', true)
on conflict (id) do nothing;

create policy "Public peut déposer des photos"
  on storage.objects for insert
  to anon
  with check (bucket_id = 'booking-photos');

create policy "Lecture publique des photos"
  on storage.objects for select
  to anon
  using (bucket_id = 'booking-photos');
