import { deepCloneObj } from "src/utils/data";
import store from "./store";

const reducer = (
  state = store.state,
  action: { type: string; value: Array<any> }
) => {
  // 浅拷贝
  let newState = deepCloneObj(state);
  switch (action.type) {
    case "changeArr":
      store.action.changeArr(newState, action);
      break;
    default:
      break;
  }
  return newState;
};

export default reducer;
