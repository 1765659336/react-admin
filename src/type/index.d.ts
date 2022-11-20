/* 
    类型声明文件中不要使用import ... from ...,不然其它文件引入类型需要再import
*/
// 获取函数返回值的类型
declare type RootState = ReturnType<typeof import("src/store").getState>;

interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: function;
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: function;
}

declare type StoreAction = {
  changeNum?: Function;
  changeArr?: Function;
  getNewsClassification?: Function;
};

declare type StoreActionAsync = {
  changeNumAsync?: Function;
  getNewsClassificationAsync?: Function;
};
declare interface IStore<T> {
  state?: T;
  action: StoreAction;
  actionAsync: StoreActionAsync;
}

declare interface ISelectOption {
  value: number;
  label: string;
}
