import React, { lazy } from "react";
import Home from "../views/Home";
import Login from "../views/Login";
const About = lazy(() => import("../views/About"));
const Col1 = lazy(() => import("../components/Cop1"));
const Col2 = lazy(() => import("../components/Cop2"));
const NotFonud = lazy(() => import("../views/NotFonud"));
const Role = lazy(() => import("../views/Role"));
const User = lazy(() => import("../views/User"));
const NewsWrite = lazy(() => import("../views/News/NewsWrite"));
const NewsDraftList = lazy(() => import("../views/News/NewsDraftList"));
const NewsDraftDetails = lazy(() => import("../views/News/NewsDraftDetails"));
const NewsClassificationList = lazy(() => import("../views/News/NewsClassificationList"));
const NewsClassificationDetails = lazy(() => import("../views/News/NewsClassificationDetails"));

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
    element: <Navigate to="/login" />,
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
        element: withLoadingComponent(<User />),
      },
      {
        path: "/home/roles",
        element: withLoadingComponent(<Role />),
      },
    ],
  },
  {
    path: "/news",
    element: <Home />,
    children: [
      {
        path: "/news/manage/write",
        element: withLoadingComponent(<NewsWrite />),
      },
      {
        path: "/news/manage/draft/list",
        element: withLoadingComponent(<NewsDraftList />),
      },
      {
        path: "/news/manage/draft/details",
        element: withLoadingComponent(<NewsDraftDetails />),
      },
      {
        path: "/news/manage/classification/list",
        element: withLoadingComponent(<NewsClassificationList />),
      },
      {
        path: "/news/manage/classification/details",
        element: withLoadingComponent(<NewsClassificationDetails />),
      },
    ],
  },
  {
    path: "/about",
    element: withLoadingComponent(<About />),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: withLoadingComponent(<NotFonud />),
  },
];

export default routes;
