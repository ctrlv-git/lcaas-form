import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'node:path';
import type { UserConfig } from 'vite';

export default (): UserConfig => {
  return {
    publicDir: 'types',
    resolve: {
      alias: [
        {
          find: '@',
          replacement: resolve('src'),
        },
      ],
      dedupe: ['vue'],
    },
    build: {
      lib: {
        entry: resolve(__dirname, 'src/main.ts'),
        name: 'LcFormRender',
        fileName: 'index',
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue',
          },
        },
      },
    },
    plugins: [vue(), vueJsx()],
  };
};
