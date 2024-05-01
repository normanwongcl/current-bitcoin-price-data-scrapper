import react from '@vitejs/plugin-react';
import path from 'node:path';
import { UserConfig } from 'vitest/config';

// https://vitejs.dev/config/
const configuration: UserConfig = {
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      $lib: path.resolve(__dirname, './src/lib'),
      $components: path.resolve(__dirname, './src/components'),
    },
  },
};

export default configuration;
