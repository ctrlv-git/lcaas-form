<template>
  <n-form ref="formRef" v-bind="fromGlobal" :model="formValue" :rules="formRules">
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
  </n-form>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import { defineComponent, computed, watch, ref, unref } from 'vue';
import FormItem, { FormItemConf } from './form-item/index';

const fromGridAttr = [
  'cols',
  'collapsed',
  'collapsedRows',
  'layoutShiftDisabled',
  'responsive',
  'itemResponsive',
  'xGap',
  'yGap',
] as const;

const fromGlobalAttr = [
  'disabled',
  'inline',
  'labelWidth',
  'labelAlign',
  'labelPlacement',
  'showFeedback',
  'showLabel',
  'showRequireMark',
  'requireMarkPlacement',
  'size',
] as const;

type FromGridKey = (typeof fromGridAttr)[number];
type FromGlobalKey = (typeof fromGlobalAttr)[number];

type FormConfig = {
  fromGrid: Record<FromGridKey, any>;
  fromGlobal: Record<FromGlobalKey, any>;
  items: FormItemConf[];
};

export default defineComponent({
  name: 'LcForm',
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
      const { fromGrid } = props.conf;
      const obj = {};
      fromGridAttr.forEach((attr) => {
        if (Object.hasOwn(fromGrid, attr)) {
          obj[attr] = fromGrid[attr];
        }
      });
      return obj;
    });

    const fromGlobal = computed(() => {
      return props.conf.fromGlobal;
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
      fromGlobal,
      formValue,
      formRules,
      bindUpdate,
    };
  },
});
</script>
