import { defineComponent, h, mergeProps, resolveComponent, PropType } from 'vue';
import { componenSlots } from './slots';

function buildSlot(conf, componenProps) {
  const { tag, __slot__ } = conf;
  const childObjs = componenSlots[tag];
  const childrenSlot = {};

  if (tag === 'n-input-group') {
    return () => childObjs.default(conf, componenProps);
  }

  if (childObjs) {
    if (childObjs.default && __slot__.default) {
      childrenSlot['default'] = () => childObjs.default(conf, componenProps);
    }
    Object.keys(childObjs).forEach((key) => {
      const childFunc = childObjs[key];
      if (__slot__ && __slot__[key]) {
        childrenSlot[key] = () => childFunc(conf, key);
      }
    });
  }
  return childrenSlot;
}

export interface FormItemConf {
  label: string;
  tag: string;
  icon: string;
  __uuid__: string;
  __vModel__: string;
  __layout__: Record<string, unknown>;
  __config__: Record<string, unknown>;
  __slot__: Record<string, unknown>;
}

export default defineComponent({
  name: 'LcFormItem',
  props: {
    value: {
      type: [String, Number, Object, Boolean],
      required: false,
      default: undefined,
    },
    conf: {
      type: Object as PropType<FormItemConf>,
      required: true,
    },
  },
  emits: ['update:value'],
  setup(props, { attrs, emit }) {
    // 返回渲染函数
    return () => {
      const { __config__, tag } = props.conf || {};

      const componen = resolveComponent(tag);

      const componenProps = mergeProps(
        {
          value: props.value,
          'onUpdate:value': (val) => {
            emit('update:value', val);
          },
        },
        __config__,
        attrs,
      );

      const componenSlot = buildSlot(props.conf, componenProps) as any;

      return h(componen, componenProps, componenSlot);
    };
  },
});
