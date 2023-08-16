import type { App } from 'vue';
import { registerSvgo } from 'virtual:@ctrlc-svgo-sprite';

export function setupSvgo(app: App) {
  registerSvgo(app);
}
