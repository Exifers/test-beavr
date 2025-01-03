import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';

export default defineConfig({
  server: {
    port: 3000
  },
  plugins: [
    // eslint-disable-next-line new-cap
    ...VitePluginNode({
      adapter: 'fastify',
      appPath: './src/index.ts',
      exportName: 'server',
      tsCompiler: 'esbuild',
    })
  ],
  build: {
    target: 'esnext'
  }
});
