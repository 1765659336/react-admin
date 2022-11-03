import React from "react";
import { useRoutes } from "react-router-dom";
import router from "src/router";
const App: React.FC = () => {
  const outlet = useRoutes(router);
  return <>{outlet}</>;
};

export default App;
