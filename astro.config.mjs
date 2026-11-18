import { defineConfig } from 'astro/config';

// GitHub Actions supplies both values; local development works at /.
export default defineConfig({
  site: process.env.SITE_URL || undefined,
  base: process.env.BASE_PATH || '/',
  output: 'static',
  trailingSlash: 'always',
});
