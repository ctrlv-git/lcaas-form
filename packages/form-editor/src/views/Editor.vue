<template>
  <n-el class="app-container" tag="section">
    <div class="app-left">
      <div class="left-logo">表单设计器</div>
      <n-scrollbar class="app-panel left-panel">
        <LeftPanel />
      </n-scrollbar>
    </div>
    <div class="app-center">
      <CenterToolbar @on-save="bindSave" />
      <n-scrollbar class="app-panel">
        <n-form ref="formRef" v-bind="formConfig.fromGlobal" :model="formData">
          <lc-draggable
            v-model="formConfig.items"
            v-bind="formConfig.fromGrid"
            :config="centerDraggableConfig"
            tag="NGrid"
            class="center-editor"
          >
            <n-form-item-gi
              v-for="element in formConfig.items"
              :key="element.__uuid__"
              v-bind="element.__layout__"
              :label="element.label"
              :show-feedback="false"
              class="center-row"
            >
              <LcFormItem v-model:value="formData[element.__vModel__]" :conf="element" />
            </n-form-item-gi>

            <template #empty>
              <n-gi :span="24" class="center-empty" draggable="false">从左侧拖入或点选组件进行表单设计</n-gi>
            </template>
          </lc-draggable>
        </n-form>
        <!-- <n-divider></n-divider>
        <LcForm v-model:value="formData" class="center-editor" :conf="formConfig" /> -->
      </n-scrollbar>
    </div>
    <div class="app-right">
      <div class="right-tab">
        <n-tabs justify-content="space-evenly" type="line">
          <n-tab name="组件属性" />
          <n-tab name="表单属性" />
        </n-tabs>
        <div></div>
      </div>
      <n-scrollbar class="app-panel">
        <!-- TODO -->
      </n-scrollbar>
    </div>
  </n-el>
</template>
<script setup lang="ts" name="PageEditor">
import type { FormProps, GridProps } from 'naive-ui';
import CenterToolbar from '@/components/CenterToolbar.vue';
import LeftPanel from '@/components/LeftPanel.vue';
import { LcForm, LcFormItem } from '@lcaas/form-render';
import { LcDraggable } from '@/components/lc-draggable';
import { refCenterDraggable, refLeftDraggable, widgetsConfig } from '@/config';
import { getUUID, getUniqueId } from '@/utils/utils';

const formRef = ref();
const formData = ref({});
const formConfig = ref({
  fromGrid: <GridProps>{
    cols: '12',
    xGap: '12',
    yGap: '12',
  },
  fromGlobal: <FormProps>{
    size: 'small',
    labelPlacement: 'left',
  },
  items: <any[]>[],
});

const centerDraggableConfig = {
  group: { name: refCenterDraggable, pull: true, put: [refLeftDraggable, refCenterDraggable] },
};

const bindSave = () => {
  formConfig.value.items = Object.keys(widgetsConfig).map((key) => ({
    ...widgetsConfig[key],
    __uuid__: getUUID(),
    __vModel__: getUniqueId(widgetsConfig[key].tag + Math.random().toString(36).replace('.', '')),
  }));
  console.log('widgetsConfig', formConfig.value.items);
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
