import { deepCloneObj } from "src/utils/data";

const defaultState: {
  num: number;
} = {
  num: 20,
};

const reducer = (state = defaultState, action: { type: string }) => {
  // 浅拷贝
  let newState = deepCloneObj(state);

  switch (action.type) {
    case "add":
      newState.num++;
      break;
  }
  return newState ?? {};
};

export default reducer;
