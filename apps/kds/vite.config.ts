import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['defaults', 'Android >= 8'],
    }),
  ],
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  ssr: {
    noExternal: ['@elestyle/ui'], // 确保打包时用同一个 React
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, '../../node_modules/react'),
      'react-dom': path.resolve(__dirname, '../../node_modules/react-dom'),
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
