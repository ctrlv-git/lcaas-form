import { getUUID, getUniqueId, OperationLog } from '@/utils';

import type { Ref } from 'vue';

export type FormDesigner = {
  undo(): void;
  redo(): void;
  preview(): void;
  empty(): void;
  save(): void;
  activeWidget(d: any): void;
  copyWidget(d: any): void;
  deleteWidget(i: number): void;
  storage(): void;
  //   go(): void;
};

type FormObj = {
  elFormRef: Ref<any>;
  formData: Ref<any>;
  formConfig: Ref<FormConfig>;
  activeWidget: Ref<FormItem | undefined>;
};
export const useDesigner = (): [FormDesigner, FormObj] => {
  const elFormRef = ref<any>();
  const formData = ref<any>({});
  const activeWidget = ref<FormItem>();
  const formConfig = ref<FormConfig>({
    fromGrid: {},
    fromGlobal: {},
    items: [],
  });
  const log = new OperationLog(50);
  const designer: FormDesigner = {
    undo() {
      const data = log.go(-1);
      formConfig.value.items = data;
    },
    redo() {
      const data = log.go(1);
      formConfig.value.items = data;
    },
    preview() {
      console.log('preview-add', log, log.step);
    },
    empty() {
      if (formConfig.value.items.length) {
        formConfig.value.items = [];
        designer.storage();
      }
    },
    save() {
      console.log('widgetsConfig', formData.value, formConfig.value.items);
    },
    activeWidget(element) {
      activeWidget.value = element;
    },
    copyWidget(element) {
      const data = {
        ...element,
        __uuid__: getUUID(),
        __vModel__: getUniqueId(element.tag),
      };
      formConfig.value.items.push(data);
    },
    deleteWidget(index) {
      formConfig.value.items.splice(index, 1);
      designer.storage();
    },
    storage() {
      log.push(formConfig.value.items);
    },
  };

  return [designer, { formData, formConfig, elFormRef, activeWidget }];
};
