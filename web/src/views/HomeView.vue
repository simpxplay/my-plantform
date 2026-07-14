<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()
const isLoggingOut = ref(false)

async function handleLogout(): Promise<void> {
  isLoggingOut.value = true
  try {
    await authStore.logout()
    router.push({ name: 'login' })
  } finally {
    isLoggingOut.value = false
  }
}
</script>

<template>
  <main class="home">
    <div class="home__card">
      <h1>Hey, {{ authStore.user?.name }} 👋</h1>
      <p class="home__email">{{ authStore.user?.email }}</p>
      <button class="home__logout" :disabled="isLoggingOut" @click="handleLogout">
        {{ isLoggingOut ? 'Signing out…' : 'Sign out' }}
      </button>
    </div>
  </main>
</template>

<style scoped>
.home {
  min-height: calc(100vh - 4rem);
  display: flex;
  align-items: center;
  justify-content: center;
}

.home__card {
  text-align: center;
  padding: 2.25rem 2rem;
  border-radius: 14px;
  border: 1px solid var(--color-border);
  background: var(--color-background-soft);
}

.home__email {
  color: var(--color-text);
  opacity: 0.75;
  margin: 0.35rem 0 1.5rem;
}

.home__logout {
  padding: 0.6rem 1.4rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  background: transparent;
  color: var(--color-text);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: border-color 0.2s;
}

.home__logout:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.home__logout:not(:disabled):hover {
  border-color: var(--color-border-hover);
}
</style>
