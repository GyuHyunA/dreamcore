import React, { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import { routerList } from "../routers/routerlist";
import { MobileComp, PcComp } from "../hook/mediaQuery";
import { routerListm } from "../routers/routerlistm";
import MainFooter from "./pc/mainfooter";
import MainNav from "./pc/mainNav";
import MainNavm from "./mobile/mainNavm";

function App() {
  //view 확인
  const [innW, setInnW] = useState(0);
  const [innH, setInnH] = useState(0);
  useEffect(() => {
    const viewInnerw = window.innerWidth;
    const viewInnerh = window.innerHeight;
    setInnW(viewInnerw)
    setInnH(viewInnerh)
    return () => {};
  }, [innW, innH]);

  const routers = useRoutes(routerList);
  const routersm = useRoutes(routerListm);
  return (
    <>
      {innW} / {innH}
      <PcComp>
        <MainNav />
        {routers}
        <MainFooter />
      </PcComp>
      <MobileComp>
        <MainNavm />
        {/* {routersm} */}
      </MobileComp>
    </>
  );
}

export default App;
