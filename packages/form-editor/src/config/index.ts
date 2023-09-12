import { parsePath } from '@/utils';

export * from './defaultFrom';

export * as vicons from '@vicons/ionicons4';

export const refLeftDraggable = Symbol('leftDraggable');
export const refCenterDraggable = Symbol('centerDraggable');

const leftConfigMapping = {
  'input-type': {
    title: '输入型组件',
    list: [],
  },
  'select-type': {
    title: '选择型组件',
    list: [],
  },
};

// 表单控件默认配置
const renderModule: any = import.meta.glob('./render/*.json', { eager: true });
const renderConfig = {};
Object.keys(renderModule).forEach((key) => {
  const { name } = parsePath(key);
  const mod = renderModule[key].default || {};

  const list = Object.keys(mod).map((m) => ({
    text: mod[m].label,
    icon: mod[m].tagType,
  }));

  leftConfigMapping[name].list = list;

  Object.assign(renderConfig, mod);
});

export { renderConfig };
// 左侧面板
export async function genLeftPanelConfig() {
  return Object.values(leftConfigMapping);
}
// 获取控件默认配置
export function genWidgetOptions(key) {
  return renderConfig[key];
}

/* ******表单控件属性编辑配置****** */
const fieldsModule: any = import.meta.glob('./fields/*.json', { eager: true });
const fieldsConfig: Record<string, any> = {};
Object.keys(fieldsModule).forEach((key) => {
  const mod = fieldsModule[key].default || {};
  Object.assign(fieldsConfig, mod);
});
export { fieldsConfig };
