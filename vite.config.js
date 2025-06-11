import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Get the repository name from GitHub Pages URL
// For a repository at https://username.github.io/SAAPRI
const repoName = 'SAAPRI'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for GitHub Pages
  base: `/${repoName}/`,
  build: {
    outDir: 'dist',
    // Add more detailed error reporting
    minify: true,
    sourcemap: true,
    // Try to handle assets consistently
    assetsInlineLimit: 4096
  }
})
