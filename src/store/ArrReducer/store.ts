const store = {
  state: {
    arr: [] as Array<any>,
  },

  action: {
    changeArr: (
      newState: { arr: Array<any> },
      action: { type: string; value: Array<any> }
    ) => {
      newState.arr = action.value;
    },
  },
};

export default store;
