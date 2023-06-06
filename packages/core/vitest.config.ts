import { defineConfig } from 'vitest/config';
export default defineConfig({
  define: {
    __DEV__: true,
  },
  test: {
    coverage: {
      provider: 'c8',
      exclude: ['playground/**/*'],
      reporter: ['text', 'json', 'html'],
    },
    globals: true,
    watch: false
  }
});
