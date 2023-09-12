export const common = [
  {
    label: '字段名',
    path: '__vModel__',
    component: 'n-input',
    props: {
      maxlength: 100,
    },
  },
  {
    label: '标题',
    path: 'label',
    component: 'n-input',
    props: {
      maxlength: 100,
    },
  },
  {
    label: '表单栅格',
    path: '__layout__.span',
    component: 'n-slider',
    props: {
      min: 1,
      max: 24,
    },
  },
  {
    label: '展示标签',
    path: '__layout__.showLabel',
    component: 'n-switch',
    props: {
      'default-value': true,
    },
  },
  {
    label: '标签位置',
    path: '__layout__.labelPlacement',
    component: 'n-radio-group',
    props: {},
    slot: {
      type: 'button',
      space: {},
      options: [
        {
          value: 'left',
          label: '左置',
        },
        {
          value: 'top',
          label: '上置',
        },
      ],
    },
  },
  {
    label: '标签对齐',
    path: '__layout__.labelAlign',
    component: 'n-radio-group',
    props: {},
    slot: {
      type: 'button',
      space: {},
      options: [
        {
          value: 'left',
          label: '左对齐',
        },
        {
          value: 'right',
          label: '右对齐',
        },
      ],
    },
  },
  {
    label: '标签宽度',
    path: '__layout__.labelWidth',
    component: 'input-unit',
    props: {
      options: [
        {
          value: 'px',
          label: 'px',
        },
        {
          value: 'em',
          label: 'em',
        },
      ],
      clearable: true,
    },
  },

  {
    label: '默认值',
    path: '__config__.defaultValue',
    component: 'n-input',
    props: {
      clearable: true,
    },
  },
  {
    label: '禁用',
    path: '__config__.disabled',
    component: 'n-switch',
    props: {},
  },
];
export const rules = [
  {
    label: '是否必填',
    path: '__config__.required',
    component: 'n-switch',
    props: {},
    emits: {
      linkMark(conf: FormItem, val) {
        conf.__layout__.showRequireMark = val;
      },
    },
  },
  {
    label: '展示星号',
    path: '__layout__.showRequireMark',
    component: 'n-switch',
  },
];