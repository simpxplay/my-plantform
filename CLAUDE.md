@.claude/rules/universal-rules.md

# my-platform monorepo

Laravel 13 API · Vue 3 web · Expo mobile

## Directory map

```
backend/    ← Laravel 13 REST API
web/        ← Vue 3 SPA (TypeScript, Pinia, Vitest)
mobile/     ← Expo SDK 57 (TypeScript, Expo Router, React Query, Zustand)
packages/
  api-client/  ← TS types generated from OpenAPI spec (openapi-typescript)
.claude/
  agents/   ← code-reviewer (sonnet), test-runner (haiku)
  hooks/    ← guard-bash.sh, session-end-check.sh
  rules/    ← universal-rules.md (@-imported here)
.tasks/     ← task folders, see .tasks/README.md
```

## Run Claude from the monorepo root

Always `cd my-platform && claude` — not from inside a subdirectory.

## Top-level commands

```bash
npm run test:backend     # php artisan test
npm run test:web         # vitest
npm run test:mobile      # tsc --noEmit
npm run openapi:export   # export Laravel OpenAPI → packages/api-client/openapi.json
npm run openapi:generate # generate TS types from openapi.json
```

## Task workflow

See `.tasks/README.md` for naming conventions and folder structure.

## OpenAPI sync rule

After changing any Laravel API Resource or route → run `npm run openapi:export && npm run openapi:generate`.
