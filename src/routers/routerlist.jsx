import MainHome from "../components/main/mainHome";
import ErrorPage from "../pages/errorpage";

export const routerList = [
  {
    path: "/",
    element: <MainHome />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];
