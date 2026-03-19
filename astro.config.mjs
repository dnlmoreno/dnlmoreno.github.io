import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://dnlmoreno.github.io', // Corrected site URL for GitHub Pages
  base: '/', // Change to '/repo-name' if not a user/org page (danielmoreno.github.io)
  output: 'static',
  build: {
    format: 'directory' // Keeps clean URLs like /about/ instead of /about.html
  }
});
