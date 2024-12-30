import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import Unocss from 'unocss/vite';
import path from 'path';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    react(),
    Unocss(),
  ],
})
