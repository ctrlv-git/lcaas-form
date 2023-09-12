import { unref } from 'vue';
import type { FormItemConf } from '../form-item/index';
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

export function parseRules(arr: FormItemConf[]) {
  if (!unref(arr).length) return {};
  return unref(arr).reduce((previous, current) => {
    const { __vModel__, __config__, label } = current;
    const rules: any[] = [];
    if (__config__.required) {
      rules.push({
        required: true,
        message: `${label}必须填写`,
        trigger: 'blur',
      });
    }
    return {
      ...previous,
      [__vModel__]: rules,
    };
  }, {});
}
