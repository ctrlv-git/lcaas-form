import { Router } from 'vue-router';

export function createRouterGuards(router: Router) {
  //   router.beforeEach(async (to, from, next) => {});
  router.afterEach((to) => {
    const { title } = to.meta;
    document.title = (title as string) || document.title;
  });

  router.onError((error) => {
    console.error('路由错误', error);
  });
}
