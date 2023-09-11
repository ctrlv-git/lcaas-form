import { vicons as ionicons5 } from '@/config';
import { chunkArray } from '@/utils';
import { NGi, NGrid, NIcon } from 'naive-ui';

const vicons = Object.values(ionicons5);

export default defineComponent({
  name: 'VIcons',
  emits: ['select'],
  setup(props, { emit }) {
    const children = shallowRef<any[]>([]);
    const arr = chunkArray(Object.values(vicons), 200);
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
          cols: 12,
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
