import type { components } from '@my-platform/api-client'

export type User = components['schemas']['UserResource']
export type LoginPayload = components['schemas']['LoginRequest']
export type RegisterPayload = components['schemas']['RegisterRequest']

export interface AuthResponse {
  data: User
  token: string
}
