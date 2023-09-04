import { parsePath } from '@/utils/utils';
import { defineComponent, h, mergeProps, resolveComponent } from 'vue';

const componentChild = {};

const slotsFiles: any = import.meta.glob('./slots/*.ts', { eager: true });
Object.keys(slotsFiles).forEach((key) => {
  const slots = slotsFiles[key].default || {};
  const { name } = parsePath(key);
  componentChild[name] = slots;
});

function buildSlot(conf) {
  const { tag, __slot__ } = conf;
  const childObjs = componentChild[tag];
  const childrenSlot = {};
  if (childObjs) {
    Object.keys(childObjs).forEach((key) => {
      const childFunc = childObjs[key];
      if (conf.__slot__ && conf.__slot__[key]) {
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
  __layout__: any;
  __config__: any;
  __slot__: any;
}

export default defineComponent({
  name: 'YFormItem',
  props: {
    value: {
      type: [String, Number, Object],
      required: false,
      default: undefined,
    },
    conf: {
      type: Object,
      required: true,
    },
  },
  emits: ['update:value'],
  setup(props, { attrs, emit }) {
    const { __config__, tag } = props.conf;
    // 返回渲染函数
    return () => {
      const componenSlot = buildSlot(props.conf) as any;

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

      return h(componen, componenProps, componenSlot);
    };
  },
});
