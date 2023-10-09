export const common = [
  {
    __vModel__: '__vModel__',
    label: '字段名',
    tag: 'n-input',
    tagType: 'Input',
    __layout__: {},
    __config__: {
      placeholder: '请输入字段名',
      required: true,
    },
    __slot__: {},
    __rules__: [],
  },
  {
    __vModel__: 'label',
    label: '标题',
    tag: 'n-input',
    tagType: 'Input',
    __layout__: {},
    __config__: {
      placeholder: '请输入标题',
      required: true,
    },
    __slot__: {},
    __rules__: [],
  },
  {
    __vModel__: '__layout__.span',
    label: '表单栅格',
    tag: 'n-slider',
    tagType: 'Slider',
    __layout__: {},
    __config__: {
      min: 1,
      max: 24,
    },
    __slot__: {},
    __rules__: [],
  },
  {
    __vModel__: '__layout__.showLabel',
    label: '展示标签',
    tag: 'n-switch',
    tagType: 'Switch',
    __layout__: {},
    __config__: {
      'default-value': true,
    },
    __slot__: {},
    __rules__: [],
  },
  {
    __vModel__: '__layout__.labelPlacement',
    label: '标签位置',
    tag: 'n-radio-group',
    tagType: 'Radio',
    __layout__: {},
    __config__: {
      'default-value': 'left',
    },
    __slot__: {
      default: {
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
    __rules__: [],
  },
  {
    __vModel__: '__layout__.labelAlign',
    label: '标签对齐',
    tag: 'n-radio-group',
    tagType: 'Radio',
    __layout__: {},
    __config__: {
      'default-value': 'left',
    },
    __slot__: {
      default: {
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
    __rules__: [],
  },
  {
    __vModel__: '__layout__.labelWidth',
    label: '标签宽度',
    tag: 'input-unit',
    tagType: 'Input',
    __layout__: {},
    __config__: {
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
    __slot__: {},
    __rules__: [],
  },

  {
    __vModel__: '__config__.defaultValue',
    label: '默认值',
    tag: 'n-input',
    tagType: 'Input',
    __layout__: {},
    __config__: {
      clearable: true,
    },
    __slot__: {},
    __rules__: [],
  },
  {
    __vModel__: '__config__.disabled',
    label: '禁用',
    tag: 'n-switch',
    tagType: 'Switch',
    __layout__: {},
    __config__: {},
    __slot__: {},
    __rules__: [],
  },
];
export const rules = [
  {
    __uuid__: '__config__.required',
    __vModel__: '__config__.required',
    label: '是否必填',
    tag: 'n-switch',
    tagType: 'Switch',
    __layout__: {},
    __config__: {},
    __slot__: {},
    __rules__: [],
    __emits__: {
      '__layout__.showRequireMark'(val, conf: FormItem) {
        conf.__layout__.showRequireMark = val;
      },
    },
  },
  {
    __uuid__: '__layout__.showRequireMark',
    __vModel__: '__layout__.showRequireMark',
    label: '展示星号',
    tag: 'n-switch',
    tagType: 'Switch',
    __layout__: {},
    __config__: {},
    __slot__: {},
    __rules__: [],
    __emits__: {
      '__config__.required'(val, conf: FormItem) {
        conf.__layout__.showRequireMark = val;
      },
    },
  },
  {
    __uuid__: '__rules__',
    __vModel__: '__rules__',
    label: '添加规则',
    tag: 'WidgetRegExp',
    tagType: 'Custom',
    __layout__: {},
    __config__: {},
    __slot__: {},
    __rules__: [],
    __emits__: {},
  },
];
