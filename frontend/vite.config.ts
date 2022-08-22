import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import Inspect from 'vite-plugin-inspect';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      exclude: /\.stories\.(t|j)sx?$/,
      include: '**/*.tsx',
    }),
    tsconfigPaths(),
    ,
    svgr(),
    Inspect(),
  ],
  build: {
    sourcemap: true,
    outDir: 'build',
  },
});
