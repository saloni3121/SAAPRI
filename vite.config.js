import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// Get the repository name from GitHub Pages URL
// For a repository at https://username.github.io/SAAPRI
const repoName = 'SAAPRI'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for GitHub Pages
  base: `/${repoName}/`,
  resolve: {
    alias: {
      // Create an alias for src directory for easier imports
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: true,
    // Add rollup options for better error messages
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      onwarn(warning, warn) {
        // Display detailed warnings
        console.warn('WARNING:', warning);
        warn(warning);
      },
    },
  },
  // Define the mode explicitly
  mode: 'production',
})
