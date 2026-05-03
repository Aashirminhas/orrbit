import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackStartVite } from '@tanstack/react-start/plugin/vite'
import netlify from '@netlify/vite-plugin-tanstack-start'

export default defineConfig({
  plugins: [
    react(),
    TanStackStartVite(),
    netlify()
  ]
})