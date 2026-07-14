# my-platform

Laravel 13 · Vue 3 · Expo monorepo.

## Structure

| Directory | Stack |
|---|---|
| `backend/` | Laravel 13, Sanctum, Scramble (OpenAPI) |
| `web/` | Vue 3, Pinia, Vitest, Vite |
| `mobile/` | Expo SDK 57, Expo Router, React Query, Zustand |
| `packages/api-client/` | TS types generated from OpenAPI spec |

## Getting started

### Prerequisites

- PHP 8.3+, Composer 2+
- Node 22+, npm 9+

### Backend

```bash
cd backend
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```

### Web

```bash
cd web
npm install
npm run dev
```

### Mobile

```bash
cd mobile
npx expo start
```

### Generate API types

After changing the Laravel API:
```bash
npm run openapi:export    # from monorepo root
npm run openapi:generate
```

## What to set up manually

- `backend/.env` — `DB_*`, `APP_URL`, `SANCTUM_STATEFUL_DOMAINS`
- Rename `com.anonymous.myapp` in `mobile/app.json` before first EAS build
