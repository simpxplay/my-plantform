import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    // HMR points to localhost so the browser WebSocket connects through the mapped port
    hmr: {
      host: 'localhost',
      port: 5173,
      protocol: 'ws',
    },
    proxy: {
      '/api': {
        // Inside ddev network: http://web; locally: override with VITE_BACKEND_URL
        target: process.env.VITE_BACKEND_URL ?? 'http://localhost',
        changeOrigin: true,
      },
    },
  },
})
