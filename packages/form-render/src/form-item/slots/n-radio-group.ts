import { h, resolveComponent } from 'vue';
export default {
  default(conf) {
    const {
      default: { type, options, space: spaceProps },
    } = conf.__slot__;
    const isBtnTag = type === 'button';
    const tag = resolveComponent(isBtnTag ? 'n-radio-button' : 'n-radio');
    const NSpace = resolveComponent('n-space');
    if (isBtnTag) {
      return options.map((props) => h(tag, props));
    } else {
      return h(NSpace, spaceProps, () => options.map((props) => h(tag, props)));
    }
  },
};
