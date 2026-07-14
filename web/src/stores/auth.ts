import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { onUnauthorized, setAuthToken } from '@/services/api/client'
import * as authService from '@/features/auth/services/authService'
import type { LoginPayload, RegisterPayload, User } from '@/features/auth/types'

const TOKEN_STORAGE_KEY = 'auth_token'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const token = ref<string | null>(localStorage.getItem(TOKEN_STORAGE_KEY))
  const isReady = ref(false)

  const isAuthenticated = computed(() => token.value !== null)

  function setSession(newToken: string, newUser: User): void {
    token.value = newToken
    user.value = newUser
    localStorage.setItem(TOKEN_STORAGE_KEY, newToken)
    setAuthToken(newToken)
  }

  function clearSession(): void {
    token.value = null
    user.value = null
    localStorage.removeItem(TOKEN_STORAGE_KEY)
    setAuthToken(null)
  }

  async function login(payload: LoginPayload): Promise<void> {
    const response = await authService.login(payload)
    setSession(response.token, response.data)
  }

  async function register(payload: RegisterPayload): Promise<void> {
    const response = await authService.register(payload)
    setSession(response.token, response.data)
  }

  async function logout(): Promise<void> {
    try {
      await authService.logout()
    } finally {
      clearSession()
    }
  }

  async function init(): Promise<void> {
    if (token.value) {
      setAuthToken(token.value)
      try {
        user.value = await authService.fetchMe()
      } catch {
        clearSession()
      }
    }
    isReady.value = true
  }

  onUnauthorized(clearSession)

  return { user, token, isReady, isAuthenticated, login, register, logout, init }
})
