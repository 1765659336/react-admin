import React, { lazy } from "react";
import Home from "../views/Home";
const About = lazy(() => import("../views/About"));

// Navigate重定向组件
import { Navigate } from "react-router-dom";

const withLoadingComponent = (comp: JSX.Element) => {
  return (
    <React.Suspense fallback={<div>loading...</div>}>{comp}</React.Suspense>
  );
};

const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: withLoadingComponent(<About />),
  },
];

export default routes;
