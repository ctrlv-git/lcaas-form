<template>
  <n-form class="widget-setting" :model="props.widget" label-width="6em" label-placement="left" :show-feedback="false">
    <n-collapse default-expanded-names="extendConfig">
      <n-collapse-item title="基础属性" name="commonConfig">
        <WidgetItem v-for="field in commonConfig" :key="field.label" :field="field" :model="props.widget"></WidgetItem>
      </n-collapse-item>
      <n-collapse-item title="高级属性" name="extendConfig">
        <WidgetItem v-for="field in extendConfig" :key="field.label" :field="field" :model="props.widget"></WidgetItem>
      </n-collapse-item>
      <n-collapse-item title="校验规则" name="rulesConfig">
        <WidgetItem v-for="field in rulesConfig" :key="field.label" :field="field" :model="props.widget"></WidgetItem>
        <div v-for="(rule, i) in props.widget.__rules__" :key="i" class="rule-item">
          <n-button class="rule-delete" text @click="() => bindRemoveRule(i)">
            <n-icon size="18" :component="MdCloseCircleOutline"></n-icon>
          </n-button>
          <n-form-item label="表达式" label-width="5em">
            <n-select
              v-model:value="rule.pattern"
              :options="patternEnum"
              filterable
              tag
              clearable
              placeholder="可输入正则，如：/\\d+/"
            />
          </n-form-item>
          <n-form-item label="错误提示" label-width="5em">
            <n-input v-model:value="rule.message" clearable />
          </n-form-item>
        </div>
        <div>
          <n-button text class="rule-btn" type="info" @click="bindAddRule">
            <template #icon>
              <n-icon :component="MdAddCircleOutline"></n-icon>
            </template>
            <span>添加规则</span>
          </n-button>
        </div>
      </n-collapse-item>
    </n-collapse>
  </n-form>
</template>

<script setup lang="ts" name="WidgetSetting">
import { MdAddCircleOutline, MdCloseCircleOutline } from '@vicons/ionicons4';
import { fieldsConfig, patternEnum } from '@/config';
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
const bindAddRule = () => {
  const { __rules__ } = props.widget;
  __rules__.push({
    message: undefined,
    pattern: undefined,
  });
};
const bindRemoveRule = (index) => {
  const { __rules__ } = props.widget;
  __rules__.splice(index, 1);
};
</script>

<style lang="scss" scoped>
.rule-item {
  position: relative;
  margin-bottom: 5px;
  padding: 10px;
  background-color: var(--button-color-2);
  &:last-child {
    margin-bottom: 0;
  }
  .rule-delete {
    position: absolute;
    right: -6px;
    top: -6px;
    color: var(--close-icon-color);
    &:hover {
      color: var(--error-color);
    }
  }
}
.widget-setting {
  .n-form-item:not(.n-form-item:last-child) {
    margin-bottom: 10px;
  }
}
</style>
