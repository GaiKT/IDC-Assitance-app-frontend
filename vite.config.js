import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import { resolve } from 'path';

// Load .env file from the parent directory (if needed)
dotenv.config({ path: resolve(__dirname, '../.env') });

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 100000000, // Set a higher chunk size warning limit (in bytes)
  },
  server: {
    port: process.env.VITE_PORT || 5173, // Accessing a VITE_ prefixed variable
  },
});
