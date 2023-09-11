import { h, resolveComponent } from 'vue';

export default {
  default(conf, componenProps) {
    const { default: iconfix, preLabel, sufLabel } = conf.__slot__;
    const INPUT = resolveComponent('n-input');
    const INPUTLabel = resolveComponent('n-input-group-label');
    const ICON = resolveComponent('NIcon');

    const inputSlot: any = {};
    Object.keys(iconfix).forEach((key) => {
      const iconName = iconfix[key];
      if (iconName) {
        const component: any = resolveComponent(iconName);
        inputSlot[key] = () => h(ICON, { component });
      }
    });

    const childrens = [h(INPUT, componenProps, inputSlot)];
    if (preLabel) {
      childrens.unshift(h(INPUTLabel, () => preLabel));
    }
    if (sufLabel) {
      childrens.push(h(INPUTLabel, () => sufLabel));
    }

    return childrens;
  },
};
