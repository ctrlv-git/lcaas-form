<template>
  <n-input-group>
    <n-input v-model:value="labelValue" readonly placeholder="请选择"></n-input>
    <n-button type="primary" @click="() => (showModal = true)">选择</n-button>
  </n-input-group>
  <n-modal
    v-model:show="showModal"
    preset="card"
    title="选择图标"
    :mask-closable="false"
    display-directive="show"
    style="width: 920px"
  >
    <template #header>
      <div class="select-icon-header">
        <div class="title">选择图标</div>
        <n-input v-model:value="searchModal"></n-input>
      </div>
    </template>
    <n-scrollbar style="max-height: 800px">
      <VIcons @select="onSelectIcon"></VIcons>
    </n-scrollbar>
  </n-modal>
</template>
<script setup lang="ts" name="SelectIcon">
interface Props {
  value: any;
}
const props = withDefaults(defineProps<Props>(), {});
const emits = defineEmits(['update:value']);
const VIcons = defineAsyncComponent(() => import('@/components/VIcons'));

const showModal = ref(false);
const searchModal = ref();

const labelValue = computed({
  get() {
    return props.value;
  },
  set(val) {
    emits('update:value', val);
  },
});

const onSelectIcon = (name) => {
  showModal.value = false;
  labelValue.value = name;
};
</script>
<style lang="scss" scoped>
.select-icon {
  &-header {
    display: flex;
    align-items: center;
    width: 400px;
    .title {
      margin-right: 20px;
      white-space: nowrap;
    }
  }
}
</style>
