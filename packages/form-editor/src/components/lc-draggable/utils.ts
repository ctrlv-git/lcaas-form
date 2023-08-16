export const sortableConfig = {
  //   group: 'name', // or { name: "...", pull: [true, false, 'clone', array], put: [true, false, array] }
  //   filter: '.ignore-elements', // 过滤器，不需要进行拖动的元素
  //   dataIdAttr: 'data-id', // HTML attribute that is used by the `toArray()` method
  //   draggable: '.item', // 允许拖拽的项目类名
  //   handle: '.my-handle', // 格式为简单css选择器的字符串，使列表单元中符合选择器的元素成为拖动的手柄，只有按住拖动手柄才能使列表单元进行拖动

  sort: true, // boolean 定义是否列表单元是否可以在列表容器内进行拖拽排序
  delay: 0, // number 定义鼠标选中列表单元可以开始拖动的延迟时间；
  delayOnTouchOnly: false, // only delay if user is using touch
  touchStartThreshold: 0, // px, how many pixels the point should move before cancelling a delayed drag event
  disabled: false, // boolean 定义是否此sortable对象是否可用，为true时sortable对象不能拖放排序等功能，为false时为可以进行排序，相当于一个开关；
  store: null, // @see Store
  animation: 150, // ms, number 单位：ms，定义排序动画的时间
  easing: 'cubic-bezier(1, 0, 0, 1)', // Easing for animation. Defaults to null. See https://easings.net/ for examples.
  preventOnFilter: true, //  在触发过滤器`filter`的时候调用`event.preventDefault()`

  ghostClass: 'sortable-ghost', // drop placeholder的css类名
  chosenClass: 'sortable-chosen', // 被选中项的css 类名
  dragClass: 'sortable-drag', // 正在被拖拽中的css类名

  swapThreshold: 1, // Threshold of the swap zone
  invertSwap: false, // Will always use inverted swap zone if set to true
  invertedSwapThreshold: 1, // Threshold of the inverted swap zone (will be set to swapThreshold value by default)
  direction: 'horizontal', // 拖拽方向 (默认情况下会自动判断方向)

  forceFallback: false, // 忽略 HTML5拖拽行为，强制回调进行

  fallbackClass: 'sortable-fallback', // 当使用forceFallback的时候，被复制的dom的css类名
  fallbackOnBody: false, // 将cloned DOM 元素挂到body元素上。
  fallbackTolerance: 0, // Specify in pixels how far the mouse should move before it's considered as a drag.

  dragoverBubble: false,
  removeCloneOnHide: true, // 在clone元素不显示时将其删除，而不是将其隐藏
  emptyInsertThreshold: 5,
};

/**
 * @param {Node} node
 */
export function removeNode(node: Node) {
  if (node.parentNode) node.parentNode.removeChild(node);
}
