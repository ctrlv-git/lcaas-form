class EventBus {
  events = new Map();
  constructor() {
    this.events.clear();
  }
  $on(name, handler) {
    if (this.events.has(name)) {
      const handlers = this.events.get(name);
      this.events.set(name, [...handlers, handler]);
    } else {
      this.events.set(name, [handler]);
    }
  }
  $emit(name, ...arg) {
    if (this.events.has(name)) {
      const handlers = this.events.get(name);
      handlers.forEach((handler) => {
        handler(...arg);
      });
    }
  }
  $off(name) {
    return this.events.delete(name);
  }
}

export default new EventBus();
