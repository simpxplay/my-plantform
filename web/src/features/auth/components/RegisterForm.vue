<script setup lang="ts">
import { reactive } from 'vue'
import type { RegisterPayload } from '../types'

defineProps<{
  isSubmitting: boolean
  errorMessage: string | null
}>()

const emit = defineEmits<{
  submit: [payload: RegisterPayload]
}>()

const form = reactive<RegisterPayload>({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
})

function onSubmit(): void {
  emit('submit', { ...form })
}
</script>

<template>
  <form class="auth-form" novalidate @submit.prevent="onSubmit">
    <p v-if="errorMessage" class="auth-form__error" role="alert">{{ errorMessage }}</p>

    <label class="auth-form__field">
      <span>Name</span>
      <input
        v-model="form.name"
        type="text"
        name="name"
        autocomplete="name"
        required
        placeholder="Jane Doe"
      />
    </label>

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
        autocomplete="new-password"
        required
        placeholder="••••••••"
      />
    </label>

    <label class="auth-form__field">
      <span>Confirm password</span>
      <input
        v-model="form.password_confirmation"
        type="password"
        name="password_confirmation"
        autocomplete="new-password"
        required
        placeholder="••••••••"
      />
    </label>

    <button class="auth-form__submit" type="submit" :disabled="isSubmitting">
      {{ isSubmitting ? 'Creating account…' : 'Create account' }}
    </button>
  </form>
</template>

<style scoped src="../auth-form.css"></style>
