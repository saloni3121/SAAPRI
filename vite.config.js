import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Get the repository name from package.json or environment variables
// This is important for GitHub Pages deployment
const repoName = process.env.REPOSITORY_NAME || 'SAAPRI'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for GitHub Pages
  base: process.env.NODE_ENV === 'production' ? /${repoName}/ : '/',
  build: {
    outDir: 'dist',
  }
})