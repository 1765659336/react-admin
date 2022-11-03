import React, { lazy } from "react";
import Home from "../views/Home";
import User from "../views/User";
const About = lazy(() => import("../views/About"));
const Col1 = lazy(() => import("../components/Cop1"));
const Col2 = lazy(() => import("../components/Cop2"));
const NotFonud = lazy(() => import("../views/NotFonud"));
const Role = lazy(() => import("../views/Role"));

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
    element: <Navigate to="/home/users" />,
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
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "/home/users",
        element: <User />,
      },
      {
        path: "/home/roles",
        element: withLoadingComponent(<Role />),
      },
    ],
  },
  {
    path: "/about",
    element: withLoadingComponent(<About />),
  },
  {
    path: "*",
    element: withLoadingComponent(<NotFonud />),
  },
];

export default routes;
