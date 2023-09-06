export const refLeftDraggable = Symbol('leftDraggable');
export const refCenterDraggable = Symbol('centerDraggable');

export async function genLeftPanelOptions() {
  return await import('./leftconfig.json').then((res) => res.default);
}

const widgetsModule: any = import.meta.glob('./widgets/*.json', { eager: true });
const widgetsConfig = {};

Object.keys(widgetsModule).forEach((key) => {
  const mod = widgetsModule[key].default || {};
  Object.assign(widgetsConfig, mod);
});
export function genWidgetOptions(key) {
  return widgetsConfig[key];
}
