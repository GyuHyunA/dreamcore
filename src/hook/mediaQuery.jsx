import React from "react";
import { useMediaQuery } from "react-responsive";

const MobileComp = ({ children }) => {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });
  console.log("Mobile",isMobile);
  return <React.Fragment>{isMobile && children}</React.Fragment>;
};

const PcComp = ({ children }) => {
  const isPc = useMediaQuery({
    query: "(min-width:768px)",
  });
  console.log("Pc",isPc);
  return <React.Fragment>{isPc && children}</React.Fragment>;
};

export { MobileComp, PcComp };
