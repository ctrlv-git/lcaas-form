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
