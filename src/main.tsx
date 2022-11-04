// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// 初始化样式
import "reset-css";
// Ui框架的样式
import "antd/dist/antd.css";
// 系统样式
import "src/assets/styles/global.scss";

// 路由模式
import { BrowserRouter } from "react-router-dom";

// 状态管理
import { Provider } from "react-redux";
import store from "src/store/index";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // 开启严格模式时，开发环境中，加载组件时，打印会执行两次，发布之后不会，打包的时候可以再解开
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </React.StrictMode> */}
  </Provider>
);
