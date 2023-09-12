export const input = [
  {
    label: '占位提示',
    path: '__config__.placeholder',
    component: 'n-input',
    props: {
      clearable: true,
    },
  },
  {
    label: '前缀',
    path: '__slot__.preLabel',
    component: 'n-input',
    props: {
      clearable: true,
    },
  },
  {
    label: '后缀',
    path: '__slot__.sufLabel',
    component: 'n-input',
    props: {
      clearable: true,
    },
  },
  {
    label: '前图标',
    path: '__slot__.default.prefix',
    component: 'SelectIcon',
    props: {},
  },
  {
    label: '后图标',
    path: '__slot__.default.suffix',
    component: 'SelectIcon',
    props: {},
  },
  {
    label: '最大长度',
    path: '__config__.maxlength',
    component: 'input-unit',
    props: {
      suffix: '字符',
      clearable: true,
    },
  },
  {
    label: '能否清空',
    path: '__config__.clearable',
    component: 'n-switch',
    props: {},
  },
  {
    label: '是否圆角',
    path: '__config__.round',
    component: 'n-switch',
    props: {},
  },
  {
    label: '显示字数',
    path: '__config__.showCount',
    component: 'n-switch',
    props: {},
  },
  {
    label: '是否只读',
    path: '__config__.readonly',
    component: 'n-switch',
    props: {},
  },
];
export const textarea = [
  {
    label: '前缀',
    path: '__slot__.prefix',
    component: 'SelectIcon',
    props: {},
  },
  {
    label: '后缀',
    path: '__slot__.suffix',
    component: 'SelectIcon',
    props: {},
  },
];
