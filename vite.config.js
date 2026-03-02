import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const resumeRedirect = {
  name: 'resume-redirect',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url === '/resume') {
        res.writeHead(301, { Location: '/resume/' });
        res.end();
        return;
      }
      next();
    });
  },
  configurePreviewServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url === '/resume') {
        res.writeHead(301, { Location: '/resume/' });
        res.end();
        return;
      }
      next();
    });
  },
};

export default defineConfig({
  plugins: [resumeRedirect, react()],
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
