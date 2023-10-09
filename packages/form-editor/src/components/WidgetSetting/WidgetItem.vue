<template>
  <n-form-item
    :label="conf.label"
    :style="{
      '--n-feedback-font-size': '12px',
      '--n-feedback-height': '16px',
    }"
    :show-label="conf.tagType !== 'Custom'"
    :label-style="
      conf.label.length > 5
        ? {
            fontSize: '12px',
          }
        : {}
    "
    :path="conf.__vModel__"
  >
    <LcFormItem
      :value="getFieldValue(conf.__vModel__)"
      :conf="conf"
      :model="model"
      @update:value="(val) => setFieldValue(conf.__vModel__, val)"
    >
      <template #WidgetOptions>
        <WidgetOptions
          :value="getFieldValue(conf.__vModel__)"
          :conf="props.conf"
          :model="model"
          @update:value="(val) => setFieldValue(conf.__vModel__, val)"
        />
      </template>
      <template #WidgetTreeOptions>
        <WidgetTreeOptions
          :value="getFieldValue(conf.__vModel__)"
          :conf="props.conf"
          :model="model"
          @update:value="(val) => setFieldValue(conf.__vModel__, val)"
        />
      </template>
      <template #WidgetRegExp>
        <WidgetRegExp
          :value="getFieldValue(conf.__vModel__)"
          :conf="conf"
          :model="model"
          @update:value="(val) => setFieldValue(conf.__vModel__, val)"
        />
      </template>
    </LcFormItem>
  </n-form-item>
</template>

<script setup lang="ts" name="WidgetItem">
import { LcFormItem } from '@lcaas/form-render';
import WidgetRegExp from '../WidgetRegExp/WidgetRegExp.vue';
import WidgetOptions from '../WidgetOptions/WidgetOptions.vue';
import WidgetTreeOptions from '../WidgetOptions/WidgetTreeOptions.vue';

interface Props {
  model: Record<string, any>;
  conf: FormItem;
}

const props = withDefaults(defineProps<Props>(), {});

const getFieldValue = (path: string) => {
  const { model: formData } = props;

  if (path.includes('.')) {
    const attrs = path.split('.');
    const data = attrs.reduce((previous, current) => {
      return previous?.[current];
    }, formData);
    return data;
  } else {
    return formData?.[path];
  }
};
const setFieldValue = (path, val) => {
  const setValue = parseWidgetValue(val);

  const { model: formData } = toRefs(props);

  if (path.includes('.')) {
    const attrs = path.split('.');

    const [attr, ...property] = attrs.reverse();
    const data = property.reverse().reduce((previous, current) => {
      return previous[current];
    }, formData.value);

    data[attr] = setValue;
  } else {
    if (formData && formData.value) {
      formData.value[path] = setValue;
    }
  }
};

// 修复控件配置值对渲染器的bug
function parseWidgetValue(val) {
  if (['true', 'false'].includes(val)) {
    return JSON.parse(val);
  }
  // 待验证复选框设置可选数量时需将 null 转化为 undefined
  return val ?? undefined;
}
</script>
