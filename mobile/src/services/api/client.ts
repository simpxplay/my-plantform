import axios from 'axios';
import Constants from 'expo-constants';
import { storageService } from '@/src/services/storage';

const baseURL = Constants.expoConfig?.extra?.apiUrl as string;

export const apiClient = axios.create({
  baseURL,
  timeout: 10_000,
  headers: { Accept: 'application/json' },
});

apiClient.interceptors.request.use(async (config) => {
  const token = await storageService.getToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

apiClient.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (error.response?.status === 401) {
      await storageService.clearToken();
    }
    return Promise.reject(error);
  },
);
