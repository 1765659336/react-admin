import React from "react";
import { useRoutes, Link } from "react-router-dom";
import router from "src/router";
const App: React.FC = () => {
  const outlet = useRoutes(router);
  return (
    <>
      <Link to="/home">home</Link>
      <Link to="/about">about</Link>
      {outlet}
    </>
  );
};

export default App;
