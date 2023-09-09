import type { App } from 'vue';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { registerSvgo } from 'virtual:@ctrlc-svgo-sprite';

export function setupSvgo(app: App) {
  registerSvgo(app);
}
