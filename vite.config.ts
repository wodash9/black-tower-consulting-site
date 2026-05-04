import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        problematicasEmpresas: resolve(__dirname, 'problematicas-empresas/index.html'),
        radarFiscalAutonomos: resolve(__dirname, 'radar-fiscal-autonomos/index.html')
      }
    }
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.ts'
  }
});
