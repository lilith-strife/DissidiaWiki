import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/dissidia-items/',
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})