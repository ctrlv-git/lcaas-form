import { h, resolveComponent } from 'vue';
export default {
  default(conf) {
    const {
      default: { type, options, space },
    } = conf.__slot__;
    const tagName = type === 'button' ? 'n-radio-button' : 'n-radio';
    const tag = resolveComponent(tagName);
    const NSpace = resolveComponent('n-space');
    return h(NSpace, space, () => options.map((props) => h(tag, props)));
  },
};
