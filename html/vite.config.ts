import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    jsxImportSource: '@emotion/react',
  })],
  server: {
    watch: {
      usePolling: true,
    },
    port: 80,
    host: '0.0.0.0',
  },
})
