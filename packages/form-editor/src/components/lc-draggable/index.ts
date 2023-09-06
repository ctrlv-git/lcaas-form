import { defineComponent, h, computed, onMounted, unref } from 'vue';
import type { PropType } from 'vue';
import { useDraggable, onEvents } from './hooks';

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
  name: 'LcDraggable',
  props: {
    modelValue: {
      type: Array as PropType<RecordObj[]>,
      required: true,
      default: () => [],
    },
    tag: {
      type: [String, Object],
      required: false,
      default: 'div',
    },
    transitionGroupTag: {
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
  setup(props, { slots, emit, expose }) {
    onMounted(() => {
      init();
    });
    const [target, { init, sortableInstance }] = useDraggable({ props, emit });
    expose({
      getInstance: () => unref(sortableInstance),
    });

    return () => {
      // generate children
      const emptyVNode = slots.empty?.();

      const children = computed(() => {
        if (!slots.default) return '';

        const { modelValue } = props;
        // empty
        if (!modelValue.length) {
          return emptyVNode;
        }

        return modelValue.map((val) => slots.default?.({ element: val }));
      });

      // render
      const { tag = 'div', transitionGroupTag = 'div' } = props;
      const attr = { ref: target };
      if (typeof tag === 'string') {
        return h(tag, attr, unref(children));
      }
      if (tag.name === 'TransitionGroup') {
        attr['tag'] = transitionGroupTag;
      }
      return h(tag, attr, { default: () => unref(children) });
    };
  },
});
