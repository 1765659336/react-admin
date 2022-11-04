const store: IStore<{
  arr: Array<any>;
}> = {
  state: {
    arr: [],
  },
  action: {
    changeArr: (
      newState: { arr: Array<any> },
      action: { type: string; value: Array<any> }
    ) => {
      newState.arr = action.value;
    },
  },
  actionAsync: {},
};

export default store;
