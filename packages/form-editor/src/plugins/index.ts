import type { App } from 'vue';
import { setupNaiveUi } from './naive-ui';
import { setupDirectives } from './directives';
import { setupSvgo } from './svgo';

export function setPlugins(app: App) {
  setupNaiveUi(app);
  setupDirectives(app);
  setupSvgo(app);
}
