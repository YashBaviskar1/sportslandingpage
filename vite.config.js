import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({

   resolve: {
    alias: {
      'locomotive-scroll': 'locomotive-scroll/dist/locomotive-scroll.esm.js',
    },
  },
   optimizeDeps: {
      include: ['locomotive-scroll'],
  },
  plugins: [react()],
  assetsInclude: ['**/*.JPG', '**/*.JPEG'],
   server: {
    historyApiFallback: true
  }
})
