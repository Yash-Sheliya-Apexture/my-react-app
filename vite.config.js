import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true, // Fixes 400 error on page reload
  },
  build: {
    outDir: 'dist', // Ensure the build output is in the "dist" folder
  },
});
