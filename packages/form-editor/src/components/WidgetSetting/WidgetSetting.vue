<template>
  <n-form class="widget-setting" :model="props.widget" label-width="5.5rem" label-placement="left" :rules="formRules">
    <n-collapse default-expanded-names="extendConfig">
      <n-collapse-item title="基础属性" name="commonConfig">
        <WidgetItem v-for="field in commonConfig" :key="field.label" :conf="field" :model="props.widget" />
      </n-collapse-item>
      <n-collapse-item title="高级属性" name="extendConfig">
        <WidgetItem v-for="field in extendConfig" :key="field.label" :conf="field" :model="props.widget" />
      </n-collapse-item>
      <n-collapse-item id="elTeleport" title="校验规则" name="rulesConfig">
        <WidgetItem v-for="field in rulesConfig" :key="field.label" :conf="field" :model="props.widget" />
      </n-collapse-item>
    </n-collapse>
  </n-form>
</template>

<script setup lang="ts" name="WidgetSetting">
import { parseRules } from '@lcaas/form-render';
import { fieldsConfig } from '@/config';
import { cloneDeep } from 'lodash-es';
import WidgetItem from './WidgetItem.vue';

export interface Props {
  widget: FormItem;
}

const props = withDefaults(defineProps<Props>(), {
  widget: undefined,
});
const { common: commonConfig, rules: rulesConfig } = fieldsConfig;

const fieldsConfigRef = ref(cloneDeep(fieldsConfig));

const extendConfig = computed(() => {
  const { tagType } = props.widget;
  return unref(fieldsConfigRef)[tagType].filter((field) => {
    return field.hidden ? field.hidden(props.widget) : true;
  });
});

const formRules = computed(() => {
  const rules = parseRules(commonConfig);
  return rules;
});
</script>

<style lang="scss" scoped></style>
