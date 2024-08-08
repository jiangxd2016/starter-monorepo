import { defineConfig } from 'vitest/config';
export default defineConfig({
  define: {
    __DEV__: true,
  },
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        '**/scripts/**',
        '**/unplugin/**',
        '**/playground/**',
        '**/examples/**',
        '**/*.d.ts',
        '**/index.ts',
        '**/test/**',
        '**/warning.ts',
      ],
    },
    globals: true,
    watch: false,
  },
});
