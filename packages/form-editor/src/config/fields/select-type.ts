import eventBus from '@/hooks/useEventBus';
export const Select = [
  {
    label: '占位提示',
    path: '__config__.placeholder',
    component: 'n-input',
    props: {
      clearable: true,
    },
  },
  {
    label: '是否过滤',
    path: '__config__.filterable',
    component: 'n-switch',
  },
  {
    label: '动态选项',
    path: '__config__.tag',
    component: 'n-switch',
    props: {},
    emits: {
      linkFilterable(val, conf: FormItem) {
        conf.__config__.filterable = val;
      },
    },
  },
  {
    label: '能否清空',
    path: '__config__.clearable',
    component: 'n-switch',
    props: {},
  },
  {
    label: '是否多选',
    path: '__config__.multiple',
    component: 'n-switch',
    props: {},
  },
  {
    label: '标签数自适应',
    hidden: (widget) => {
      const {
        __config__: { multiple },
      } = widget;
      return !!multiple;
    },
    path: '__config__.maxTagCount',
    component: 'n-checkbox',
    props: {
      checkedValue: 'responsive',
      uncheckedValue: null,
    },
  },
];
export const Cascader = [
  {
    label: '占位提示',
    path: '__config__.placeholder',
    component: 'n-input',
    props: {
      clearable: true,
    },
  },
  {
    label: '勾选策略',
    path: '__config__.checkStrategy',
    component: 'n-radio-group',
    props: {
      defaultValue: 'all',
    },
    slot: {
      type: 'button',
      space: {},
      options: [
        {
          value: 'all',
          label: '全部',
        },
        {
          value: 'parent',
          label: '父节点',
        },
        {
          value: 'child',
          label: '子节点',
        },
      ],
    },
  },
  {
    label: '显示路径',
    path: '__config__.showPath',
    component: 'n-switch',
    props: {
      defaultValue: true,
    },
  },
  //   {
  //     label: '展开方式',
  //     path: '__config__.expandTrigger',
  //     component: 'n-radio-group',
  //     props: {
  //       defaultValue: 'all',
  //     },
  //     slot: {
  //       type: 'click',
  //       space: {},
  //       options: [
  //         {
  //           value: 'click',
  //           label: 'click',
  //         },
  //         {
  //           value: 'hover',
  //           label: 'hover',
  //         },
  //       ],
  //     },
  //   },
  {
    label: '是否过滤',
    path: '__config__.filterable',
    component: 'n-switch',
    props: {},
  },
  {
    label: '能否清空',
    path: '__config__.clearable',
    component: 'n-switch',
    props: {},
  },
  // 多选
  {
    label: '是否多选',
    path: '__config__.multiple',
    component: 'n-switch',
    props: {},
  },
  {
    label: '标签数自适应',
    hidden: (widget) => {
      const {
        __config__: { multiple },
      } = widget;
      return !!multiple;
    },
    path: '__config__.maxTagCount',
    component: 'n-checkbox',
    props: {
      checkedValue: 'responsive',
      uncheckedValue: null,
    },
  },
  {
    label: '关联选项',
    path: '__config__.cascade',
    hidden: (widget) => {
      const {
        __config__: { multiple },
      } = widget;
      return !!multiple;
    },
    component: 'n-switch',
    props: {
      defaultValue: true,
    },
  },
];
export const Radio = [
  {
    label: '选项样式',
    path: '__slot__.default.type',
    component: 'n-radio-group',
    props: {
      defaultValue: 'radio',
    },
    slot: {
      type: 'button',
      space: {},
      options: [
        {
          value: 'radio',
          label: '默认',
        },
        {
          value: 'button',
          label: '按钮',
        },
      ],
    },
  },
];
export const Checkbox = [
  {
    label: '最大数量',
    path: '__config__.max',
    component: 'n-input-number',
    props: {
      clearable: true,
      buttonPlacement: 'both',
      min: 1,
      setp: 1,
    },
  },
  {
    label: '最小数量',
    path: '__config__.min',
    component: 'n-input-number',
    props: {
      clearable: true,
      buttonPlacement: 'both',
      min: 1,
      setp: 1,
    },
  },
];
export const Switch = [
  {
    label: '开启描述',
    path: '__slot__.checked',
    component: 'n-input',
    props: {
      clearable: true,
    },
  },
  {
    label: '关闭描述',
    path: '__slot__.unchecked',
    component: 'n-input',
    props: {
      clearable: true,
    },
  },
  {
    label: '是否圆形',
    path: '__config__.round',
    component: 'n-switch',
    props: {
      defaultValue: true,
    },
  },
  {
    label: '按钮动画',
    path: '__config__.rubberBand',
    component: 'n-switch',
    props: {
      defaultValue: true,
    },
  },
];
export const Slider = [
  {
    label: '最大值',
    path: '__config__.max',
    component: 'n-input-number',
    props: {
      defaultValue: 100,
      buttonPlacement: 'both',
    },
  },
  {
    label: '最小值',
    path: '__config__.min',
    component: 'n-input-number',
    props: {
      defaultValue: 1,
      buttonPlacement: 'both',
    },
  },
  {
    label: '步长',
    path: '__config__.step',
    component: 'n-input-number',
    props: {
      defaultValue: 1,
      buttonPlacement: 'both',
    },
  },
  //   {
  //     label: '是否倒转',
  //     path: '__config__.reverse',
  //     component: 'n-switch',
  //     props: {
  //       defaultValue: true,
  //     },
  //   },
  {
    label: '范围选择',
    path: '__config__.range',
    component: 'n-switch',
    props: {
      defaultValue: false,
    },
    emits: {
      changeDefaultValue(state, conf: FormItem) {
        const { __config__ } = conf;
        const { max, min } = __config__;
        const defaultValue = state ? [min || 0, max || 100] : min;
        __config__.defaultValue = defaultValue;
        eventBus.$emit('slider:range', conf);
      },
    },
  },
];
export const Date = [
  {
    label: '占位提示',
    path: '__config__.placeholder',
    component: 'n-input',
    props: {
      clearable: true,
    },
  },
  {
    label: '日期类型',
    path: '__config__.type',
    component: 'n-select',
    props: {
      defaultValue: 'date',
      options: [
        { label: '日期时间(datetime)', value: 'datetime' },
        { label: '日(date)', value: 'date' },
        { label: '月(month)', value: 'month' },
        { label: '年(year)', value: 'year' },
        { label: '季度(quarter)', value: 'quarter' },
        // { label: 'daterange', value: 'daterange' },
        // { label: 'datetimerange', value: 'datetimerange' },
        // { label: 'monthrange', value: 'monthrange' },
      ],
    },
  },
  {
    label: '时间格式',
    path: '__config__.valueFormat',
    component: 'n-input',
    props: {},
  },
  //   {
  //     label: '禁用时间',
  //     path: '__config__.clearable',
  //     props: {
  //       defaultValue: 'right',
  //     },
  //     slot: {
  //       type: 'button',
  //       space: {},
  //       options: [
  //         {
  //           value: '过去',
  //           label: '过去',
  //         },
  //         {
  //           value: '未来',
  //           label: '未来',
  //         },
  //       ],
  //     },
  //   },
  {
    label: '能否清空',
    path: '__config__.clearable',
    component: 'n-switch',
    props: {},
  },
  {
    label: '禁用输入框',
    path: '__config__.inputReadonly',
    component: 'n-switch',
    props: {},
  },
];
export const Time = [
  {
    label: '占位提示',
    path: '__config__.placeholder',
    component: 'n-input',
    props: {
      clearable: true,
    },
  },
  {
    label: '时间格式',
    path: '__config__.valueFormat',
    component: 'n-input',
    props: {},
  },
  {
    label: '能否清空',
    path: '__config__.clearable',
    component: 'n-switch',
    props: {},
  },
  {
    label: '禁用输入框',
    path: '__config__.inputReadonly',
    component: 'n-switch',
    props: {},
  },
];
export const Rate = [
  {
    label: '允许半选',
    path: '__config__.allowHalf',
    component: 'n-switch',
    props: {},
  },
  {
    label: '前图标',
    path: '__config__.color',
    component: 'n-color-picker',
    props: {
      defaultValue: '#FFCC33',
    },
  },
  {
    label: '图标个数',
    path: '__config__.count',
    component: 'n-input-number',
    props: {
      defaultValue: 5,
      clearable: true,
      buttonPlacement: 'both',
      min: 1,
      precision: 0,
      setp: 1,
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
export const Color = [
  {
    label: '展示透明度',
    path: '__config__.showAlpha',
    component: 'n-switch',
    props: {
      defaultValue: true,
    },
  },
  {
    label: '展示预览块',
    path: '__config__.showPreview',
    component: 'n-switch',
    props: {},
  },
  {
    label: '支持颜色格式',
    path: '__config__.modes',
    component: 'n-checkbox-group',
    props: {
      defaultValue: ['rgb', 'hex', 'hsl'],
    },
    slot: {
      space: {},
      options: [
        { label: 'rgb', value: 'rgb' },
        { label: 'hex', value: 'hex' },
        { label: 'hsl', value: 'hsl' },
        { label: 'hsv', value: 'hsv' },
      ],
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
