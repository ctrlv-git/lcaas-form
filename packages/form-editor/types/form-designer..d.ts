import type { FormProps, GridProps } from 'naive-ui';
export {};
declare global {
  type FormItem = {
    __uuid__: string;
    __vModel__: string;
    label: string;
    tag: string;
    tagType: string;
    __layout__: Record<string, any>;
    __config__: Record<string, any>;
    __slot__: Record<string, any>;
    __rules__: Record<string, any>[];
  };
  type FormConfig = {
    name: string;
    fromGrid: GridProps;
    fromGlobal: FormProps;
    items: FormItem[];
    id?: string;
  };
  type LabelValue = {
    label: string;
    value: any;
  };
}
