import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//sitemap
import sitemap from 'vite-plugin-sitemap'
import viteCompression from 'vite-plugin-compression';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    sitemap({
      hostname: 'https://binesai.com',
      dynamicRoutes: ['/', '/about', '/auspiciantes', '/programacion', '/contacto'],
    }),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 1024,
      verbose: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
