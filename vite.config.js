import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
   build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'locomotive-scroll': ['locomotive-scroll'],
        },
      },
    },
  },
  plugins: [react()],
  assetsInclude: ['**/*.JPG', '**/*.JPEG'],
  resolve: {
    alias: {
      // Alias for ScrollReveal, if needed
      scrollreveal: 'scrollreveal/dist/scrollreveal.es.js',
    },
  },
})
