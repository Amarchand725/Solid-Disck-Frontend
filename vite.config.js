import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,      // remove console.log
        drop_debugger: true,     // remove debugger
        ecma: 2015,
        module: true,
        toplevel: true,
        passes: 2,
      },
      output: {
        comments: false,
      },
    },
    chunkSizeWarningLimit: 500, // customize chunk size warning
    cssCodeSplit: true,         // separate CSS for lazy components
    sourcemap: false,           // set to true only if needed
  },
  optimizeDeps: {
    include: ['vue', 'vue-router'], // ensure core deps are optimized
  },
})

// import { fileURLToPath, URL } from 'node:url'

// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import vueDevTools from 'vite-plugin-vue-devtools'

// export default defineConfig({
//   plugins: [
//     vue(),
//     vueDevTools(),
//   ],
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     },
//   },
// })
