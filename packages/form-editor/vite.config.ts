import { resolve } from 'node:path';
import type { ConfigEnv, UserConfig } from 'vite';
import { loadEnv } from 'vite';

import { wrapperEnv } from './.build/utils';
import { createProxy, createVitePlugins } from './.build/vite';

import pkg from './package.json';
const { dependencies, devDependencies, name, version } = pkg;
const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: Date.now(),
};

export default ({ command, mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, __dirname);
  const viteEnv = wrapperEnv(env);

  const { VITE_BUILD_PUBLIC_PATH, VITE_BUILD_PORT, VITE_BUILD_PROXY, VITE_BUILD_OUTPUT_DIR } = viteEnv;

  const isBuild = command === 'build';
  return {
    cacheDir: '_cache_vite',
    base: VITE_BUILD_PUBLIC_PATH,
    server: {
      host: true,
      port: VITE_BUILD_PORT,
      proxy: createProxy(VITE_BUILD_PROXY),
    },
    plugins: createVitePlugins(viteEnv, isBuild),
    resolve: {
      alias: [
        {
          find: '@',
          replacement: resolve('src'),
        },
      ],
      dedupe: ['vue'],
    },
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    },
    build: {
      target: 'esnext',
      cssTarget: 'chrome80',
      outDir: VITE_BUILD_OUTPUT_DIR,
      reportCompressedSize: false,
      chunkSizeWarningLimit: 2048,
    },
  };
};
