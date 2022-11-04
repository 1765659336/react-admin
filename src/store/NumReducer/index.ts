import { deepCloneObj } from "src/utils/data";
import store from "./store";

const reducer = (
  state = store.state,
  action: { type: string; value: number }
) => {
  let newState = deepCloneObj(state);
  switch (action.type) {
    case "changeNum":
      store.action.changeNum(newState, action);
      break;
    default:
      break;
  }
  return newState;
};

export default reducer;
