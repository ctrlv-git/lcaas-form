import { h, resolveComponent } from 'vue';

const renderIcon = (conf, key) => {
  const tag = resolveComponent('NIcon');
  const icon: any = resolveComponent(conf.__slot__[key]);
  return h(tag, { component: icon });
};

export default {
  prefix(conf, key) {
    return renderIcon(conf, key);
  },
  suffix(conf, key) {
    return renderIcon(conf, key);
  },
};
