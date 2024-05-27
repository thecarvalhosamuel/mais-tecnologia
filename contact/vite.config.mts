import * as path from 'path';
import { defineConfig } from 'vitest/config';

import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    environment: 'node',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'clover'],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@application/*': path.resolve(__dirname, './src/application/*'),
      '@domain/*': path.resolve(__dirname, './src/domain/*'),
      '@database/*': path.resolve(__dirname, './src/infra/database/*'),
      '@adapters/*': path.resolve(__dirname, './src/infra/http/adapters/*'),
      '@shared/*': path.resolve(__dirname, './src/shared/*'),
    },
  },
});
