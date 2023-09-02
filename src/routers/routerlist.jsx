import AboutHome from "../components/pc/about/aboutHome";
import MainHome from "../components/pc/main/mainHome";
import ProfileHome from "../components/pc/profile/profileHome";
import ProfileUser from "../components/pc/profile/profileUser";
import ProjectHome from "../components/pc/project/projectHome";
import ProjectUser from "../components/pc/project/projectUser";
import ProjectList from "../components/pc/project/projectList";
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
        path: "home",
        element: <ProjectList />,
      },
      {
        path: "video",
        element: <ProjectList />,
      },
      {
        path: "multi",
        element: <ProjectList />,
      },
      {
        path: "web",
        element: <ProjectList />,
      },
      {
        path: "inter",
        element: <ProjectList />,
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
