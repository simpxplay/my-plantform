# backend — Laravel 13

## Structure

```
app/
├── Actions/        ← single-responsibility business commands (one class, one method)
│   └── <Feature>/  ← e.g. Auth/LoginUserAction.php
├── Services/       ← complex orchestration, external integrations
│   └── <Feature>/  ← e.g. Payment/StripeService.php
├── Http/
│   ├── Controllers/   ← thin: validate → action → resource
│   ├── Requests/      ← FormRequest per endpoint (mandatory)
│   └── Resources/     ← JsonResource / ResourceCollection for all responses
├── Models/
└── Providers/
```

**Actions vs Services:**
- Action = one use-case, one `handle()` method. Controller calls it.
- Service = aggregates multiple actions OR wraps an external SDK (Stripe, mail, etc.).

## Conventions

- Every controller method that accepts user input **must** use a FormRequest. No `$request->all()` or `$request->except()` directly in controllers.
- All API responses go through `JsonResource` or `ResourceCollection` — never `response()->json([...])` with raw arrays.
- After adding/changing a Resource or route → regenerate OpenAPI: `composer openapi:export` (or `npm run openapi:export` from root).
- No `dd()` or `dump()` in committed code.

## Commands

Run inside ddev (`ddev exec <cmd>`) or via `ddev ssh`:

```bash
php artisan test                  # run PHPUnit tests
php artisan test --filter MyTest  # run specific test
php artisan migrate               # run pending migrations
composer openapi:export           # export OpenAPI spec → packages/api-client/openapi.json
php artisan route:list            # inspect registered routes
```

Or from the monorepo root:
```bash
ddev exec php artisan test
ddev exec php artisan migrate
npm run test:backend              # wrapper that calls php artisan test
```

## API conventions

- Auth: Laravel Sanctum (tokens in Authorization header, not cookies)
- Versioning: prefix routes with `/api/v1/`
- Error format: `{ message: string, errors?: Record<string, string[]> }`
