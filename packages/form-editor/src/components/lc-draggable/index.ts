import type { PropType } from 'vue';
import { defineComponent, h, onMounted, resolveComponent, unref } from 'vue';
import { onEvents, useDraggable } from './hooks';
import { isHtmlTag } from './utils';

const attrsName = [
  'group',
  'handle',
  'filter',
  'draggable',
  'dataIdAttr',
  'sort',
  'delay',
  'delayOnTouchOnly',
  'touchStartThreshold',
  'disabled',
  'store',
  'animation',
  'easing',
  'preventOnFilter',
  'ghostClass',
  'chosenClass',
  'dragClass',
  'swapThreshold',
  'invertSwap',
  'invertedSwapThreshold',
  'direction',
  'forceFallback',
  'fallbackClass',
  'fallbackOnBody',
  'fallbackTolerance',
  'dragoverBubble',
  'removeCloneOnHide',
  'emptyInsertThreshold',
] as const;

type SortableAttr = {
  [k in (typeof attrsName)[number]]: any;
};

type RecordObj = Record<string, any>;

export const LcDraggable = defineComponent({
  name: 'LDraggable',
  props: {
    modelValue: {
      type: Array as PropType<RecordObj[]>,
      required: true,
      default: () => [],
    },
    tag: {
      type: String,
      required: false,
      default: 'div',
    },
    config: {
      type: Object as PropType<Partial<SortableAttr>>,
      required: false,
      default: undefined,
    },
    ...onEvents,
  },
  emits: ['update:modelValue'],
  setup(props, { slots, emit, attrs, expose }) {
    const { tag: tagName } = props;
    const isTag = isHtmlTag(tagName);
    let tag: any = tagName;
    if (!isTag) {
      tag = resolveComponent(tagName);
    }
    //
    const [ref, { init, sortableInstance }] = useDraggable({ props, emit });

    onMounted(() => {
      init();
    });

    expose({
      getInstance: () => unref(sortableInstance),
    });
    return () => {
      const { modelValue } = props;
      // generate empty children
      let children: any = isTag ? slots.empty?.() : () => slots.empty?.();
      // generate  children
      if (modelValue.length) {
        children = isTag ? slots.default?.() : () => slots.default?.();
      }

      return h(tag, { ...attrs, ref }, children);
    };
  },
});
