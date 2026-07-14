# Learned Patterns (mobile)

Patterns discovered during development that aren't in the original design.

---

## Template (copy for each new entry)

### [Pattern name]

**Context:** Where / when this applies

**Pattern:**
```ts
// code example
```

**Why it worked / why we banned it:**

**Date discovered:**

---

## Expo Router typed routes

**Context:** Navigating with `router.push()` to dynamic routes

**Pattern:**
```ts
router.push({ pathname: '/product/[id]', params: { id: '123' } });
```

**Why:** String interpolation loses type safety. Object form is checked by generated `router.d.ts`.

**Date discovered:** 2026-06-15 (from my-app)

---

## React Query key factory

**Context:** Query keys becoming inconsistent across a feature

**Pattern:**
```ts
export const profileKeys = {
  all: ['profile'] as const,
  detail: (id: string) => [...profileKeys.all, id] as const,
};
```

**Why:** Centralised key factory makes `invalidateQueries` predictable and avoids stale cache bugs.

**Date discovered:** 2026-06-15 (from my-app)

---

## `@/` alias resolves to project root, not `src/`

**Context:** Importing files from `src/` anywhere in the project

**Pattern:**
```ts
// WRONG — @/ maps to project root
import { User } from '@/features/auth/types';

// CORRECT — include src/ in the path
import { User } from '@/src/features/auth/types';
```

**Why:** `tsconfig.json` typically has `"@/*": ["./*"]`. Verify this after scaffolding.

**Date discovered:** 2026-06-15 (from my-app)
