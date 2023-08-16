import { createApp } from 'vue';
import App from './App.vue';
import router, { setupRouter } from '@/router';
import { setupStore } from '@/store';
import { setPlugins } from '@/plugins';

async function bootstrap() {
  const app = createApp(App);

  // 注册插件
  setPlugins(app);
  window.$loadingBar.start();
  // 注册Store
  setupStore(app);
  // 挂载路由
  await setupRouter(app);
  await router.isReady();

  window.$loadingBar.finish();
  app.mount('#LcaasFormEditor');
}

bootstrap();
