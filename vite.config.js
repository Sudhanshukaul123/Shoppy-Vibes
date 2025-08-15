// vite.config.js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react()],
  server: {
    host: true, // allow external access
    strictPort: true,
    port: 5173, // make sure it's same as local
    // 👇 the magic right here
    allowedHosts: ['.loca.lt'],
  },
})
