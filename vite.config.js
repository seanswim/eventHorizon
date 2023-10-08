import { defineConfig } from "vite";
import path from 'path'
import { viteStaticCopy } from 'vite-plugin-static-copy'

console.log(path.resolve(__dirname, './dist'))

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: '/eventHorizon/',
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: path.resolve(__dirname, './src/assets'),
          dest: './src'
        }
      ]
    })
  ]
});

