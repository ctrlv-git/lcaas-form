import type { PluginOption } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

/**
 * Plugin to minimize and use ejs template syntax in index.html.
 * https://github.com/anncwb/vite-plugin-html
 */
export function ConfigHtmlPlugin(env: ViteEnv, isBuild: boolean) {
  const { VITE_APP_TITLE } = env;

  const htmlPlugin: PluginOption[] = createHtmlPlugin({
    minify: isBuild,
    inject: {
      data: {
        title: VITE_APP_TITLE,
      },
    },
  });
  return htmlPlugin;
}
