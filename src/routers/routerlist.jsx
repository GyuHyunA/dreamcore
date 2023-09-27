import AboutHome from "../components/pc/about/aboutHome";
import MainHome from "../components/pc/main/mainHome";
import ErrorPage from "../pages/errorpage";
import ReadyPage from "../pages/readypage";
// project
import ProjectListWeb from "../components/pc/project/projectListWeb";
import ProjectListVideo from "../components/pc/project/projectListVideo";
import ProjectListMulti from "../components/pc/project/projectListMulti";
import ProjectListInter from "../components/pc/project/projectListInter";
import ProjectUserVideo from "../components/pc/project/projectUserVideo";
import ProjectUserMulti from "../components/pc/project/projectUserMulti";
// profile
import ProfileHome from "../components/pc/profile/profileHome";
import ProfileUser from "../components/pc/profile/profileUser";
import ProjectHome from "../components/pc/project/projectHome";
import ProjectUserInter from "../components/pc/project/projectUserInter";

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
        path: "moving",
        element: <ProjectListVideo />,
      },
      {
        path: "multi",
        element: <ProjectListMulti />,
      },
      {
        path: "web",
        element: <ProjectListWeb />,
      },
      {
        path: "inter",
        element: <ProjectListInter />,
      },
    ],
  },

  //project 하위 페이지
  {
    path: "project/moving/:productId",
    element: <ProjectUserVideo />,
  },
  {
    path: "project/multi/:productId",
    element: <ProjectUserMulti />,
  },
  {
    path: "project/web/:productId",
    element: <ProjectUserVideo />,
  },
  {
    path: "project/inter/:productId",
    element: <ProjectUserInter />,
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
