import { splitVendorChunkPlugin } from 'vite';
type Plugin = ReturnType<typeof splitVendorChunkPlugin>;

export function SplitVendorChunkPlugin(env: ViteEnv, isBuild: boolean): Plugin {
  return splitVendorChunkPlugin();
}
