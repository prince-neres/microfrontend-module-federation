// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "CoreApp",
      remotes: {
        MicroAppA: "http://localhost:3001/assets/remoteEntry.js",
        MicroAppB: "http://localhost:3002/assets/remoteEntry.js",
        MicroAppC: "http://localhost:3003/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
});
