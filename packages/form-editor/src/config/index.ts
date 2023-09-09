export const refLeftDraggable = Symbol('leftDraggable');
export const refCenterDraggable = Symbol('centerDraggable');

export async function genLeftPanelOptions() {
  return await import('./leftConfig.json').then((res) => res.default);
}
//
const widgetsModule: any = import.meta.glob('./widgets/*.json', { eager: true });
const widgetsConfig = {};
Object.keys(widgetsModule).forEach((key) => {
  const mod = widgetsModule[key].default || {};
  Object.assign(widgetsConfig, mod);
});
export { widgetsConfig };
//
const fieldsModule: any = import.meta.glob('./fields/*.json', { eager: true });
const fieldsConfig: Record<string, any> = {};
Object.keys(fieldsModule).forEach((key) => {
  const mod = fieldsModule[key].default || {};
  Object.assign(fieldsConfig, mod);
});
export { fieldsConfig };
//
export function genWidgetOptions(key) {
  return widgetsConfig[key];
}
