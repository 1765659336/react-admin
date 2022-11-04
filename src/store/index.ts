import { legacy_createStore } from "redux";
import reducer from "./reducer";

// 为了让浏览器正常使用redux-devetools
const store = legacy_createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
