<template>
  <n-form ref="formRef" :model="formValue" :rules="formRules">
    <n-grid v-bind="fromGrid">
      <n-form-item-gi
        v-for="element in conf.items"
        :key="element.__uuid__"
        v-bind="element.__layout__"
        :label="element.label"
      >
        <form-item :conf="element" v-model:value="formValue[element.__vModel__]"></form-item>
      </n-form-item-gi>
    </n-grid>
  </n-form>
</template>

<script lang="ts">
import { PropType, ref, computed } from 'vue';
import FormItem from './render/index';

type FormConfig = {
  global: Record<string, any>;
  items: any[];
};
const fromGridAttr = [
  'cols',
  'collapsed',
  'collapsedRows',
  'layoutShiftDisabled',
  'responsive',
  'itemResponsive',
  'xGap',
  'yGap',
];
export default {
  name: 'FormRender',
  components: {
    FormItem,
  },
  props: {
    value: {
      type: Object as PropType<Record<string, any>>,
      required: true,
    },
    conf: {
      type: Object as PropType<FormConfig>,
      required: true,
    },
  },
  setup(props) {
    const formRef = ref();
    const formValue = ref({});
    const formRules = ref({});
    const fromGrid = computed(() => {
      const { global } = props.conf;
      const obj = {};
      fromGridAttr.forEach((attr) => {
        if (Object.hasOwn(global, attr)) {
          obj[attr] = global[attr];
        }
      });
      console.log(obj, 'obj');

      return obj;
    });
    return {
      formRef,
      fromGrid,
      formValue,
      formRules,
    };
  },
};
</script>
