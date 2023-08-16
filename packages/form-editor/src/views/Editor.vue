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
        <!-- TODO -->
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
import CenterToolbar from '@/components/CenterToolbar.vue';
import LeftPanel from '@/components/LeftPanel.vue';
// import { refCenterDraggable, refLeftDraggable } from '@/config';
// import { LcDraggable } from '@/components/lc-draggable';
// import { getUUID } from '@/utils/utils';
// const centerDraggableConfig = {
//   group: { name: refCenterDraggable, pull: true, put: [refLeftDraggable, refCenterDraggable] },
// };
</script>
<style lang="scss" scoped>
@import '@/styles/editor.scss';
.placeholder {
  height: 110vh;
}
</style>
