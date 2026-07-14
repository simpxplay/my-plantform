<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
}>()
</script>

<template>
  <div class="auth-page">
    <div class="auth-card">
      <h1 class="auth-card__title">{{ title }}</h1>
      <p class="auth-card__subtitle">{{ subtitle }}</p>

      <slot />

      <p class="auth-card__footer">
        <slot name="footer" />
      </p>
    </div>
  </div>
</template>

<style scoped>
.auth-page {
  min-height: calc(100vh - 4rem);
  display: flex;
  align-items: center;
  justify-content: center;
}

.auth-card {
  width: 100%;
  max-width: 380px;
  padding: 2.25rem 2rem;
  border-radius: 14px;
  border: 1px solid var(--color-border);
  background: var(--color-background-soft);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
}

.auth-card__title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-heading);
  margin-bottom: 0.35rem;
}

.auth-card__subtitle {
  font-size: 0.9rem;
  color: var(--color-text);
  opacity: 0.75;
  margin-bottom: 1.75rem;
}

.auth-card__footer {
  margin-top: 1.5rem;
  text-align: center;
  font-size: 0.85rem;
  color: var(--color-text);
}

.auth-card__footer :deep(a) {
  color: var(--vt-c-indigo);
  font-weight: 600;
  text-decoration: none;
}

.auth-card__footer :deep(a:hover) {
  text-decoration: underline;
}
</style>
