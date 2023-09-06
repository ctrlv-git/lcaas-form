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
      class="components-draggable"
      :config="{ group: { name: refLeftDraggable, pull: 'clone', put: false, revertClone: true }, sort: false }"
      :choose-data="onChoose"
    >
      <template #default="{ element }">
        <div :key="element.label" class="lc-draggable">
          <svg-icon :name="element.icon"></svg-icon>
          <span>{{ element.text }}</span>
        </div>
      </template>
    </lc-draggable>
  </section>
</template>
<script setup lang="ts" name="LeftPanel">
import { cloneDeep } from 'lodash-es';
import { refLeftDraggable, genLeftPanelOptions, genWidgetOptions } from '@/config';
import { getUUID, getUniqueId } from '@/utils/utils';
import { LcDraggable } from '@/components/lc-draggable';

const leftComponents = ref<any>([]);
onMounted(async () => {
  leftComponents.value = await genLeftPanelOptions();
});

const onChoose = ({ icon }) => {
  const data = genWidgetOptions(icon);
  data['__uuid__'] = getUUID();
  data['__vModel__'] = getUniqueId(`${icon}-`);
  // TODO
  data.__layout__.span = 12;
  return cloneDeep(data);
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
