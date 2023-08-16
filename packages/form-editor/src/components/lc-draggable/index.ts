import { defineComponent, h, TransitionGroup, computed, onMounted, unref } from 'vue';
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
    itemKey: {
      type: String,
      required: true,
      default: '',
    },
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
    transitionGroup: {
      type: Object as PropType<RecordObj>,
      required: false,
      default: undefined,
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
      const children = computed(() => {
        if (!slots.default) return '';
        const { modelValue, itemKey } = props;
        return modelValue.map((val) => h('div', { key: val[itemKey] }, slots.default?.({ element: val })));
      });

      // render
      if (props.transitionGroup) {
        const { tag = 'div', ...transitionGroup } = props.transitionGroup || {};
        return h(TransitionGroup, { ref: target, tag, ...transitionGroup }, { default: () => unref(children) });
      } else {
        return h(props.tag || 'div', { ref: target }, unref(children));
      }
    };
  },
});
