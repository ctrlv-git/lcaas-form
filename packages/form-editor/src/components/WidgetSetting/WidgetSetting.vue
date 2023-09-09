<template>
  <n-form class="widget-setting" :model="props.widget">
    <n-collapse default-expanded-names="1" accordion>
      <n-collapse-item title="基础属性" name="1">
        <WidgetItem v-for="field in common" :key="field.label" :field="field" :model="props.widget"></WidgetItem>
      </n-collapse-item>
      <n-collapse-item title="高级属性" name="2">
        <div>Java</div>
      </n-collapse-item>
      <n-collapse-item title="校验规则" name="3">
        <div>Java</div>
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
const { common } = fieldsConfig;
</script>

<style lang="scss" scoped></style>
