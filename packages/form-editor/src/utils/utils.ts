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
