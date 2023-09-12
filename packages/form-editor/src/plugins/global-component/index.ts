import type { App } from 'vue';
import { vicons } from '@/config';

const globalComponent = {};
const componentModule: any = import.meta.glob('@/components/global/*.vue', { eager: true });

Object.keys(componentModule).forEach((key) => {
  const mod = componentModule[key].default || {};
  globalComponent[mod.name] = mod;
});

export function setupGlobalComponent(app: App) {
  Object.keys(globalComponent).forEach((name) => {
    app.component(name, globalComponent[name]);
  });

  Object.values(vicons).map((vicon) => {
    app.component(vicon.name, vicon);
  });
}
