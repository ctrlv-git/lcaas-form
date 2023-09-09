<template>
  <n-input-group>
    <n-input v-model:value="labelValue" :allow-input="onlyAllowNumber" />
    <n-select v-model:value="labelValueUnit" :style="{ width: '10em' }" :options="options" />
  </n-input-group>
</template>
<script setup lang="ts" name="InputUnit">
import { onlyAllowNumber } from '@/utils';

export interface Props {
  value: any;
  options: any[];
}
const props = withDefaults(defineProps<Props>(), {});
const emits = defineEmits(['update:value']);
const labelValue = computed({
  get() {
    const { value } = toRefs(props);
    return ('' + value.value).replaceAll(/[a-zA-Z]*/g, '');
  },
  set(val) {
    const value = val ? `${val}${labelValueUnit.value}` : '';
    emits('update:value', value);
  },
});
const labelValueUnit = computed({
  get() {
    const { value = '', options } = props;
    return ('' + value).replaceAll(/[0-9]*/g, '') || options[0]?.value;
  },
  set(val) {
    const value = labelValue.value ? `${labelValue.value}${val}` : '';
    emits('update:value', value);
  },
});
</script>
