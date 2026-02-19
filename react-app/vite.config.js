import path from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  root: __dirname,
  // Servir les assets (images, PDF, etc.) depuis le projet parent
  publicDir: path.join(__dirname, '..'),
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
      '@assets': path.join(__dirname, '..', 'assets'),
    },
  },
  // Autoriser Vite à lire les fichiers du dossier parent (CSS, etc.)
  server: {
    fs: {
      allow: ['..'],
    },
  },
})
