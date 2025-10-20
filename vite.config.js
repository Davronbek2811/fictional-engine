import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/fictional-engine/',
  build: {
    rollupOptions: {
      output: {
        format: 'es'
      }
    }
  },
  optimizeDeps: {
    include: ['tailwindcss', 'postcss', 'autoprefixer']
  },
  esbuild: {
    loader: {
      '.js': 'jsx',
      '.jsx': 'jsx'
    }
  },
  resolve: {
    extensions: ['.mjs', '.js', '.jsx', '.json']
  }
})
