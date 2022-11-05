import React, { useEffect } from "react";
import { useRoutes, useLocation, useNavigate } from "react-router-dom";
import router from "src/router";
import { message } from "antd";

const Page: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    message.warning("你已登录");
    navigate("/home/users");
  });

  return <></>;
};

const Login: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    message.warning("请先登录再访问");
    navigate("/login");
  });

  return <></>;
};

// 前置路由守卫
const BeforeRouterEnter: React.FC = () => {
  const outlet = useRoutes(router);
  const location = useLocation();
  const token = localStorage.getItem("token");
  if (location.pathname === "/login" && token) {
    return <Page />;
  }
  if (location.pathname !== "/login" && !token) {
    return <Login />;
  }
  return <>{outlet}</>;
};

const App: React.FC = () => {
  return <BeforeRouterEnter />;
};

export default App;
