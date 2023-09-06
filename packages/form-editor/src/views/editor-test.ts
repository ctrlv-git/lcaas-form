export const list = [
  {
    // 类型
    label: '文本输入',
    tag: 'n-input',
    icon: 'button',
    // id
    __uuid__: 1,
    // 布局
    __layout__: {
      span: 6,
      'show-feedback': true,
      'label-placement': 'left',
    },
    // 属性
    __config__: {},
    // 插槽
    __slot__: {
      prefix: 'prefix-文字',
      suffix: '',
    },
    // 表单路径
    __vModel__: 'input',
  },
  {
    // 类型
    label: '文本输入-password',
    tag: 'n-input',
    icon: 'button',
    // id
    __uuid__: 11,
    // 布局
    __layout__: {
      span: 6,

      'show-feedback': true,
      'label-placement': 'left',
    },
    // 属性
    __config__: {
      type: 'password',
    },
    // 插槽
    __slot__: {
      prefix: 'prefix-文字',
      suffix: '',
    },
    // 表单路径
    __vModel__: 'password',
  },
  {
    // 类型
    label: '文本输入-textarea',
    tag: 'n-input',
    icon: 'button',
    // id
    __uuid__: 111,
    // 布局
    __layout__: {
      span: 6,

      'show-feedback': true,
      'label-placement': 'left',
    },
    // 属性
    __config__: {
      type: 'textarea',
    },
    // 插槽
    __slot__: {
      prefix: 'prefix-文字',
      suffix: '',
    },
    // 表单路径
    __vModel__: 'textarea',
  },
  {
    // id
    __uuid__: 1111,
    // 类型
    label: '数字输入',
    tag: 'n-input-number',
    icon: 'button',
    // 布局
    __layout__: {
      span: 6,
      size: 'large',
      'show-feedback': true,
      'label-placement': 'left',
    },
    // 属性
    // __config__: {},
    // 插槽
    __slot__: {
      prefix: '数字输入',
      'add-icon': '+',
    },
    // 表单路径
    __vModel__: 'number',
  },
  {
    // 类型
    label: '选择器',
    tag: 'n-select',
    icon: 'button',
    // id
    __uuid__: 2,
    // 布局
    __layout__: {
      span: 6,
      size: 'medium',
      'show-feedback': true,
      'label-placement': 'left',
    },
    // 属性
    __config__: {
      options: [
        {
          label: 'Think For Yourself',
          value: 'song5',
        },
        {
          label: 'The Word',
          value: 'song6',
        },
        {
          label: 'Michelle',
          value: 'song7',
          disabled: true,
        },
      ],
    },
    // 插槽
    __slot__: {},
    // 表单路径
    __vModel__: 'select',
  },
  {
    // id
    __uuid__: 22,
    __vModel__: 'cascader',
    // 类型
    label: '级联选择',
    tag: 'n-cascader',
    icon: 'button',
    // 布局
    __layout__: {
      span: 6,
      size: 'medium',
      'show-feedback': true,
      'label-placement': 'left',
    },
    // 属性
    __config__: {
      options: [
        {
          label: 'Think For Yourself',
          value: 'song5',
          children: [
            {
              label: 'Yourself-1',
              value: 'song5-5',
            },
          ],
        },
        {
          label: 'The Word',
          value: 'song6',
        },
        {
          label: 'Michelle',
          value: 'song7',
          disabled: true,
        },
      ],
    },
    // 插槽
    __slot__: {},
  },
  {
    // id
    __uuid__: 222,
    __vModel__: 'radio',
    // 类型
    label: '单选',
    tag: 'n-radio-group',
    icon: 'button',
    // 布局
    __layout__: {
      span: 6,
      size: 'medium',
      'show-feedback': true,
      'label-placement': 'left',
    },
    // 属性
    __config__: {},
    // 插槽
    __slot__: {
      default: {
        type: 'button',
        space: {
          vertical: true,
        },
        options: [
          {
            label: 'Think For Yourself',
            value: 'song5',
          },
          {
            label: 'The Word',
            value: 'song6',
          },
          {
            label: 'Michelle',
            value: 'song7',
            disabled: true,
          },
        ],
      },
    },
    // 表单路径
  },
  //   {
  //     // id
  //     __uuid__: 2222,
  //     __vModel__: 'checkbox',
  //     // 类型
  //     label: '复选框',
  //     tag: 'n-checkbox-group',
  //     icon: 'button',
  //     // 布局
  //     __layout__: {
  //       span: 6,
  //       size: 'medium',
  //       'show-feedback': true,
  //       'label-placement': 'left',
  //     },
  //     // 属性
  //     __config__: {},
  //     // 插槽
  //     __slot__: {
  //       default: {
  //         type: 'button',
  //         space: {
  //           vertical: true,
  //         },
  //         options: [
  //           {
  //             label: 'Think For Yourself',
  //             value: 'song5',
  //           },
  //           {
  //             label: 'The Word',
  //             value: 'song6',
  //           },
  //           {
  //             label: 'Michelle',
  //             value: 'song7',
  //             disabled: true,
  //           },
  //         ],
  //       },
  //     },
  //   },
  //   {
  //     // id
  //     __uuid__: 3,
  //     __vModel__: 'switch',
  //     // 类型
  //     label: '开关',
  //     tag: 'n-switch',
  //     icon: 'button',
  //     // 布局
  //     __layout__: {
  //       span: 2,
  //       'show-feedback': true,
  //       'label-placement': 'left',
  //     },
  //     // 属性
  //     __config__: {},
  //     // 插槽
  //     __slot__: {
  //       checked: '是',
  //       unchecked: '否',
  //     },
  //   },
  //   {
  //     // id
  //     __uuid__: 4,
  //     __vModel__: 'slider',
  //     // 类型
  //     label: '滑动选择',
  //     tag: 'n-slider',
  //     icon: 'button',
  //     // 布局
  //     __layout__: {
  //       span: 6,
  //       'show-feedback': true,
  //       'label-placement': 'left',
  //     },
  //     // 属性
  //     __config__: {
  //       max: 20,
  //     },
  //     // 插槽
  //     __slot__: {
  //       checked: '是',
  //       unchecked: '否',
  //     },
  //   },
  //   {
  //     // id
  //     __uuid__: 5,
  //     __vModel__: 'date',
  //     // 类型
  //     label: '日期选择器',
  //     tag: 'n-date-picker',
  //     icon: 'button',
  //     // 布局
  //     __layout__: {
  //       span: 6,
  //       'show-feedback': true,
  //       'label-placement': 'left',
  //     },
  //     // 属性
  //     __config__: {
  //       max: 20,
  //     },
  //     // 插槽
  //     __slot__: {
  //       checked: '是',
  //       unchecked: '否',
  //     },
  //   },
  {
    // id
    __uuid__: 5,
    __vModel__: 'time',
    // 类型
    label: '时间选择器',
    tag: 'n-time-picker',
    icon: 'button',
    // 布局
    __layout__: {
      span: 6,
      'show-feedback': true,
      'label-placement': 'left',
    },
    // 属性
    __config__: {
      max: 20,
    },
    // 插槽
    __slot__: {
      checked: '是',
      unchecked: '否',
    },
  },
  {
    // id
    __uuid__: 6,
    __vModel__: 'rate',
    // 类型
    label: '评分',
    tag: 'n-rate',
    icon: 'button',
    // 布局
    __layout__: {
      span: 6,
      'show-feedback': true,
      'label-placement': 'left',
    },
    // 属性
    __config__: {
      max: 20,
    },
    // 插槽
    __slot__: {
      default: '是',
    },
  },
  {
    // id
    __uuid__: 77,
    __vModel__: 'color',
    // 类型
    label: '评分',
    tag: 'n-color-picker',
    icon: 'button',
    // 布局
    __layout__: {
      span: 2,
      'show-feedback': true,
      'label-placement': 'left',
    },
    // 属性
    __config__: {
      max: 20,
    },
    // 插槽
    __slot__: {
      default: '是',
    },
  },
];
