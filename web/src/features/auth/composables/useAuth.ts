import { ref } from 'vue'
import { isAxiosError } from 'axios'
import { useAuthStore } from '@/stores/auth'
import type { LoginPayload, RegisterPayload } from '../types'

function extractErrorMessage(error: unknown): string {
  if (isAxiosError(error)) {
    const data = error.response?.data as { message?: string; errors?: Record<string, string[]> } | undefined
    const firstFieldError = data?.errors ? Object.values(data.errors)[0]?.[0] : undefined
    return firstFieldError ?? data?.message ?? 'Something went wrong. Please try again.'
  }
  return 'Something went wrong. Please try again.'
}

export function useAuth() {
  const authStore = useAuthStore()
  const isSubmitting = ref(false)
  const errorMessage = ref<string | null>(null)

  async function login(payload: LoginPayload): Promise<boolean> {
    isSubmitting.value = true
    errorMessage.value = null
    try {
      await authStore.login(payload)
      return true
    } catch (error) {
      errorMessage.value = extractErrorMessage(error)
      return false
    } finally {
      isSubmitting.value = false
    }
  }

  async function register(payload: RegisterPayload): Promise<boolean> {
    isSubmitting.value = true
    errorMessage.value = null
    try {
      await authStore.register(payload)
      return true
    } catch (error) {
      errorMessage.value = extractErrorMessage(error)
      return false
    } finally {
      isSubmitting.value = false
    }
  }

  return { isSubmitting, errorMessage, login, register }
}
