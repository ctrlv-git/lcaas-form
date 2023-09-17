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
  CheckboxGroup(conf) {
    const { options, space: spaceProps } = conf;
    const tag = resolveComponent('n-checkbox');
    const NSpace = resolveComponent('n-space');
    return h(NSpace, spaceProps, () => options.map((props) => h(tag, props)));
  },
};
// 修复控件配置值对渲染器的bug
function parseWidgetValue(val) {
  if (['true', 'false'].includes(val)) {
    return JSON.parse(val);
  }
  // 待验证复选框设置可选数量时需将 null 转化为 undefined
  return val ?? undefined;
}
export default defineComponent({
  name: 'WidgetItem',
  props: {
    field: {
      type: Object as PropType<Record<string, any>>,
      default: () => ({}),
    },
    fields: {
      type: Object as PropType<Record<string, any>[]>,
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
      const setValue = parseWidgetValue(val);

      const { model } = toRefs(props);

      if (path.includes('.')) {
        const attrs = path.split('.');

        const [attr, ...property] = attrs.reverse();
        const data = property.reverse().reduce((previous, current) => {
          return previous[current];
        }, model.value);

        data[attr] = setValue;
      } else {
        if (model && model.value) {
          model.value[path] = setValue;
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
        labelStyle:
          field.label.length > 5
            ? {
                fontSize: '12px',
              }
            : {},
      },
      () =>
        h(
          fieldTag,
          {
            ...field.props,
            value: getFieldValue(field.path),
            'onUpdate:checked': (val) => {
              // 复选框
              Object.values(field.emits || '').forEach((fn: any) => {
                fn(val, setup.model, setup.fields);
              });
              setFieldValue(field.path, val);
            },
            'onUpdate:value': (val) => {
              Object.values(field.emits || '').forEach((fn: any) => {
                fn(val, setup.model, setup.fields);
              });
              setFieldValue(field.path, val);
            },
          },
          () => slot,
        ),
    );
  },
});
