import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
/**
 * @name AutoImportDeps
 * @description 按需加载，自动引入
 */
export const AutoComponents = () => {
  return Components({
    dts: 'types/auto-components.d.ts',
    resolvers: [NaiveUiResolver()],
  });
};
