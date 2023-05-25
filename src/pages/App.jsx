import React from "react";
import MainNav from "./mainNav";
// import MainHome from "../components/main/mainHome";
import { useRoutes } from "react-router-dom";
import { routerList } from "../routers/routerlist";
import MainFooter from "./mainfooter";

function App() {
  const routers = useRoutes(routerList);
  return (
    <>
      <MainNav />
      {routers}
      <MainFooter />
    </>
  );
}

export default App;
