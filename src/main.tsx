import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// 初始化样式
import "reset-css";
// Ui框架的样式
import "antd/dist/antd.css";
// 系统样式
import "src/assets/styles/global.scss";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
