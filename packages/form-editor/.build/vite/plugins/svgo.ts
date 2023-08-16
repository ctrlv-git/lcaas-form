import VueSvgo from '@ctrlc/vite-plugin-vue-svgo';
import { resolve } from 'node:path';

export function SvgoSprite() {
  return VueSvgo({
    path: resolve('src/svg-icon'),
  });
}
