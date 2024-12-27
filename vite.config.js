import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    historyApiFallback: true,  // Enables React Router to work correctly on refresh
  },
  build: {
    outDir: 'dist',  // Ensure Vercel looks for the dist directory for production builds
  },
});