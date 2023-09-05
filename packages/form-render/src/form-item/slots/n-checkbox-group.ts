import { h, resolveComponent } from 'vue';
export default {
  default(conf) {
    const {
      default: { options, space },
    } = conf.__slot__;
    const tag = resolveComponent('n-checkbox');
    const NSpace = resolveComponent('n-space');
    return h(NSpace, space, () => options.map((props) => h(tag, props)));
  },
};
