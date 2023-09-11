import { h, resolveComponent } from 'vue';

export default {
  prefix(conf, key) {
    const tag = resolveComponent('NIcon');
    const icon: any = resolveComponent(conf.__slot__[key]);
    return h(tag, { component: icon });
  },
  suffix(conf, key) {
    const icon = resolveComponent('NIcon');
    return h(icon, { component: resolveComponent(conf.__slot__[key]) });
  },
};
