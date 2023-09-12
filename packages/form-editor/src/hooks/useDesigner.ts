import { getUUID, getUniqueId, OperationLog } from '@/utils';
import { defaultFromGrid, defaultFromGlobal } from '@/config';
import type { Ref } from 'vue';

export type FormDesigner = {
  undo(): void;
  redo(): void;
  preview(d: any): void;
  empty(): void;
  save(): void;
  getConf(): FormConfig;
  getActiveWidget(d: any): void;
  setActiveWidget(d: any): void;
  copyWidget(d: any): void;
  deleteWidget(i: number): void;
  storage(): void;
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
    name: '',
    fromGrid: defaultFromGrid,
    fromGlobal: defaultFromGlobal,
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
    preview(state) {
      state.value = true;
    },
    empty() {
      if (formConfig.value.items.length) {
        formConfig.value.items = [];
        designer.storage();
      }
    },
    save() {
      console.log('widgets-Config', formData.value, formConfig.value);
    },
    getConf() {
      return formConfig.value;
    },
    getActiveWidget() {
      return activeWidget;
    },
    setActiveWidget(element) {
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
