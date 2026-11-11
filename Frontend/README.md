# Easy Move — Site web

Site vitrine pour **Easy Move**, entreprise de déménagement en Algérie : présentation des services, formulaire de devis en 5 étapes, multilingue (FR / EN / AR avec support RTL).

## Stack technique

- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS v4**
- **Framer Motion** (animations)
- **Supabase** (base de données + stockage des photos du formulaire)
- **EmailJS** (notification par email à chaque nouvelle demande)
- **lucide-react** (icônes)

## Démarrer en local

```bash
yarn install
yarn dev
```

Le site tourne alors sur [http://localhost:5173](http://localhost:5173).

Autres commandes utiles :

```bash
yarn build      # build de production dans dist/
yarn preview    # prévisualiser le build de production
yarn tsc -b --noEmit   # vérifier les types sans build
```

## Variables d'environnement

Le formulaire de devis a besoin de Supabase (stockage des demandes) et d'EmailJS (notification email) pour fonctionner. Copie `.env.example` en `.env.local` et renseigne tes propres valeurs :

```bash
cp .env.example .env.local
```

| Variable                   | Où la trouver                                                                                 |
| -------------------------- | --------------------------------------------------------------------------------------------- |
| `VITE_SUPABASE_URL`        | Dashboard Supabase > Project Settings > API                                                   |
| `VITE_SUPABASE_ANON_KEY`   | Dashboard Supabase > Project Settings > API (clé **publishable/anon**, jamais la clé secrète) |
| `VITE_EMAILJS_SERVICE_ID`  | Dashboard EmailJS > Email Services                                                            |
| `VITE_EMAILJS_TEMPLATE_ID` | Dashboard EmailJS > Email Templates                                                           |
| `VITE_EMAILJS_PUBLIC_KEY`  | Dashboard EmailJS > Account > General                                                         |

⚠️ Ne jamais utiliser la clé **secrète** Supabase (`sb_secret_...`) côté frontend — elle donnerait un accès complet à la base à n'importe quel visiteur du site.

Sans ces variables, le site fonctionne normalement mais le formulaire affiche un message d'erreur à l'envoi (comportement voulu, pas un bug).

### Configurer Supabase (une seule fois)

1. Crée un projet sur [supabase.com](https://supabase.com)
2. Dans **SQL Editor**, exécute le contenu de [`supabase/schema.sql`](supabase/schema.sql) — ça crée la table `booking_requests`, le bucket de stockage `booking-photos`, et les règles de sécurité (le site peut créer des demandes, personne ne peut lire celles des autres)
3. Les demandes reçues sont consultables dans **Table Editor > booking_requests**

### Configurer EmailJS (une seule fois)

1. Crée un compte sur [emailjs.com](https://www.emailjs.com) et connecte une boîte mail (Email Services)
2. Crée un template (Email Templates) — le contenu HTML prêt à coller se trouve dans [`supabase/emailjs-template.html`](supabase/emailjs-template.html)
3. Renseigne ton adresse en "To Email" dans le template

## Pages du site

Le site utilise `react-router-dom` pour gérer plusieurs pages :

| Route               | Page                                                          |
| -------------------- | -------------------------------------------------------------- |
| `/`                   | Page d'accueil (one-page : hero, services, devis, avis, ...) |
| `/mentions-legales`   | Mentions légales                                              |
| `/en-construction`    | Page "en construction" (à utiliser pour une section pas encore prête) |
| n'importe quelle autre URL | Page 404 "introuvable"                                  |

Une page d'erreur animée s'affiche aussi automatiquement si une erreur JavaScript inattendue survient sur le site (voir `src/components/ErrorBoundary.tsx`).

⚠️ Les mentions légales (`src/i18n/translations.ts`, clé `legal`) contiennent des informations génériques (hébergeur, usage des données). Le numéro de registre de commerce et le NIF de l'entreprise ne sont pas inclus — à ajouter par le client s'il souhaite les publier.

## Déploiement

Le site étant maintenant multi-pages (React Router), l'hébergement doit rediriger **toute** URL vers `index.html` pour que les routes fonctionnent en accès direct ou après un rafraîchissement :

- **Vercel** : déjà configuré via [`vercel.json`](vercel.json) à la racine (rewrite automatique).
- **Hostinger** (hébergement statique) : déjà configuré via [`public/.htaccess`](public/.htaccess), qui est copié automatiquement dans `dist/` au build — veille juste à bien uploader ce fichier caché avec le reste de `dist/`.

Pense aussi à ajouter les 5 variables d'environnement ci-dessus (Vercel : **Project Settings > Environment Variables**, type **Config** car ce sont des clés publiques côté client, pour Production + Preview + Development).

## Structure du projet

```
src/
  pages/          pages de routes (HomePage, MentionsLegales, StatusPage 404/erreur/construction)
  components/     composants de chaque section du site (Hero, BookingForm, Footer, ...)
  i18n/           dictionnaire de traductions FR/EN/AR + contexte de langue
  lib/            clients Supabase et EmailJS
  constants/      liens réseaux sociaux
  assets/         images et visuels de marque
public/
  .htaccess       redirection SPA pour l'hébergement Hostinger
supabase/
  schema.sql              schéma SQL à exécuter dans Supabase
  emailjs-template.html   template HTML pour la notification email
```

## Langues

Le sélecteur de langue (en haut à droite de la navbar) permet de basculer entre français, anglais et arabe. L'arabe bascule automatiquement toute la mise en page en RTL. Les traductions se trouvent dans `src/i18n/translations.ts`.
