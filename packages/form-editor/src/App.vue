<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN" :theme-overrides="themeOverrides">
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
import { zhCN, dateZhCN } from 'naive-ui';
import { themeOverrides } from '@/theme/theme-overrides';
</script>

<style lang="scss">
@import url('@/styles/app.scss');
</style>
