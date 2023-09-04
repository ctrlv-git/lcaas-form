<template>
  <form ref="formRef">
    <n-grid v-bind="fromGrid">
      <n-form-item-gi
        v-for="element in conf.items"
        :key="element.__uuid__"
        v-bind="element.__layout__"
        :label="element.label"
      >
        <form-item v-model:value="formValue[element.__vModel__]" :conf="element" @update:value="bindUpdate"></form-item>
      </n-form-item-gi>
    </n-grid>
  </form>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import { defineComponent, computed, watch, ref, unref } from 'vue';
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
export default defineComponent({
  name: 'YFormRender',
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
  emits: ['update:value'],
  setup(props, { emit }) {
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
      return obj;
    });
    watch(
      () => props.value,
      (val) => {
        formValue.value = val;
      },
    );
    const bindUpdate = () => {
      emit('update:value', unref(formValue));
    };
    return {
      formRef,
      fromGrid,
      formValue,
      formRules,
      bindUpdate,
    };
  },
});
</script>
