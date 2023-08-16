<template>
  <section v-for="(item, listIndex) in leftComponents" :key="listIndex" class="components-panel">
    <div class="components-title">
      <svg-icon class="svg-icon-r" name="component" />
      <span>
        {{ item.title }}
      </span>
    </div>
    <lc-draggable
      v-model="item.list"
      item-key="label"
      class="components-draggable"
      :config="{ group: { name: refLeftDraggable, pull: 'clone', put: false, revertClone: true }, sort: false }"
      :choose-data="onChoose"
    >
      <template #default="{ element }">
        <svg-icon :name="element.icon"></svg-icon>
        <span>{{ element.label }}</span>
      </template>
    </lc-draggable>
  </section>
</template>
<script setup lang="ts" name="LeftPanel">
import { shuffle as _shuffle } from 'lodash-es';
import { refLeftDraggable, genLeftPanelOptions } from '@/config';
import { getUUID } from '@/utils/utils';
import { LcDraggable } from '@/components/lc-draggable';

const leftComponents = ref<any>([]);
onMounted(async () => {
  leftComponents.value = await genLeftPanelOptions();
});

const onChoose = (data) => {
  data.id = getUUID();
  return data;
};
</script>
<style lang="scss" scoped>
$halfHeight: calc(var(--height-mini) / 2);
$halfHeightMin: calc(var(--height-mini) / 4);

.components-panel {
  padding: $halfHeightMin $halfHeight;
  &:deep(.lc-draggable) {
    display: flex;
    align-items: center;
    padding: $halfHeight;
    border-radius: var(--border-radius-small);
    background-color: var(--button-color-2);
    cursor: pointer;
    &:hover {
      background-color: var(--button-color-2-hover);
    }
    &:active {
      background-color: var(--button-color-2-pressed);
    }
  }
}
.components-title {
  display: flex;
  align-items: center;
  margin-bottom: $halfHeight;
}
.components-draggable {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: $halfHeight;
}
</style>
