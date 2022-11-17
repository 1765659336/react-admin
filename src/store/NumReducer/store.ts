type IStoreNum = IStore<{ num: number }>;

const store: IStoreNum = {
  state: {
    num: 20,
  },

  action: {
    changeNum: (
      newState: { num: number },
      action: {
        type: string;
        value: number;
      }
    ) => {
      newState.num = action.value;
    },
  },

  actionAsync: {
    changeNumAsync: (
      newState: { num: number },
      action: {
        type: string;
        value: number;
        dis?: Function;
      }
    ) => {
      setTimeout(() => {
        action.dis && action.dis({ type: "changeNum", value: action.value });
      }, 1000);
    },
  },
};

export default store;
