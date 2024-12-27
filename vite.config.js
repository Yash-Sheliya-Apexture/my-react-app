import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    historyApiFallback: true, // Fixes 400 error on page reload
  },
  build: {
    outDir: 'dist', // Ensure the build output is in the "dist" folder
  },
});
