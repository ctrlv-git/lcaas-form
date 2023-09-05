import { parsePath } from '@/utils/utils';
const componenSlots = {};

const slotsFiles: any = import.meta.glob('./*.ts', { eager: true });

Object.keys(slotsFiles).forEach((key) => {
  const slots = slotsFiles[key].default || {};
  const { name } = parsePath(key);
  componenSlots[name] = slots;
});

export { componenSlots };
