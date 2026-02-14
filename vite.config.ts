import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/valentine-msg-for-2027/',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
})
