import AutoImport from 'unplugin-auto-import/vite';
/**
 * @name AutoImportDeps
 * @description 按需加载，自动引入
 */
export const AutoImportPlugin = () => {
  return AutoImport({
    dts: 'types/auto-imports.d.ts',
    exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]form-render[\\/]/],
    imports: ['vue', 'pinia', 'vue-router'],
    eslintrc: {
      enabled: true,
      filepath: './.eslintrc-auto-import.json',
    },
  });
};
