import type { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { generateRoute } from './route-generator';
import { createRouterGuards } from './router-guards';

const routeModule = generateRoute();
const { VITE_BUILD_PUBLIC_PATH } = import.meta.env;

const ErrorPageRoute = {
  path: '/:path(.*)*',
  name: 'ErrorPage',
  component: () => import('@/views/Page404.vue'),
  meta: {
    title: '404',
  },
};

export const constantRouter: any[] = [...routeModule, ErrorPageRoute];

const router = createRouter({
  history: createWebHistory(VITE_BUILD_PUBLIC_PATH),
  routes: constantRouter,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export async function setupRouter(app: App) {
  app.use(router);
  createRouterGuards(router);
}

export default router;
