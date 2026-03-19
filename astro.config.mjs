import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://danielmoreno.github.io', // Placeholder URL for GitHub Pages
  base: '/', // Change to '/repo-name' if not a user/org page (danielmoreno.github.io)
  output: 'static',
  build: {
    format: 'directory' // Keeps clean URLs like /about/ instead of /about.html
  }
});
