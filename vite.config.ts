import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000, // Specify your desired port here
  },
  plugins: [sveltekit()]
});