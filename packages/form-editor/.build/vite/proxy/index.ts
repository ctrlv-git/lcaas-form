import type { ProxyOptions } from 'vite';

type ProxyItem = [string, string];

type ProxyList = ProxyItem[];

type ProxyTargetList = Record<string, ProxyOptions & { rewrite: (path: string) => string }>;

const httpsRE = /^https:\/\//;

/**
 * Generate proxy
 * @param list
 */
export function createProxy(list: ProxyList = []) {
  const ret: ProxyTargetList = {};

  list.forEach(([prefix, target]) => {
    const isHttps = httpsRE.test(target);
    ret[`${prefix}`] = {
      target: target,
      changeOrigin: true,
      ws: true,
      rewrite: (path) => path.replace(new RegExp(`${prefix}`), ''),
      ...(isHttps ? { secure: false } : {}),
    };
  });
  return ret;
}
