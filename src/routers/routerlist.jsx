import AboutHome from "../components/about/aboutHome";
import MainHome from "../components/main/mainHome";
import ProfileHome from "../components/profile/profileHome";
import ProjectHome from "../components/project/projectHome";
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
  {
    path: "about",
    element: <AboutHome />,
  },
  {
    path: "project",
    element: <ProjectHome />,
  },
  {
    path: "profile",
    element: <ProfileHome />,
  },
];
