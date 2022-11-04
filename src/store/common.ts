export function renderActionName(store: any) {
  const obj: { [k: string]: Function } = {};
  for (const key in store.action) {
    if (Object.prototype.hasOwnProperty.call(store.action, key)) {
      const element = store.action[key];
      obj[key] = element;
    }
  }
  for (const key in store.actionAsync) {
    if (Object.prototype.hasOwnProperty.call(store.actionAsync, key)) {
      const element = store.actionAsync[key];
      obj[key] = element;
    }
  }
  return obj;
}