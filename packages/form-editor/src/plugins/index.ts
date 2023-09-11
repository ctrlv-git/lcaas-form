import type { App } from 'vue';
import { setupNaiveUi } from './naive-ui';
import { setupDirectives } from './directives';
import { setupSvgo } from './svgo';
import { setupGlobalComponent } from './global-component';

export function setPlugins(app: App) {
  setupNaiveUi(app);
  setupDirectives(app);
  setupSvgo(app);
  setupGlobalComponent(app);
}
