<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuth } from '@/features/auth/composables/useAuth'
import AuthCard from '@/features/auth/components/AuthCard.vue'
import LoginForm from '@/features/auth/components/LoginForm.vue'
import type { LoginPayload } from '@/features/auth/types'

const router = useRouter()
const { isSubmitting, errorMessage, login } = useAuth()

async function handleSubmit(payload: LoginPayload): Promise<void> {
  if (await login(payload)) {
    router.push({ name: 'home' })
  }
}
</script>

<template>
  <AuthCard title="Welcome back" subtitle="Sign in to your account to continue">
    <LoginForm :is-submitting="isSubmitting" :error-message="errorMessage" @submit="handleSubmit" />

    <template #footer> Don't have an account? <RouterLink :to="{ name: 'register' }">Sign up</RouterLink> </template>
  </AuthCard>
</template>
