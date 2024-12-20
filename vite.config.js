import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
   optimizeDeps: {
    include: ['react-responsive-gallery'],
  },
  plugins: [react()],
  assetsInclude: ['**/*.JPG', '**/*.JPEG'],
   server: {
    historyApiFallback: true
  }
})
