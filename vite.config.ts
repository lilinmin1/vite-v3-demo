import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()], // 需要用到的插件数组
  resolve: {
    alias: {
      '@': resolve('src')
    }
  },
  base: './', //开发或生产环境服务的公共基础路径
  server: {
    port: 19000, // 开发服务端端口
    open: true,
    cors: true, // 允许跨域
  }
})
