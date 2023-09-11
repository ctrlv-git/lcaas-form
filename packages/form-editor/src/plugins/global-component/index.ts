import type { App } from 'vue';

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
}
