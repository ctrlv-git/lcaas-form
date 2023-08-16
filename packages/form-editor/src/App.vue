<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-global-style />
    <n-loading-bar-provider>
      <n-dialog-provider>
        <n-message-provider>
          <RouterView />
        </n-message-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<script setup lang="ts" name="App">
import { themeOverrides } from '@/theme/theme-overrides';
</script>

<style lang="scss">
@import url('@/styles/app.scss');
</style>
