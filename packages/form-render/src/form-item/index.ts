import { PropType, defineComponent, h, mergeProps, resolveComponent } from 'vue';
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
// 处理控件事件
function parseProps(currentProps, conf: FormItemConf, { props, emit }) {
  const { tagType, __config__, __emits__ = {} } = conf;

  if (['Date', 'Time'].includes(tagType)) {
    //
    if (__config__.valueFormat) {
      currentProps['value-format'] = props.value;
      currentProps['onUpdate:formatted-value'] = (val) => {
        currentProps['value-format'] = val;
        emit('update:value', val);
        parseEmits(__emits__, val, props);
      };
      return currentProps;
    }
  }

  // 默认
  currentProps.value = props.value;
  currentProps['onUpdate:value'] = (val) => {
    currentProps.value = val;
    emit('update:value', val);
    parseEmits(__emits__, val, props);
  };
  return currentProps;
}
function parseEmits(emits: any = '', val: any, props: any) {
  const formData = props.model;
  Object.values(emits).forEach((callback: any) => {
    callback(val, formData);
  });
}
export interface FormItemConf {
  __uuid__: string;
  __vModel__: string;
  label: string;
  tag: string;
  tagType: string;
  __layout__: Record<string, unknown>;
  __config__: Record<string, unknown>;
  __slot__: Record<string, unknown>;
  __rules__: Record<string, unknown>[];
  __emits__: Record<string, unknown>;
}

export default defineComponent({
  name: 'LcFormItem',
  props: {
    value: {
      type: [String, Number, Object, Boolean],
      required: false,
      default: undefined,
    },
    model: {
      type: Object as PropType<any>,
      required: false,
    },
    conf: {
      type: Object as PropType<FormItemConf>,
      required: true,
    },
  },
  emits: ['update:value'],
  setup(props, { attrs, slots, emit }) {
    // 返回渲染函数
    return () => {
      const { __config__, tag, tagType } = props.conf || {};

      if (tagType.toLocaleLowerCase() === 'custom') {
        const slot = slots[tag];
        return slot && h(slot, { value: props.value });
      } else {
        const componen = resolveComponent(tag);

        let componenProps = mergeProps(__config__, attrs);
        componenProps = parseProps(componenProps, props.conf, { props, emit });

        const componenSlot = buildSlot(props.conf, componenProps) as any;

        return h(componen, componenProps, componenSlot);
      }
    };
  },
});
