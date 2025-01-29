import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  root: './', // Ensure Vite knows the project root
  base: '/OwnPortfolio/',  // GitHub Pages base URL
});
