import { resolve } from 'path';
import { defineConfig } from 'vitest/config';
const dirname = resolve();
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${resolve(dirname, 'src')}/`,
    },
  },
  test: {
    transformMode: {
      web: [/\.[jt]sx$/],
    },
    coverage: {
      exclude: ['index.ts'],
      reporter: ['text', 'json', 'html'],
    },
    globals: true,
    environment: 'jsdom',
    watch: false
  },
});
