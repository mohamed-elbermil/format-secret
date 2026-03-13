import path from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  root: __dirname,
  publicDir: path.join(__dirname, 'public'),
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
      '@assets': path.join(__dirname, '..', 'assets'),
    },
  },
  server: {
    host: '0.0.0.0',  // Permet l'accès depuis le réseau
    port: 5174,
    fs: {
      allow: ['..'],
    },
    proxy: {
      '/api/places': {
        target: 'https://maps.googleapis.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/places/, '/maps/api/place'),
      }
    }
  },
})