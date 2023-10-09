import type { App, DefineComponent } from 'vue';
export { default as LcForm } from './render.vue';
export { default as LcFormItem } from './form-item/index.ts';
export { parseRules } from './utils/utils.ts';

const globalComponent = {};
const componentModule: any = import.meta.glob('@/components/global/*.vue', { eager: true });

Object.keys(componentModule).forEach((key) => {
  const mod = componentModule[key].default || {};
  globalComponent[mod.name] = mod;
});

export function useRegister(app: App, components?: DefineComponent[]) {
  if (components) {
    components.forEach((component) => {
      app.component(component.name, component);
    });
  } else {
    Object.keys(globalComponent).forEach((name) => {
      app.component(name, globalComponent[name]);
    });
  }
}
