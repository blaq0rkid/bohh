
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      input: {
        main: './index.html',
        thankyou: './thank-you.html',
        privacy: './privacy.html',
        terms: './terms.html',
        accessibility: './accessibility.html'
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})
