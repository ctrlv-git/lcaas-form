import { vicons as ionicons4 } from '@/config';
import { chunkArray } from '@/utils';
import { NGi, NGrid, NIcon } from 'naive-ui';

const vicons = Object.values(ionicons4);

export default defineComponent({
  name: 'VIcons',
  props: {
    size: {
      type: Number,
      default: 100,
    },
  },
  emits: ['select'],
  setup(props, { emit }) {
    const children = shallowRef<any[]>([]);
    const arr = chunkArray(Object.values(vicons), props.size);
    const render = () => {
      children.value = [...children.value, ...(arr.shift() as any)];

      if (arr.length) {
        requestAnimationFrame(() => {
          render();
        });
      }
    };

    onMounted(() => {
      render();
    });

    return () => {
      return h(
        NGrid,
        {
          cols: 10,
          xGap: 2,
          yGap: 2,
        },
        () =>
          children.value.map((component) =>
            h(NGi, {}, () =>
              h(
                'div',
                {
                  class: 'v-icon',
                  onClick() {
                    emit('select', component.name);
                  },
                },
                [
                  h(NIcon, {
                    size: 20,
                    component,
                    depth: 2,
                  }),
                  h(
                    'span',
                    {
                      class: 'v-icon-text',
                      title: component.name,
                    },
                    component.name,
                  ),
                ],
              ),
            ),
          ),
      );
    };
  },
});
