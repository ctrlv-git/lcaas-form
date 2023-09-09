<template>
  <div class="right-tab">
    <n-tabs v-model:value="currentTab" justify-content="space-evenly" type="line">
      <n-tab v-for="(item, key) in tabMap" :key="key" :name="key">{{ item }}</n-tab>
    </n-tabs>
  </div>
  <n-scrollbar class="app-panel">
    <div class="right-content">
      <template v-if="currentTab === 'widget'">
        <div v-if="widget">
          {{ form.items.length }}
          <br />
        </div>
        <n-empty v-else size="huge" description="未选择控件"></n-empty>
      </template>
      <template v-if="currentTab === 'form'">
        <n-form-item label="表单名称" label-placement="left">
          <n-input v-model:value="formRef.name" />
        </n-form-item>
        <n-form-item label="表单尺寸" label-placement="left">
          <n-radio-group v-model:value="formRef.fromGlobal.size" name="radiobuttongroup1">
            <n-radio-button v-for="size in sizesEnum" :key="size.value" :value="size.value" :label="size.label" />
          </n-radio-group>
        </n-form-item>
        <n-form-item label="标签位置" label-placement="left">
          <n-radio-group v-model:value="formRef.fromGlobal.labelPlacement" name="radiobuttongroup1">
            <n-radio-button
              v-for="size in labelPlacementEnum"
              :key="size.value"
              :value="size.value"
              :label="size.label"
            />
          </n-radio-group>
        </n-form-item>
        <n-form-item label="标签对齐" label-placement="left">
          <n-radio-group v-model:value="formRef.fromGlobal.labelAlign" name="radiobuttongroup1">
            <n-radio-button v-for="size in labelAlignEnum" :key="size.value" :value="size.value" :label="size.label" />
          </n-radio-group>
        </n-form-item>
        <n-form-item label="标签宽度" label-placement="left">
          <n-input-group>
            <n-input v-model:value="labelWidth" :allow-input="onlyAllowNumber" />
            <n-select v-model:value="labelWidthUnit" :style="{ width: '10em' }" :options="pixelOptions" />
          </n-input-group>
        </n-form-item>
        <n-form-item label="栅格间隔" label-placement="left">
          <n-input-number v-model:value="gap" button-placement="both" :precision="0" step="1" max="999" />
        </n-form-item>
      </template>
    </div>
  </n-scrollbar>
</template>

<script setup lang="ts" name="RightPanel">
import type { FormDesigner } from '@/hooks/useDesigner';
import { sizesEnum, labelPlacementEnum, labelAlignEnum, pixelEnum } from '@/config/enum';
import { onlyAllowNumber } from '@/utils';

export interface Props {
  designer: FormDesigner;
  form: FormConfig;
  widget?: FormItem;
}
const props = withDefaults(defineProps<Props>(), {
  designer: undefined,
  widget: undefined,
});
// 配置信息 tabs
const tabMap = {
  widget: '组件属性',
  form: '表单属性',
};
const currentTab = ref<keyof typeof tabMap>('form');
const pixelOptions = pixelEnum.map((key) => ({ label: key, value: key }));
//
const { form: formRef, widget: widgetRef } = toRefs(props);
// watch([props.widget, props.form], ([widgetVal, formVal]) => {
//   widgetRef.value = widgetVal as FormItem;
//   formRef.value = formVal as FormConfig;
// });
// 标签宽度
const labelWidth = computed({
  get() {
    const { labelWidth = '' } = props.form.fromGlobal;
    return ('' + labelWidth).replaceAll(/[a-zA-Z]*/g, '');
  },
  set(val) {
    const { fromGlobal } = toRefs(props.form);
    fromGlobal.value.labelWidth = val ? `${val}${labelWidthUnit.value}` : '';
  },
});
const labelWidthUnit = computed({
  get() {
    const { labelWidth = '' } = props.form.fromGlobal;
    return ('' + labelWidth).replaceAll(/[0-9]*/g, '') || 'px';
  },
  set(val) {
    const { fromGlobal } = toRefs(props.form);
    fromGlobal.value.labelWidth = labelWidth.value ? `${labelWidth.value}${val}` : '';
  },
});

// 栅格设置
const gap = computed({
  get() {
    return props.form.fromGrid.xGap as number;
  },
  set(val) {
    const { fromGrid } = toRefs(props.form);
    fromGrid.value.xGap = fromGrid.value.yGap = val;
  },
});

console.log(JSON.stringify({ a: undefined, b: null }));
</script>

<style lang="scss" scoped>
$halfHeight: calc(var(--height-mini) / 2);
$halfHeightMin: calc(var(--height-mini) / 4);

.right-tab {
  box-sizing: border-box;
  height: 42px;
  line-height: 42px;
  padding: 0 16px;
  border-bottom: 1px solid var(--divider-color);
}
.right-content {
  padding: var(--height-mini);
  .n-empty {
    margin-top: 25vh;
  }
}
</style>
