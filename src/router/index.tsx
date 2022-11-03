import React, { lazy } from "react";
import Home from "../views/Home";
import Col1 from "../components/Cop1";
const About = lazy(() => import("../views/About"));
const Col2 = lazy(() => import("../components/Cop2"));
const NotFonud = lazy(() => import("../views/NotFonud"));

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
    element: <Navigate to="/home/col1" />,
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "/home/col1",
        element: <Col1 />,
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
  {
    path: "*",
    element: withLoadingComponent(<NotFonud />)
  }
];

export default routes;
