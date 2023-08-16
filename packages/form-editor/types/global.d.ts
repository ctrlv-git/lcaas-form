import type { LoadingBarApi, MessageApi } from 'naive-ui';
import type { App } from 'vue';
export {};
declare global {
  interface ViteEnv {
    // **应用配置**
    VITE_APP_TITLE: boolean;
    // **构建配置**
    VITE_BUILD_ANALYZER: boolean;
    VITE_BUILD_CHUNKS: boolean;
    VITE_BUILD_API_URL: string;
    // **开发配置**
    VITE_BUILD_PORT: number;
    VITE_BUILD_PROXY: [string, string][];
    // **服务器选项**
    VITE_BUILD_PUBLIC_PATH: string;
    VITE_BUILD_OUTPUT_DIR: string;
    VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none';
    VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean;
  }

  interface Window {
    $loadingBar: LoadingBarApi;
    $message: MessageApi;
    $asideApp: App;
  }
}
declare module '*.vue' {
  import { defineComponent } from 'vue';
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}

declare module 'vue-router' {
  interface RouteMeta {
    title: string;
  }
}

declare module 'virtual:*' {
  const result: any;
  export default result;
}
