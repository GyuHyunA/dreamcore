import AboutHomem from "../components/mobile/about/aboutHomem";
import MainHomeM from "../components/mobile/main/mainHomeM";
import ErrorPage from "../pages/errorpage";
import ReadyPage from "../pages/readypage";

export const routerListm = [
  {
    path: "/",
    element: <MainHomeM />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "ready",
    element: <ReadyPage />,
  },
  {
    path: "about",
    element: <AboutHomem />,
  },
];
