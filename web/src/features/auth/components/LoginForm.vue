<script setup lang="ts">
import { reactive } from 'vue'
import type { LoginPayload } from '../types'

defineProps<{
  isSubmitting: boolean
  errorMessage: string | null
}>()

const emit = defineEmits<{
  submit: [payload: LoginPayload]
}>()

const form = reactive<LoginPayload>({
  email: '',
  password: '',
})

function onSubmit(): void {
  emit('submit', { ...form })
}
</script>

<template>
  <form class="auth-form" novalidate @submit.prevent="onSubmit">
    <p v-if="errorMessage" class="auth-form__error" role="alert">{{ errorMessage }}</p>

    <label class="auth-form__field">
      <span>Email</span>
      <input
        v-model="form.email"
        type="email"
        name="email"
        autocomplete="email"
        required
        placeholder="you@example.com"
      />
    </label>

    <label class="auth-form__field">
      <span>Password</span>
      <input
        v-model="form.password"
        type="password"
        name="password"
        autocomplete="current-password"
        required
        placeholder="••••••••"
      />
    </label>

    <button class="auth-form__submit" type="submit" :disabled="isSubmitting">
      {{ isSubmitting ? 'Signing in…' : 'Sign in' }}
    </button>
  </form>
</template>

<style scoped src="../auth-form.css"></style>
