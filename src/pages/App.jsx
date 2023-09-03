import React from "react";
import MainNav from "./mainNav";
import { useRoutes } from "react-router-dom";
import { routerList } from "../routers/routerlist";
import MainFooter from "./mainfooter";
import { MobileComp, PcComp } from "../hook/mediaQuery";

function App() {
  const routers = useRoutes(routerList);
  return (
    <>
      <PcComp>
        <MainNav />
        {routers}
        <MainFooter />
      </PcComp>
      <MobileComp>
        <div>mobile</div>
      </MobileComp>
    </>
  );
}

export default App;
