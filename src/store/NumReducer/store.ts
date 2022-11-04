const store = {
  state: {
    num: 20,
  },

  action: {
    changeNum: (
      newState: { num: number },
      action: { type: string; value: number }
    ) => {
      newState.num = action.value;
    },
  },
};

export default store;
