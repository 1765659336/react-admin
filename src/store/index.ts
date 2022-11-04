import { legacy_createStore, combineReducers } from "redux";
import numReducer from "./NumReducer";
import arrReducer from "./ArrReducer";

const reducers = combineReducers({
  numReducer,
  arrReducer,
});

// 为了让浏览器正常使用redux-devetools
const store = legacy_createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
