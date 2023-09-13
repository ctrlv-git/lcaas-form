import { h, resolveComponent } from 'vue';

const renderIcon = (conf, key) => {
  const iconName = conf.__slot__[key];
  const ICON = resolveComponent('NIcon');
  const component: any = resolveComponent(iconName);
  return h(ICON, { component });
};

export default {
  prefix(conf, key) {
    return renderIcon(conf, key);
  },
  suffix(conf, key) {
    return renderIcon(conf, key);
  },
  'add-icon'(conf, key) {
    return renderIcon(conf, key);
  },
  'minu-icon'(conf, key) {
    return renderIcon(conf, key);
  },
};
