import VueScriptExtend from '@ctrlc/vite-plugin-vue-setup-extend';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { visualizer } from 'rollup-plugin-visualizer';
import type { PluginOption } from 'vite';
//
import { AutoComponents } from './autoComponents';
import { AutoImportPlugin } from './autoImport';
import { ConfigCompressPlugin } from './compress';
import { ConfigHtmlPlugin } from './html';
import { SplitVendorChunkPlugin } from './manualChunks';
import { SvgoSprite } from './svgo';

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const {
    VITE_BUILD_ANALYZER,
    VITE_BUILD_COMPRESS,
    VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE,
    VITE_BUILD_CHUNKS,
    VITE_BUILD_OUTPUT_DIR,
  } = viteEnv;

  const vitePlugins: PluginOption[] = [
    vue(),
    vueJsx(),
    VueScriptExtend(),
    AutoImportPlugin(),
    AutoComponents(),
    ConfigHtmlPlugin(viteEnv, isBuild),
    SplitVendorChunkPlugin(viteEnv, isBuild),
    SvgoSprite(),
  ];

  if (VITE_BUILD_ANALYZER) {
    vitePlugins.push(visualizer({ filename: 'visualizer.html', emitFile: true, projectRoot: VITE_BUILD_OUTPUT_DIR }));
  }

  if (VITE_BUILD_CHUNKS) {
    vitePlugins.push(SplitVendorChunkPlugin(viteEnv, isBuild));
  }

  if (isBuild) {
    vitePlugins.push(...ConfigCompressPlugin(VITE_BUILD_COMPRESS, VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE));
  }

  return vitePlugins;
}
