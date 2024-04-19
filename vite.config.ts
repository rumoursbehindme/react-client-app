import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    base: '/',
    plugins: [react(), viteTsConfigPaths()],
    server: {
        open: true,
        port: 3000,
        proxy: {
            '/api':'http://localhost:8080'
            // '/api':{
            //     target: 'http://localhost:8080',
            //     changeOrigin: true,
            //     rewrite: (path) => path.replace(/^\/api/, '')
            // }
        }
    }
});