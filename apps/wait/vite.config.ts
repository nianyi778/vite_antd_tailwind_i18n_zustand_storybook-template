import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import versionInjectorPlugin from 'unplugin-version-injector/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    versionInjectorPlugin(),
    react(),
    legacy({
      targets: ['defaults', 'Android >= 8'],
    }),
  ],
  server: {
    port: 5177, // 👈 你想要的端口
    host: true, // 允许局域网访问
    open: true, // 启动后自动打开浏览器
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
