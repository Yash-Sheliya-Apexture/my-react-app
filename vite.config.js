import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist', // Ensure output is directed to the "dist" folder
  },
  server: {
    historyApiFallback: true, // This helps prevent 404 on page refresh
  },
});
