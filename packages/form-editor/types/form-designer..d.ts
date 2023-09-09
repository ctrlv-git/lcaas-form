import type { FormProps, GridProps } from 'naive-ui';
export {};
declare global {
  declare type FormItem = {
    __uuid__: string;
    __vModel__: string;
    label: string;
    tag: string;
    __layout__: Record<string, any>;
    __config__: Record<string, any>;
    __slot__: Record<string, any>;
  };
  declare type FormConfig = {
    name: string;
    fromGrid: GridProps;
    fromGlobal: FormProps;
    items: FormItem[];
    id?: string;
  };
}
