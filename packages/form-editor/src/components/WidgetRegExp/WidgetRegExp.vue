<template>
  <section class="widget-box">
    <div style="padding: 0 18px">
      <n-button text type="info" @click="bindAddRule">
        <template #icon>
          <n-icon :component="MdAddCircleOutline" />
        </template>
        <span>添加规则</span>
      </n-button>
    </div>
    <div v-for="(rule, i) in rulesData" :key="i" class="rule-item">
      <n-button class="rule-delete" text @click="() => bindRemoveRule(i)">
        <n-icon size="18" :component="MdCloseCircleOutline" />
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
  </section>
</template>
<script setup lang="ts" name="WidgetRegExp">
import { MdAddCircleOutline, MdCloseCircleOutline } from '@vicons/ionicons4';
import { patternEnum } from '@/config';
interface Props {
  value: Record<string, any>[];
  model: Record<string, any>;
  conf: FormItem;
}

const props = withDefaults(defineProps<Props>(), {
  value: () => [],
});

const emits = defineEmits(['update:value']);
/* *规则配置* */

const rulesData = computed({
  get() {
    return props.value;
  },
  set(val) {
    emits('update:value', val);
  },
});

const bindAddRule = () => {
  rulesData.value.push({
    message: undefined,
    pattern: undefined,
  });
};
const bindRemoveRule = (index) => {
  rulesData.value.splice(index, 1);
};
</script>
<style lang="scss" scoped>
.widget-box {
  width: 100%;
  flex: 1 1 auto;
  .n-form-item:not(.n-form-item:last-child) {
    margin-bottom: 10px;
  }
}
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
</style>
