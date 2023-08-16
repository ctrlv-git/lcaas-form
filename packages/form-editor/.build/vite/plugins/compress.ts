import type { Plugin } from 'vite';
import compressPlugin from 'vite-plugin-compression';
/**
 * @name ConfigCompressPlugin
 * @description 服务器压缩
 * Used to package and output gzip. Note that this does not work properly in Vite, the specific reason is still being investigated
 * https://github.com/anncwb/vite-plugin-compression
 */
type Algorithm = 'gzip' | 'brotliCompress' | 'deflate' | 'deflateRaw';

export function ConfigCompressPlugin(algorithm: string, deleteOriginFile = false): Plugin[] {
  const compressList: Algorithm[] = algorithm.split(',') as any;

  const plugins: Plugin[] = [];

  if (compressList.includes('gzip')) {
    plugins.push(
      compressPlugin({
        ext: '.gz',
        deleteOriginFile,
      }),
    );
  }
  if (compressList.includes('brotliCompress')) {
    plugins.push(
      compressPlugin({
        ext: '.br',
        algorithm: 'brotliCompress',
        deleteOriginFile,
      }),
    );
  }
  return plugins;
}
