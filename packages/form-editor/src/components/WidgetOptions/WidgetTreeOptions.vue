<template>
  <section class="widget-box">
    <n-divider dashed><span class="divider-label">选项</span></n-divider>
    <n-tree :data="optionsData" block-line key-field="value" expand-on-click :render-suffix="renderTreeSuffix" />
    <div style="padding: 0 10px">
      <n-button text type="info" @click="() => openTreeDialog()">
        <template #icon>
          <n-icon :component="MdAddCircleOutline"></n-icon>
        </template>
        <span>添加选项</span>
      </n-button>
    </div>
  </section>
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
<script setup lang="ts" name="WidgetTreeOptions">
import { treeRemoveNode } from '@/utils';
import { MdAddCircleOutline, MdAdd, MdRemove } from '@vicons/ionicons4';
import { NButton, NIcon, NSpace } from 'naive-ui';

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

  optionsData.value.push({
    children: undefined,
    label,
    value,
  });

  return true;
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
</script>
<style lang="scss" scoped>
.widget-box {
  width: 100%;
}
.divider-label {
  font-size: 14px;
}
</style>
