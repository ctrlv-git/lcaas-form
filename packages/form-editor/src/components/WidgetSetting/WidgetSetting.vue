<template>
  <n-form class="widget-setting" :model="props.widget">
    <n-collapse default-expanded-names="rulesConfig" accordion>
      <n-collapse-item title="基础属性" name="commonConfig">
        <WidgetItem v-for="field in commonConfig" :key="field.label" :field="field" :model="props.widget"></WidgetItem>
      </n-collapse-item>
      <n-collapse-item title="高级属性" name="extendConfig">
        <WidgetItem v-for="field in extendConfig" :key="field.label" :field="field" :model="props.widget"></WidgetItem>
      </n-collapse-item>
      <n-collapse-item title="校验规则" name="rulesConfig">
        <WidgetItem v-for="field in rulesConfig" :key="field.label" :field="field" :model="props.widget"></WidgetItem>
      </n-collapse-item>
    </n-collapse>
    {{ widget }}
  </n-form>
</template>

<script setup lang="ts" name="WidgetSetting">
import { fieldsConfig } from '@/config';
import WidgetItem from './WidgetItem';

export interface Props {
  widget: FormItem;
}
const props = withDefaults(defineProps<Props>(), {
  widget: undefined,
});
const { common: commonConfig, rules: rulesConfig } = fieldsConfig;

const extendConfig = computed(() => {
  const { tagType } = props.widget;
  return fieldsConfig[tagType];
});
</script>

<style lang="scss" scoped></style>
