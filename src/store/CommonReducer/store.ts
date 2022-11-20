import { getAllNewsClassification } from "src/request/News";

const store: IStore<{
  newsClassification: Array<ISelectOption>;
}> = {
  state: {
    newsClassification: [],
  },
  action: {
    getNewsClassification: (
      newState: { newsClassification: Array<ISelectOption> },
      action: {
        type: string;
        value: Array<ISelectOption>;
      }
    ) => {
      newState.newsClassification = action.value;
    },
  },
  actionAsync: {
    getNewsClassificationAsync: (
      newState: { newsClassification: Array<ISelectOption> },
      action: {
        type: string;
        dis?: Function;
      }
    ) => {
      getAllNewsClassification().then((res) => {
        action.dis &&
          action.dis({
            type: "getNewsClassification",
            value: res.data.content,
          });
      });
    },
  },
};

export default store;
