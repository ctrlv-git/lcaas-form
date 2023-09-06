<template>
  <n-el class="app-container" tag="section">
    <div class="app-left">
      <div class="left-logo">表单设计器</div>
      <n-scrollbar class="app-panel left-panel">
        <LeftPanel />
      </n-scrollbar>
    </div>
    <div class="app-center">
      <CenterToolbar />
      <n-scrollbar class="app-panel">
        <n-form ref="formRef" v-bind="formConfig.fromGlobal" :model="formData">
          <lc-draggable
            v-model="formConfig.items"
            v-bind="formConfig.fromGrid"
            :tag="NGrid"
            :config="centerDraggableConfig"
            class="center-editor"
          >
            <template #default="{ element }">
              <n-form-item-gi
                v-bind="element.__layout__"
                :label="element.label"
                :show-feedback="false"
                class="center-row"
              >
                <LcFormItem v-model:value="formData[element.__vModel__]" :conf="element" />
              </n-form-item-gi>
            </template>
            <template #empty>
              <n-gi :span="24" class="center-empty" draggable="false">从左侧拖入或点选组件进行表单设计</n-gi>
            </template>
          </lc-draggable>
        </n-form>
        <n-divider></n-divider>
        <!--  -->
        <LcForm v-model:value="formData" class="center-editor" :conf="formConfig" />
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
import { NGrid, NGi } from 'naive-ui';
import CenterToolbar from '@/components/CenterToolbar.vue';
import LeftPanel from '@/components/LeftPanel.vue';
import { LcForm, LcFormItem } from '@lcaas/form-render';
import { LcDraggable } from '@/components/lc-draggable';
import { refCenterDraggable, refLeftDraggable } from '@/config';

// FormRender.use({ ui: naive, app: 'app' });
const formRef = ref();
const formData = ref({});
const formConfig = ref({
  fromGrid: {
    cols: '12',
    xGap: '12',
    yGap: '12',
  },
  fromGlobal: {
    size: 'small',
    'label-placement': 'left',
  },
  items: [],
});

const centerDraggableConfig = {
  group: { name: refCenterDraggable, pull: true, put: [refLeftDraggable, refCenterDraggable] },
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
