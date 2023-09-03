import { parsePath } from '@/utils/utils';
import { h, resolveComponent, ConcreteComponent } from 'vue';

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

export default {
  name: 'FormItem',
  props: {
    conf: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { __config__, tag } = props.conf;
    const componenSlot = buildSlot(props.conf) || [];
    const componen = resolveComponent(tag) as ConcreteComponent;
    // 返回渲染函数
    return () => h(componen, { ...__config__ }, componenSlot);
  },
};
