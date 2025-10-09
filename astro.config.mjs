// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://chaseamccoy.github.io/personal-website/',
    base: '/personal-website/', // ✅ critical for GitHub Pages
    outDir: './dist',
  });