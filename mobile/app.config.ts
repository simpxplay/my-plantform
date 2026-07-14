import type { ConfigContext, ExpoConfig } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: config.name ?? 'mobile',
  slug: config.slug ?? 'mobile',
  extra: {
    ...config.extra,
    apiUrl: process.env.API_URL ?? 'http://localhost:8080',
  },
});
