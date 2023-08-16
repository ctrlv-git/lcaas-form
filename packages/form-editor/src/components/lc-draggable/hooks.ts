import { cloneDeep } from 'lodash-es';
import Sortable from 'sortablejs';
import type { Ref, VNodeRef } from 'vue';
import { ref, unref, toRefs } from 'vue';
import { removeNode, sortableConfig } from './utils';

const dragDataKey = Symbol('dragData');
const eventsName = [
  'setData',
  'chooseData',
  'onChoose',
  'onUnchoose',
  'onStart',
  'onEnd',
  'onAdd',
  'onUpdate',
  'onSort',
  'onRemove',
  'onFilter',
  'onMove',
  'onClone',
  'onChange',
] as const;

type SortableMethod = {
  [k in (typeof eventsName)[number]]: (...arg) => any;
};
type SortableInstance = InstanceType<typeof Sortable>;
type UseDraggableReturn = [VNodeRef, { init: () => void; sortableInstance: Ref<SortableInstance> }];
//
export const onEvents = eventsName.reduce((previous, name) => {
  previous[name] = Function;
  return previous;
}, {} as SortableMethod);

export function useDraggable({ props, emit }): UseDraggableReturn {
  const target = ref();
  const { modelValue } = toRefs(props);
  const sortableInstance = ref<SortableInstance>();

  function init() {
    if (unref(sortableInstance)) unref(sortableInstance).destroy();
    const dragValue = cloneDeep(modelValue.value);

    let el = unref(target);
    if (props.transitionGroup) {
      el = el.$el;
    }

    const defaultMethons = {
      onAdd(event) {
        // 添加
        const { pullMode, newIndex } = event;
        if (pullMode) {
          const chooseData = event.item[dragDataKey];

          dragValue.splice(newIndex, 0, chooseData);
          removeNode(event.item);
          emit('update:modelValue', cloneDeep(dragValue));
        }
      },
      onRemove(event) {
        // 移出
        const { pullMode } = event;
        if (pullMode === true) {
          dragValue.splice(event.oldIndex, 1);
          emit('update:modelValue', cloneDeep(dragValue));
        }
      },
      onEnd(event) {
        const { pullMode, oldIndex, newIndex } = event;
        if (!pullMode) {
          // 排序
          const data = dragValue.splice(oldIndex, 1);
          dragValue.splice(newIndex, 0, ...data);
          emit('update:modelValue', cloneDeep(dragValue));
        }
      },
    };
    const bindEvents = eventsName
      .filter((name) => props[name])
      .reduce((previous, name) => {
        previous[name] = props[name];
        return previous;
      }, {} as SortableMethod);

    sortableInstance.value = new Sortable(el, {
      ...sortableConfig,
      ...props.config,
      ...defaultMethons,
      ...bindEvents,
      onChoose(event) {
        let chooseData = dragValue[event.oldIndex];
        if (bindEvents.chooseData) {
          chooseData = bindEvents.chooseData(chooseData, event.oldIndex);
        }
        event.item[dragDataKey] = chooseData;
      },
    });
  }

  return [target, { init, sortableInstance }];
}
