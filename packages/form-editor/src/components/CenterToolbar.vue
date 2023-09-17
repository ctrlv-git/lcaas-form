<template>
  <div class="center-toolbar">
    <n-button quaternary circle size="small" @click="bindClick('undo')">
      <template #icon>
        <n-tooltip>
          <template #trigger>
            <n-icon :component="IosUndo"></n-icon>
          </template>
          撤销
        </n-tooltip>
      </template>
    </n-button>
    <n-button quaternary circle size="small" @click="bindClick('redo')">
      <template #icon>
        <n-tooltip>
          <template #trigger>
            <n-icon :component="IosRedo"></n-icon>
          </template>
          恢复
        </n-tooltip>
      </template>
    </n-button>
    <n-button quaternary circle size="small" type="info" @click="bindClick('preview')">
      <template #icon>
        <n-tooltip>
          <template #trigger>
            <n-icon :component="MdPlayCircle"></n-icon>
          </template>
          预览
        </n-tooltip>
      </template>
    </n-button>
    <n-button quaternary circle size="small" type="error" @click="bindClick('empty')">
      <template #icon>
        <n-tooltip>
          <template #trigger>
            <n-icon :component="MdTrash"></n-icon>
          </template>
          清空
        </n-tooltip>
      </template>
    </n-button>
    <n-button size="small" type="primary" @click="bindClick('save')">保存</n-button>
  </div>
  <n-modal
    v-model:show="showModal"
    :mask-closable="false"
    :on-after-leave="() => (formData = {})"
    size="small"
    preset="card"
    title="选择图标"
    style="width: 920px"
  >
    <n-scrollbar style="max-height: 600px; padding-right: 10px">
      <LcForm ref="formRef" v-model:value="formData" class="preview-form" :conf="formConfig"></LcForm>
    </n-scrollbar>
    <template #footer>
      <n-button-group>
        <n-button type="primary" tertiary @click="bindSubmit">提交</n-button>
        <n-button type="info" tertiary @click="bindReset">重置</n-button>
      </n-button-group>
    </template>
  </n-modal>
</template>
<script setup lang="ts" name="CenterToolbar">
import { IosUndo, IosRedo, MdPlayCircle, MdTrash } from '@vicons/ionicons4';
import type { FormDesigner } from '@/hooks/useDesigner';
import { LcForm } from '@lcaas/form-render';

const methodsName = ['undo', 'redo', 'preview', 'empty', 'save'] as const;
type MethodsType = (typeof methodsName)[number];

export interface Props {
  designer: FormDesigner;
}
const props = withDefaults(defineProps<Props>(), {
  designer: undefined,
});

const emit = defineEmits(['onUndo', 'onRedo', 'onPreview', 'onEmpty', 'onSave']);

const bindClick = (type: MethodsType) => {
  const { designer } = props;
  const str = type.replace(/^\S/, (s) => s.toUpperCase()) as Capitalize<MethodsType>;
  const key: PadStartCamel<'on', MethodsType> = `on${str}`;
  formConfig.value = designer.getConf();
  designer[type]((...arg) => {
    if (type === 'preview') {
      showModal.value = arg[0];
    }
  });
  emit(key);
};
/* ******* */
const showModal = ref(false);
const formRef = ref();
const formData = ref({});
const formConfig = ref({});
const bindReset = () => {
  formRef.value.reset();
};
const bindSubmit = () => {
  const { validate } = formRef.value;
  validate();
  console.log('表单提交信息:', toRaw(formData.value), '表单配置信息:', toRaw(formConfig.value));
};
</script>
<style lang="scss" scoped>
.center-toolbar {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 42px;
  line-height: 42px;
  padding: 0 7px;
  border-bottom: 1px solid var(--divider-color);
  > .n-button {
    margin-left: 8px;
  }
}
.preview-form {
  padding: 20px;
}
</style>
