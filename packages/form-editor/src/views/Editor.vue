<template>
  <n-el class="app-container" tag="section">
    <div class="app-left">
      <div class="left-logo">表单设计器</div>
      <n-scrollbar class="app-panel left-panel">
        <LeftPanel />
      </n-scrollbar>
    </div>
    <div class="app-center">
      <CenterToolbar :designer="designer" @on-empty="bindTest" />
      <n-scrollbar class="app-panel">
        <n-form ref="elFormRef" v-bind="formConfig.fromGlobal" :model="formData" :rules="formRules">
          <lc-draggable
            v-bind="formConfig.fromGrid"
            :model-value="formConfig.items"
            :config="draggableConfig"
            tag="NGrid"
            class="center-editor"
            @update:model-value="bindDraggableUpdate"
          >
            <n-form-item-gi
              v-for="(element, index) in formConfig.items"
              :key="element.__uuid__"
              v-bind="element.__layout__"
              :label="element.label"
              :show-feedback="false"
              :path="element.__vModel__"
              :class="['center-row', { on: activeWidget?.__uuid__ === element.__uuid__ }]"
              @click="designer.setActiveWidget(element)"
            >
              <LcFormItem v-model:value="formData[element.__vModel__]" :conf="element" />
              <div class="form-tool">
                <span class="form-tool-btn icon-copy" @click.stop="designer.copyWidget(element)">
                  <n-icon size="16" :component="MdCopy"></n-icon>
                </span>
                <span class="form-tool-btn icon-delete" @click.stop="designer.deleteWidget(index)">
                  <n-icon size="16" :component="MdTrash"></n-icon>
                </span>
              </div>
            </n-form-item-gi>

            <template #empty>
              <n-gi :span="24" class="center-empty" draggable="false">
                <n-empty size="huge" description="从左侧选择控件进行表单设计" />
              </n-gi>
            </template>
          </lc-draggable>
        </n-form>
      </n-scrollbar>
    </div>
    <div class="app-right">
      <RightPanel :designer="designer" :widget="activeWidget" :form="formConfig" />
    </div>
  </n-el>
</template>
<script setup lang="ts" name="PageEditor">
import CenterToolbar from '@/components/CenterToolbar.vue';
import LeftPanel from '@/components/LeftPanel.vue';
import RightPanel from '@/components/RightPanel.vue';
import { LcDraggable } from '@/components/lc-draggable';
import { refCenterDraggable, refLeftDraggable } from '@/config';
import { useDesigner } from '@/hooks/useDesigner';
import { LcFormItem, parseRules } from '@lcaas/form-render';
import { MdCopy, MdTrash } from '@vicons/ionicons4';

const draggableConfig = {
  group: { name: refCenterDraggable, pull: true, put: [refLeftDraggable, refCenterDraggable] },
};

const [designer, { formData, formConfig, elFormRef, activeWidget }] = useDesigner();
const formRules = computed(() => {
  const { items } = formConfig.value;
  return parseRules(items);
});
const bindDraggableUpdate = (items) => {
  formConfig.value.items = items;
  designer.storage();
};
const bindTest = () => {
  formConfig.value.fromGrid.xGap = 24;
};
</script>

<style lang="scss" scoped>
@import '@/styles/editor.scss';
.color-item {
  display: inline-block;
  height: 250px;
  width: 250px;
  line-height: 250px;
  text-align: center;

  font-size: 20px;
  color: #fff;
}
</style>
