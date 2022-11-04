import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import reduxThunk from "redux-thunk";
import numReducer from "./NumReducer";
import arrReducer from "./ArrReducer";

const reducers = combineReducers({
  numReducer,
  arrReducer,
});

// 为了让浏览器正常使用redux-devetools,redux-thunk插件关联到redux-devetools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;
const store = legacy_createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

export default store;
