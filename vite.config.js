import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' makes the build work when hosted at username.github.io/repo-name/
// without needing to hardcode the repo name here.
export default defineConfig({
  plugins: [react()],
  base: './',
})
