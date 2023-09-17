<template>
  <div class="right-tab">
    <n-tabs v-model:value="currentTab" justify-content="space-evenly" type="line">
      <n-tab v-for="(item, key) in tabMap" :key="key" :name="key">{{ item }}</n-tab>
    </n-tabs>
  </div>
  <n-scrollbar class="app-panel">
    <div class="right-content">
      <template v-if="currentTab === 'widget'">
        <WidgetSetting v-if="widgetRef" :key="widgetRef.__uuid__" v-model:widget="widgetRef"></WidgetSetting>
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
          <InputUnit v-model:value="formRef.fromGlobal.labelWidth" :options="pixelOptions"></InputUnit>
        </n-form-item>
        <n-form-item label="栅格间隔" label-placement="left">
          <n-input-number v-model:value="gap" button-placement="both" :precision="0" step="1" max="999" />
        </n-form-item>
        <n-form-item label="星号位置" label-placement="left">
          <n-radio-group v-model:value="formRef.fromGlobal.requireMarkPlacement" name="radiobuttongroup1">
            <n-radio-button
              v-for="size in markPlacementEnum"
              :key="size.value"
              :value="size.value"
              :label="size.label"
            />
          </n-radio-group>
        </n-form-item>
      </template>
    </div>
  </n-scrollbar>
</template>

<script setup lang="ts" name="RightPanel">
import type { FormDesigner } from '@/hooks/useDesigner';
import { sizesEnum, labelPlacementEnum, labelAlignEnum, markPlacementEnum, pixelEnum } from '@/config/enum';
import WidgetSetting from './WidgetSetting/WidgetSetting.vue';
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
const currentTab = ref<keyof typeof tabMap>('widget');

//
const { form: formRef, widget: widgetRef } = toRefs(props);

// 标签宽度
const pixelOptions = pixelEnum.map((key) => ({ label: key, value: key }));
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
</script>

<style lang="scss" scoped>
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
