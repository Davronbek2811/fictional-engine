import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use '/' during dev so Vite serves modules correctly, and use the GitHub
// Pages subpath in production builds.
const basePath = process.env.NODE_ENV === 'production' ? '/fictional-engine/' : '/'

export default defineConfig({
  plugins: [react()],
  base: basePath,
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
