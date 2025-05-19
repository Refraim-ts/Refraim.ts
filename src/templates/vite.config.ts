
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root:"src",
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:8787', // ミドルウェア側のポート
    },
  },
})