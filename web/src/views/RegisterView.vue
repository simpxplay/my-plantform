<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuth } from '@/features/auth/composables/useAuth'
import AuthCard from '@/features/auth/components/AuthCard.vue'
import RegisterForm from '@/features/auth/components/RegisterForm.vue'
import type { RegisterPayload } from '@/features/auth/types'

const router = useRouter()
const { isSubmitting, errorMessage, register } = useAuth()

async function handleSubmit(payload: RegisterPayload): Promise<void> {
  if (await register(payload)) {
    router.push({ name: 'home' })
  }
}
</script>

<template>
  <AuthCard title="Create an account" subtitle="Start your journey with us">
    <RegisterForm :is-submitting="isSubmitting" :error-message="errorMessage" @submit="handleSubmit" />

    <template #footer> Already have an account? <RouterLink :to="{ name: 'login' }">Sign in</RouterLink> </template>
  </AuthCard>
</template>
