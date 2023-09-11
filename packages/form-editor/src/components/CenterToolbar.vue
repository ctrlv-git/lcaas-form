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
</template>
<script setup lang="ts" name="CenterToolbar">
import { IosUndo, IosRedo, MdPlayCircle, MdTrash } from '@vicons/ionicons4';
import type { FormDesigner } from '@/hooks/useDesigner';

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
  const str = type.replace(/^\S/, (s) => s.toUpperCase()) as Capitalize<MethodsType>;
  const key: PadStartCamel<'on', MethodsType> = `on${str}`;
  props?.designer[type]();
  emit(key);
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
</style>
