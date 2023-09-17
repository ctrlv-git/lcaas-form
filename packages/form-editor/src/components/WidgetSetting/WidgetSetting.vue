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
        <template v-if="hasOptions">
          <n-divider dashed><span class="divider-label">选项</span></n-divider>
          <template v-if="widget?.tagType !== 'Cascader'">
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
          </template>
          <template v-else>
            <n-tree
              :data="optionsData"
              block-line
              key-field="value"
              expand-on-click
              :render-suffix="renderTreeSuffix"
            />
            <div style="padding: 0 10px">
              <n-button text type="info" @click="() => openTreeDialog()">
                <template #icon>
                  <n-icon :component="MdAddCircleOutline"></n-icon>
                </template>
                <span>添加选项</span>
              </n-button>
            </div>
          </template>
        </template>
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
  <!-- 选项弹窗 -->
  <n-modal
    v-model:show="showTreeModal"
    :mask-closable="false"
    :on-after-leave="onTreeClose"
    size="small"
    preset="dialog"
    title="添加选项"
    style="width: 580px"
    positive-text="确认"
    @positive-click="bindAddTreeOption"
  >
    <n-form-item label="上级选项" label-placement="left" label-width="6em">
      <n-tree-select
        block-line
        :default-value="selectTree?.value"
        :options="optionsData"
        :on-update:value="onTreeSelect"
        default-expand-all
        key-field="value"
      />
    </n-form-item>
    <n-form-item label="选项名" label-placement="left" label-width="6em" path="label" :rule="requireRule">
      <n-input v-model:value="treeAddData.label" />
    </n-form-item>
    <n-form-item label="选项值" label-placement="left" label-width="6em" path="value" :rule="requireRule">
      <n-input v-model:value="treeAddData.value" />
    </n-form-item>
  </n-modal>
</template>

<script setup lang="ts" name="WidgetSetting">
import { fieldsConfig, patternEnum } from '@/config';
import { treeRemoveNode } from '@/utils';
import { MdAddCircleOutline, MdCloseCircleOutline, MdRemoveCircleOutline, MdAdd, MdRemove } from '@vicons/ionicons4';
import { cloneDeep } from 'lodash-es';
import { NButton, NIcon, NSpace } from 'naive-ui';
import WidgetItem from './WidgetItem';
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
const hasOptions = computed(() => {
  const { tagType } = props.widget;
  return ['Select', 'Cascader', 'Radio', 'Checkbox'].includes(tagType);
});
const optionsData = computed({
  get() {
    return getOptions();
  },
  set(val) {
    const { tagType, __slot__, __config__ } = props.widget;
    ['Checkbox', 'Radio'].includes(tagType) ? (__slot__.default.options = val) : (__config__.options = val);
  },
});
const bindAddOption = () => {
  optionsData.value.push({
    label: '',
    value: '',
  });
};
const bindRemoveOption = (index) => {
  const options = getOptions();
  options.splice(index, 1);
};
// 树形数据
const showTreeModal = ref(false);
const selectTree = ref<any>({});
const treeAddData = ref<LabelValue>({ label: '', value: '' });

const onTreeSelect = (_val, meta) => {
  selectTree.value = meta;
};
const onTreeClose = () => {
  selectTree.value = {};
  treeAddData.value = { label: '', value: '' };
};
const requireRule = {
  trigger: ['input', 'blur'],
  message: '内容不能为空',
  validator({ field, message }) {
    treeAddData.value[field];
    if (!treeAddData.value[field]) {
      return new Error(message);
    }
  },
};
const renderTreeSuffix = ({ option }) => {
  return h(NSpace, {}, () => [
    h(
      NButton,
      {
        title: '添加',
        text: true,
        onClick(event) {
          event.stopPropagation();
          openTreeDialog(option);
        },
      },
      () => h(NIcon, { component: MdAdd }),
    ),
    h(
      NButton,
      {
        title: '删除',
        text: true,
        onClick(event) {
          event.stopPropagation();
          treeRemoveNode(unref(optionsData), option);
        },
      },
      () => h(NIcon, { component: MdRemove }),
    ),
  ]);
};
const openTreeDialog = (option?) => {
  showTreeModal.value = true;
  selectTree.value = option;
};
const bindAddTreeOption = () => {
  const { label, value } = unref(treeAddData);

  if (!label || !value) {
    window.$message.error('选项配置不能为空');
    return false;
  }

  if (unref(selectTree)) {
    unref(selectTree).children
      ? unref(selectTree).children.push({ label, value })
      : (unref(selectTree).children = [{ label, value }]);
    return true;
  }

  const {
    __config__: { options = [] },
  } = props.widget;
  options.push({
    children: undefined,
    label,
    value,
  });

  return true;
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

function getOptions() {
  const { tagType, __slot__, __config__ } = props.widget;
  return ['Checkbox', 'Radio'].includes(tagType) ? __slot__.default.options : __config__.options;
}
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
