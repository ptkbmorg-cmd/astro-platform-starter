import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',

  // GitHub Pages (Project Pages) settings:
  // URL akan menjadi: https://ptkbmorg-cmd.github.io/astro-platform-starter/
  site: 'https://ptkbmorg-cmd.github.io',
  base: '/astro-platform-starter',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});
