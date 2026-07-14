import { apiClient } from '@/services/api/client'
import type { AuthResponse, LoginPayload, RegisterPayload, User } from '../types'

export async function login(payload: LoginPayload): Promise<AuthResponse> {
  const { data } = await apiClient.post<AuthResponse>('/login', payload)
  return data
}

export async function register(payload: RegisterPayload): Promise<AuthResponse> {
  const { data } = await apiClient.post<AuthResponse>('/register', payload)
  return data
}

export async function logout(): Promise<void> {
  await apiClient.post('/logout')
}

export async function fetchMe(): Promise<User> {
  const { data } = await apiClient.post<{ data: User }>('/me')
  return data.data
}
