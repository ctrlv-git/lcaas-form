export const sizesEnum = [
  {
    value: 'small',
    label: '较小',
  },
  {
    value: 'medium',
    label: '中等',
  },
  {
    value: 'large',
    label: '较大',
  },
];

export const labelPlacementEnum = [
  {
    value: 'left',
    label: '左置',
  },
  {
    value: 'top',
    label: '上置',
  },
];
export const labelAlignEnum = [
  {
    value: 'left',
    label: '左对齐',
  },
  {
    value: 'right',
    label: '右对齐',
  },
];
export const pixelEnum = ['px', 'em'];

export const markPlacementEnum = [
  {
    value: 'left',
    label: '左侧',
  },
  {
    value: 'right',
    label: '右侧',
  },
  {
    value: 'right-hanging',
    label: '右侧悬挂',
  },
];
export const patternEnum = [
  { value: '/^[-]?\\d+(\\.\\d+)?$/', label: '数字' },
  { value: '/^[A-Za-z]+$/', label: '字母' },
  { value: '/^[A-Za-z0-9]+$/', label: '数字字母' },
  { value: '/^[1][0-9]{10}$/', label: '手机号码' },
  { value: '/w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*/', label: '邮箱' },
  {
    value: '/^https?://(([a-zA-Z0-9_-])+(.)?)*(:d+)?(/((.)?(?)?=?&?[a-zA-Z0-9_-](?)?)*)*$/i',
    label: '网址',
  },
  { value: '/^[^\u4e00-\u9fa5]+$/', label: '非中文字符' },
  { value: '/^[\u4e00-\u9fa5]+$/', label: '仅中文字符' },
];
