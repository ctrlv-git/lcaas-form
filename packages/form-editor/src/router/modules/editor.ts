import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Editor',
    component: () => import('@/views/Editor.vue'),
    meta: {
      title: '编辑器',
    },
  },
];

export default routes;
