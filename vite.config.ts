import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy'; // 🔥 Importação correta do plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: 'certifications', dest: '' },
        { src: 'projects', dest: '' },
        { src: 'perfil', dest: '' } ,
        { src: 'sounds', dest: '' },
      ]
    })
  ],
  base: "", //GitHub Pages
  build: {
    outDir: "dist",
    assetsDir: "assets",
  }
});
