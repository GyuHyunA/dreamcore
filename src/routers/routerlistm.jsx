import MainHomeM from "../components/mobile/main/mainHomeM";
import ErrorPage from "../pages/errorpage";

export const routerListm = [
  {
    path: "/",
    element: <MainHomeM />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];
