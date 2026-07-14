# web — Vue 3 SPA

## Conventions

- Composition API + `<script setup lang="ts">` everywhere — no Options API, no class components.
- API response types come **only** from `@my-platform/api-client` — never write hand-made interfaces for API responses.
- Global/shared state → Pinia stores in `src/stores/`. No reactive state leaked into `provide/inject` for cross-feature data.
- Feature structure mirrors backend: `src/features/<name>/{components,composables,services,types.ts}`.

## Pinia conventions

```ts
// src/stores/auth.ts
export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null);
  // actions are plain functions
  return { user };
});
```

- Store IDs match their filename (kebab-case).
- No async logic directly in stores — call composables or services, then update store.

## API layer

All HTTP calls go through `src/services/api/client.ts` (axios instance). Never call `fetch()` or `axios` directly in components.

Import types from `@my-platform/api-client`, not from hand-written interfaces.

## Commands

```bash
npm run dev       # start Vite dev server
npm run test      # run Vitest
npm run build     # production build
npm run typecheck # tsc --noEmit
npm run lint      # ESLint
```

## After OpenAPI changes

Run from monorepo root: `npm run openapi:generate` → updated types available immediately.
