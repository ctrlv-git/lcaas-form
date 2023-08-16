import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/Preview',
    name: 'Preview',
    component: () => import('@/views/Preview.vue'),
    meta: {
      title: '预览器',
    },
  },
];

export default routes;
