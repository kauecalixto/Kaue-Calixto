import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Kaue-Calixto/', // 🔥 Defina o caminho correto
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
