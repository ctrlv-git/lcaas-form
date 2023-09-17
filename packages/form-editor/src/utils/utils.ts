/**
 * @description 判断浏览器的隐身(无痕)模式
 */
export function browserIsHide() {
  const fs = globalThis?.RequestFileSystem || globalThis?.webkitRequestFileSystem;
  if (!fs) {
    console.log('check 无痕模式 failed ?');
  } else {
    fs(
      globalThis.TEMPORARY,
      100,
      function () {
        console.log('非无痕模式');
      },
      function () {
        alert('您已开启无痕模式，为了不影响正常功能使用，请切换普通模式！');
      },
    );
  }
}

/**
 * @description 获取UUID
 * @returns {string}
 */
export function getUUID(): string {
  const global = globalThis || window;
  return global.crypto.randomUUID();
}

/**
 * @description 获取唯一id
 * @returns {string}
 */
export function getUniqueId(prefix = ''): string {
  const global = globalThis || window;
  return prefix + global.performance.now().toString(36).replace('.', '');
}
/**
 * @description 复制Json对象 会删除属性为Symbol的key
 * @returns {any}
 */
export function cloneJson<T = any>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * @description 根据文件路径
 * @returns {any}
 */
type ParsePath = {
  dir: string;
  base: string;
  ext: string;
  name: string;
};
export function parsePath(str: string): ParsePath {
  const base = str.split('/').at(-1) as string;
  const dir = str.split(base).at(0) as string;
  const [ext, ...name] = base.split('.').reverse();

  return {
    dir,
    base,
    ext: `.${ext}`,
    name: name.reverse().join('.'),
  };
}

export const onlyAllowNumber = (value: string) => !value || /^[1-9]\d*$/.test(value);

/**
 * Description 数组分段
 * @param {any} array
 * @param {any} chunkSize=1
 * @returns {any}
 */
export function chunkArray<T = any>(array: T[], chunkSize = 1) {
  const results = <T[][]>[];
  for (let i = 0; i < array.length; i += chunkSize) {
    results.push(array.slice(i, i + chunkSize));
  }
  return results;
}
/**
 * Descriptions tree删除节点
 * @param {any} tree
 * @param {any} node
 * @param {string} key='value
 * @returns {viod}
 */
export function treeRemoveNode(tree, node, key = 'value') {
  for (let i = 0; i < tree.length; i++) {
    if (tree[i][key] === node[key]) {
      tree.splice(i, 1);
      break;
    } else if (tree[i].children) {
      treeRemoveNode(tree[i].children, node);
    }
  }
}
