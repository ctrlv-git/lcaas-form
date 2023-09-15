# form-engine

一款基于Vue3的低代码表单，支持naiveui组件库。可自定义组件，扩展性强。

## 演示

- [演示地址](https://ctrlc-git.gitee.io/lcaas-form/)

## 运行

- 安装

```bash
pnpm install
```

- 启动

```bash
pnpm dev
```

## 表单设计器

通过基于表单设计器的JSON数据，渲染成真实的表单。

- 启动

```bash
pnpm dev
```

- 构建

```bash
pnpm build
```

## 表单渲染器

通过基于表单设计器产生的JSON数据，渲染成真实的表单。

- 安装

```bash
npm i @lcaas/form-render
```

- 使用

```vue
<template>
 <lc-form ref="formRef" v-model:value="formData"  :conf="formConfig"></lc-form>
</template>

<script setup lang="ts">
import { LcForm } from '@lcaas/form-render';
const formData = ref({});
const formConfig = ref({});
</script>
```

### TODO

功能|状态
---|---
栅格布局|&#10004;
表单验证|&#10004;
组件联动|&#9744;
表格组件|&#9744;
表单嵌套|&#9744;
远端数据|&#9744;
