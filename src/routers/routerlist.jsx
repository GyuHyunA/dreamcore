import AboutHome from "../components/about/aboutHome";
import MainHome from "../components/main/mainHome";
import ProfileHome from "../components/profile/profileHome";
import ProfileUser from "../components/profile/profileUser";
import ProjectHome from "../components/project/projectHome";
import ProjectUser from "../components/project/projectUser";
import ProjectVideo from "../components/project/projectVideo";
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
  //project
  {
    path: "project/*",
    element: <ProjectHome />,
    children: [
      {
        path: "video",
        element: <ProjectVideo />,
      },
      {
        path: "multi",
        element: <ProjectVideo />,
      },
      {
        path: "web",
        element: <ProjectVideo />,
      },
      {
        path: "inter",
        element: <ProjectVideo />,
      },
    ],
  },
  //project 하위 페이지
  {
    path: "project/video/:productId",
    element: <ProjectUser />,
  },
  {
    path: "project/multi/:productId",
    element: <ProjectUser />,
  },
  {
    path: "project/web/:productId",
    element: <ProjectUser />,
  },
  {
    path: "project/inter/:productId",
    element: <ProjectUser />,
  },
  //profile
  {
    path: "profile/*",
    element: <ProfileHome />,
  },
  {
    path: "profile/:productId",
    element: <ProfileUser />,
  },
];
