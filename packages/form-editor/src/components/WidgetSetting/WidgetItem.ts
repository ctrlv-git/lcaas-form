import { h, resolveComponent } from 'vue';

// 插槽函数
const genSlot = {
  RadioGroup(conf) {
    const { type, options, space: spaceProps } = conf;
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

export default defineComponent({
  name: 'WidgetItem',
  props: {
    field: {
      type: Object as PropType<Record<string, any>>,
      default: () => ({}),
    },
    model: {
      type: Object as PropType<FormItem>,
      default: () => ({}),
    },
  },
  setup(props) {
    const FormItem = resolveComponent('n-form-item');
    const getFieldValue = (path: string) => {
      const { model } = props;
      if (path.includes('.')) {
        const attrs = path.split('.');
        const data = attrs.reduce((previous, current) => {
          return previous?.[current];
        }, model);
        return data;
      } else {
        return props?.model?.[path];
      }
    };

    const setFieldValue = (path, val) => {
      const { model } = toRefs(props);

      if (path.includes('.')) {
        const attrs = path.split('.');

        const [attr, ...property] = attrs.reverse();
        const data = property.reverse().reduce((previous, current) => {
          return previous[current];
        }, model.value);

        data[attr] = val;
      } else {
        if (model && model.value) {
          model.value[path] = val;
        }
      }
    };
    return {
      FormItem,
      getFieldValue,
      setFieldValue,
    };
  },
  render(setup) {
    const { FormItem, getFieldValue, setFieldValue, field } = setup;
    const fieldTag = resolveComponent(field.component) as any;
    const slot = genSlot[fieldTag.name] && genSlot[fieldTag.name](field.slot);

    return h(
      FormItem,
      {
        label: field.label,
        path: field.path,
      },
      () =>
        h(
          fieldTag,
          {
            ...field.props,
            value: getFieldValue(field.path),
            'onUpdate:value': (val) => {
              Object.values(field.emits || '').forEach((fn: any) => {
                fn(setup.model, val);
              });
              setFieldValue(field.path, val);
            },
          },
          () => slot,
        ),
    );
  },
});
