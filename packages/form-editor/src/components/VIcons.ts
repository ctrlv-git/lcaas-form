import * as ionicons5 from '@vicons/ionicons5';
import { NIcon, NGi, NGrid } from 'naive-ui';
import { h } from 'vue';
import { chunkArray } from '@/utils';
const vicons = Object.values(ionicons5);
console.log('VIcons');

export default defineComponent({
  name: 'VIcons',
  emits: ['select'],
  setup(props, { emit }) {
    const children = shallowRef<any[]>([]);
    const arr = chunkArray(Object.values(vicons), 200);
    const render = () => {
      children.value = [...children.value, ...(arr.shift() as any)];
      console.log('arr.length', arr.length);
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
