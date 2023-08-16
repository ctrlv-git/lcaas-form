export {};
declare global {
  declare type PadStartCamel<P extends string, T = string> = T extends string ? `${P}${Capitalize<T>}` : T;
}
