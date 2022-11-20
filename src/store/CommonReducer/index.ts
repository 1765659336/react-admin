import { deepCloneObj } from "src/utils/data";
import store from "./store";
import { renderActionName } from "../common";
const actionName = renderActionName(store);
const reducer = (
  state = store.state,
  action: {
    actionName: string;
    type: string;
    value: number;
    dis?: Function;
  }
) => {
  // 深拷贝
  let newState = deepCloneObj(state);
  if (actionName[action.type]) {
    actionName[action.type](newState, action);
  }
  return newState;
};

export default reducer;
