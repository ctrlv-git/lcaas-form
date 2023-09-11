import type { App } from 'vue';
import { vicons as ionicons5 } from '@/config';

const globalComponent = {};
const componentModule: any = import.meta.glob('@/components/global/*.vue', { eager: true });

Object.keys(componentModule).forEach((key) => {
  const mod = componentModule[key].default || {};
  globalComponent[mod.name] = mod;
});
console.log(globalComponent);

export function setupGlobalComponent(app: App) {
  Object.keys(globalComponent).forEach((name) => {
    app.component(name, globalComponent[name]);
  });

  Object.values(ionicons5).map((vicon) => {
    app.component(vicon.name, vicon);
  });
}
