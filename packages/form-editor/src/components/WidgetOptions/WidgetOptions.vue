<template>
  <section class="widget-box">
    <n-divider dashed><span class="divider-label">选项</span></n-divider>
    <div v-for="(option, index) in optionsData" :key="index" class="opt-draggable">
      <n-input-group>
        <n-input v-model:value="option.label" placeholder="选项名" />
        <n-input v-model:value="option.value" placeholder="选项值" />
        <n-tag checkable size="large" class="tag-draggable" @click="bindRemoveOption(index)">
          <n-icon size="18" :component="MdRemoveCircleOutline" class="btn-error"></n-icon>
        </n-tag>
      </n-input-group>
    </div>

    <div style="padding: 0 10px">
      <n-button text type="info" @click="bindAddOption">
        <template #icon>
          <n-icon :component="MdAddCircleOutline"></n-icon>
        </template>
        <span>添加选项</span>
      </n-button>
    </div>
  </section>
</template>
<script setup lang="ts" name="WidgetOptions">
import { MdAddCircleOutline, MdRemoveCircleOutline } from '@vicons/ionicons4';

interface Props {
  value: Record<string, any>[];
  model: Record<string, any>;
  conf: FormItem;
}

const props = withDefaults(defineProps<Props>(), {
  value: () => [],
});

const emits = defineEmits(['update:value']);
/* ***配置*** */
const optionsData = computed({
  get() {
    return props.value;
  },
  set(val) {
    emits('update:value', val);
  },
});

const bindAddOption = () => {
  optionsData.value.push({
    label: '',
    value: '',
  });
};
const bindRemoveOption = (index) => {
  optionsData.value.splice(index, 1);
};
</script>
<style lang="scss" scoped>
.divider-label {
  font-size: 14px;
}

.opt-draggable {
  margin-bottom: 10px;
}

.btn-error {
  color: var(--error-color);
}
</style>
