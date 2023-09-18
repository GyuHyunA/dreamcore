import AboutHomem from "../components/mobile/about/aboutHomem";
import MainHomeM from "../components/mobile/main/mainHomeM";
import ProfileHomem from "../components/mobile/profile/profileHomem";
import ProfileUserm from "../components/mobile/profile/profileUserm";
import ProjectHomeM from "../components/mobile/project/projectHomem";
import ProjectListm from "../components/mobile/project/projectListm";
import ProjectListmWeb from "../components/mobile/project/projectListmWeb";
import ProjectUserM from "../components/mobile/project/projectUserm";
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
  //profile
  {
    path: "profile/*",
    element: <ProfileHomem />,
  },
  {
    path: "profile/:productId",
    element: <ProfileUserm />,
  },
  {
    path: "project/*",
    element: <ProjectHomeM />,
    children: [
      {
        path: "home",
        element: <ProjectListm />,
      },
      {
        path: "video",
        element: <ProjectListmWeb />,
      },
      {
        path: "multi",
        element: <ProjectListm />,
      },
      {
        path: "web",
        element: <ProjectListmWeb />,
      },
      {
        path: "inter",
        element: <ProjectListm />,
      },
    ],
  },
  //project 하위 페이지
  {
    path: "project/video/:productId",
    element: <ProjectUserM />,
  },
  {
    path: "project/multi/:productId",
    element: <ProjectUserM />,
  },
  {
    path: "project/web/:productId",
    element: <ProjectUserM />,
  },
  {
    path: "project/inter/:productId",
    element: <ProjectUserM />,
  },
];
