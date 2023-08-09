import AboutHome from "../components/about/aboutHome";
import MainHome from "../components/main/mainHome";
import ProfileHome from "../components/profile/profileHome";
import ProfileUser from "../components/profile/profileUser";
import ProjectHome from "../components/project/projectHome";
import ErrorPage from "../pages/errorpage";
import ReadyPage from "../pages/readypage";

export const routerList = [
  {
    path: "/",
    element: <MainHome />,
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
    element: <AboutHome />,
  },
  {
    path: "project",
    element: <ProjectHome />,
  },
  {
    path: "profile/*",
    element: <ProfileHome />,
  },
  {
    path: "profile/:productId",
    element: <ProfileUser />,
  },
];
