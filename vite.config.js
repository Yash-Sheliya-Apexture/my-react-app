import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    historyApiFallback: true, // this fixes 404 errors on page refresh
  },
  build: {
    outDir: 'build', // default Vercel directory
  },
});
