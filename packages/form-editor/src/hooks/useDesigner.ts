import { defaultFromGlobal, defaultFromGrid } from '@/config';
import { OperationLog, getUUID, getUniqueId } from '@/utils';
import { cloneDeep } from 'lodash-es';
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
    name: 'naiveui 表单',
    fromGrid: defaultFromGrid,
    fromGlobal: defaultFromGlobal,
    items: [],
  });
  // 历史记录
  const history = new OperationLog(50);
  const designer: FormDesigner = {
    undo() {
      const data = history.go(-1);
      unref(formConfig).items = data;
    },
    redo() {
      const data = history.go(1);
      unref(formConfig).items = data;
    },
    preview(callback) {
      callback(true);
    },
    empty() {
      if (unref(formConfig).items.length) {
        activeWidget.value = undefined;
        unref(formConfig).items = [];
        designer.storage();
      }
    },
    save() {
      console.log('widgets-Config', formData.value, unref(formConfig));
    },
    getConf() {
      return unref(formConfig);
    },
    getActiveWidget() {
      return activeWidget;
    },
    setActiveWidget(element) {
      activeWidget.value = element;
    },
    copyWidget(element) {
      const data = {
        ...cloneDeep(element),
        __uuid__: getUUID(),
        __vModel__: getUniqueId(element.tag),
      };
      activeWidget.value = data;
      unref(formConfig).items.push(data);
      designer.storage();
    },
    deleteWidget(index) {
      if (unref(activeWidget) === unref(formConfig).items[index]) {
        activeWidget.value = unref(formConfig).items[0];
      }
      unref(formConfig).items.splice(index, 1);
      designer.storage();
    },
    storage() {
      history.push(unref(formConfig).items);
    },
  };

  return [designer, { formData, formConfig, elFormRef, activeWidget }];
};
