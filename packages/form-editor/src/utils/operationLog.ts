/**
 * Description 操作日志
 * @param {any} max=100 最大记录数 默认100
 * @returns {any}
 */
import { cloneDeep } from 'lodash-es';
export class OperationLog {
  step = 0;
  max = 0;
  #cache = <any[]>[];
  constructor(max = 100) {
    this.max = max ?? 100;
  }
  get value() {
    return this.#cache[this.step - 1];
  }
  set value(data) {
    this.push(cloneDeep(data));
  }
  undo() {
    return this.go(-1);
  }
  redo() {
    return this.go(1);
  }
  go(step) {
    step = this.step + step;
    step = Math.max(0, Math.min(step, this.max, this.#cache.length));
    this.step = step;
    return this.#cache[this.step - 1];
  }
  empty() {
    this.step = 0;
    this.#cache = [];
  }
  push(data) {
    this.#cache.length = this.step;
    if (this.#cache.length >= this.max) {
      this.#cache.shift();
    } else {
      this.step += 1;
    }
    this.#cache.push(cloneDeep(data));
  }
}
