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
    label: '能否清空',
    path: '__config__.clearable',
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
    label: '占位提示',
    path: '__config__.placeholder',
    component: 'n-input',
    props: {
      clearable: true,
    },
  },
  {
    label: '最小行数',
    path: '__config__.autosize.minRows',
    component: 'n-input-number',
    props: {
      defaultValue: 3,
      buttonPlacement: 'both',
      min: 1,
      max: 99,
      step: 0,
    },
  },
  {
    label: '最大行数',
    path: '__config__.autosize.maxRows',
    component: 'n-input-number',
    props: {
      defaultValue: 3,
      buttonPlacement: 'both',
      min: 1,
      max: 99,
      step: 0,
    },
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
    label: '显示字数',
    path: '__config__.showCount',
    component: 'n-switch',
    props: {},
  },
  {
    label: '能否清空',
    path: '__config__.clearable',
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
export const password = [
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
    label: '关闭图标',
    path: '__slot__.default.password-invisible-icon',
    component: 'SelectIcon',
    props: {
      placeholder: '密码关闭时图标',
    },
  },
  {
    label: '打开图标',
    path: '__slot__.default.password-visible-icon',
    component: 'SelectIcon',
    props: {
      placeholder: '密码打开时图标',
    },
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
    label: '是否圆角',
    path: '__config__.round',
    component: 'n-switch',
    props: {},
  },
  {
    label: '能否清空',
    path: '__config__.clearable',
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

export const number = [
  {
    label: '占位提示',
    path: '__config__.placeholder',
    component: 'n-input',
    props: {
      clearable: true,
    },
  },
  {
    label: '前图标',
    path: '__slot__.prefix',
    component: 'SelectIcon',
    props: {},
  },
  {
    label: '后图标',
    path: '__slot__.suffix',
    component: 'SelectIcon',
    props: {},
  },
  {
    label: '增加按钮',
    path: '__slot__.add-icon',
    component: 'SelectIcon',
    props: {
      placeholder: '增加按钮的图标',
    },
  },
  {
    label: '减少按钮',
    path: '__slot__.minus-icon',
    component: 'SelectIcon',
    props: {
      placeholder: '减少按钮的图标',
    },
  },
  {
    label: '最大值',
    path: '__config__.max',
    component: 'n-input',
    props: {
      clearable: true,
      allowInput: (val) => !val || /^[-]?\d+(\.\d+)?$/.test(val),
    },
  },
  {
    label: '最小值',
    path: '__config__.min',
    component: 'n-input',
    props: {
      clearable: true,
      allowInput: (val) => !val || /^[-]?\d+(\.\d+)?$/.test(val),
    },
  },
  {
    label: '步长',
    path: '__config__.step',
    component: 'n-input-number',
    props: {
      clearable: true,
      buttonPlacement: 'both',
      min: 1,
      setp: 1,
    },
  },
  {
    label: '精度',
    path: '__config__.precision',
    component: 'n-input-number',
    props: {
      clearable: true,
      buttonPlacement: 'both',
      min: 0,
      max: 9,
      setp: 1,
    },
  },

  {
    label: '显示按钮',
    path: '__config__.showButton',
    component: 'n-switch',
    props: {
      defaultValue: true,
    },
  },
  {
    label: '按钮位置',
    path: '__config__.buttonPlacement',
    component: 'n-radio-group',
    props: {
      defaultValue: 'right',
    },
    slot: {
      type: 'button',
      space: {},
      options: [
        {
          value: 'both',
          label: '两边',
        },
        {
          value: 'right',
          label: '右侧',
        },
      ],
    },
  },
  {
    label: '显示边框',
    path: '__config__.bordered',
    component: 'n-switch',
    props: {
      defaultValue: true,
    },
  },
  {
    label: '能否清空',
    path: '__config__.clearable',
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
