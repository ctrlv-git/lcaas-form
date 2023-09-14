<template>
  <n-form
    class="widget-setting"
    :model="props.widget"
    label-width="5.5rem"
    label-placement="left"
    :show-feedback="false"
  >
    <n-collapse default-expanded-names="extendConfig">
      <n-collapse-item title="基础属性" name="commonConfig">
        <WidgetItem
          v-for="field in commonConfig"
          :key="field.label"
          :field="field"
          :model="props.widget"
          :fields="commonConfig"
        ></WidgetItem>
      </n-collapse-item>
      <n-collapse-item title="高级属性" name="extendConfig">
        <WidgetItem
          v-for="field in extendConfig"
          :key="field.label"
          :field="field"
          :model="props.widget"
          :fields="extendConfig"
        ></WidgetItem>
        <n-divider dashed><span class="divider-label">选项</span></n-divider>
        <lc-draggable v-model="options" class="components-draggable" :config="{ sort: true, handle: '.tag-draggable' }">
          <div v-for="(option, index) in options" :key="option['__idx__']" class="opt-draggable">
            <n-input-group>
              <n-tag checkable size="large" class="tag-draggable">
                <n-icon size="18" :component="IosList"></n-icon>
              </n-tag>
              <n-input v-model:value="option.label" placeholder="选项名" />
              <n-input v-model:value="option.value" placeholder="选项值" />
              <n-tag checkable size="large" class="tag-draggable" @click="bindRemoveOption(index)">
                <n-icon size="18" :component="MdRemoveCircleOutline" class="btn-error"></n-icon>
              </n-tag>
            </n-input-group>
          </div>
        </lc-draggable>
        <div style="padding: 0 10px">
          <n-button text type="info" @click="bindAddOption">
            <template #icon>
              <n-icon :component="MdAddCircleOutline"></n-icon>
            </template>
            <span>添加选项</span>
          </n-button>
        </div>
      </n-collapse-item>
      <n-collapse-item title="校验规则" name="rulesConfig">
        <WidgetItem
          v-for="field in rulesConfig"
          :key="field.label"
          :field="field"
          :model="props.widget"
          :fields="rulesConfig"
        ></WidgetItem>
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
        <div style="padding: 0 18px">
          <n-button text type="info" @click="bindAddRule">
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
import { LcDraggable } from '@/components/lc-draggable';
import { MdAddCircleOutline, MdCloseCircleOutline, IosList, MdRemoveCircleOutline } from '@vicons/ionicons4';
import { fieldsConfig, patternEnum } from '@/config';
import WidgetItem from './WidgetItem';
import { cloneDeep } from 'lodash-es';

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
/* *选项配置* */
const options = computed({
  get() {
    const {
      __config__: { options = [] },
    } = props.widget;
    options.forEach((o, idx) => {
      o['__idx__'] = Symbol(idx);
    });
    return options;
  },
  set(val) {
    const { __config__ } = props.widget;
    __config__.options = val;
  },
});
const bindAddOption = () => {
  const {
    __config__: { options = [] },
  } = props.widget;
  options.push({
    __idx__: Symbol(options.length + 1),
    label: '',
    value: '',
  });
};
const bindRemoveOption = (index) => {
  const {
    __config__: { options = [] },
  } = props.widget;
  options.splice(index, 1);
};
/* *规则配置* */
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
