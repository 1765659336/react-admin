import React, { lazy } from "react";
import Home from "../views/Home";
const About = lazy(() => import("../views/About"));
const Col1 = lazy(() => import("../components/Cop1"));
const Col2 = lazy(() => import("../components/Cop2"));

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
    children: [
      {
        path: "/home/col1",
        element: withLoadingComponent(<Col1 />),
      },
      {
        path: "/home/col2",
        element: withLoadingComponent(<Col2 />),
      },
    ],
  },
  {
    path: "/about",
    element: withLoadingComponent(<About />),
  },
];

export default routes;
