export const refLeftDraggable = Symbol('leftDraggable');
export const refCenterDraggable = Symbol('centerDraggable');

export async function genLeftPanelOptions() {
  const inputType = await import('./widgets/input-type.json');
  const selectType = await import('./widgets/select-type.json');

  return [
    {
      title: '输入型组件',
      list: inputType.default,
    },
    {
      title: '选择型组件',
      list: selectType.default,
    },
  ];
}
