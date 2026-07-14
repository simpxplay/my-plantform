@AGENTS.md
@.claude/rules/architecture.md
@.claude/rules/anti-patterns.md

# mobile — Expo SDK 57

React Native · Expo Router · React Query · Zustand · TypeScript strict

Read before writing code:
- `.claude/rules/architecture.md` — layer diagram, directory map, key invariants
- `.claude/rules/anti-patterns.md` — banned patterns with examples
- `.ai-context/active-context.md` — current task + files in flight

Read when relevant:
- `.claude/rules/navigation.md` — Expo Router patterns
- `.claude/rules/state-management.md` — React Query + Zustand rules
- `.claude/rules/styling.md` — StyleSheet, theme, dark mode

## Expo rules (non-negotiable)

- Managed workflow — never eject, never add `android/` or `ios/` to git
- Install packages with `npx expo install <pkg>`, never `npm install` for RN/Expo packages
- Never import from `@react-navigation/*` directly — use `expo-router` only
- Never use `<Image>` from `react-native` — use `expo-image`
- Never use `process.env` in app code — use `expo-constants`
- Never import `AsyncStorage` directly — go through `src/services/storage/`
- API response types only from `@my-platform/api-client`

## Commands

```bash
npx expo start           # start dev server
npx expo install <pkg>   # install Expo-compatible package
npx tsc --noEmit         # typecheck
```

## Task workflow

See root `.tasks/README.md`. Update `.ai-context/active-context.md` when switching tasks.
Add discoveries to `.ai-context/learned-patterns.md`.
