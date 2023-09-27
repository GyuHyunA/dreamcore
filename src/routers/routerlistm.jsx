import AboutHomem from "../components/mobile/about/aboutHomem";
import MainHomeM from "../components/mobile/main/mainHomeM";
import ErrorPage from "../pages/errorpage";
import ReadyPage from "../pages/readypage";
//project
import ProjectHomeM from "../components/mobile/project/projectHomem";
import ProjectListmWeb from "../components/mobile/project/projectListmWeb";
import ProjectListmMulti from "../components/mobile/project/projectListmMulti";
import ProjectListmInter from "../components/mobile/project/projectListmInter";
import ProjectListmVideo from "../components/mobile/project/projectListmVideo";
import ProjectUsermVideo from "../components/mobile/project/projectUsermVideo";
import ProjectUsermMulti from "../components/mobile/project/projectUsermMulti";
import ProjectUsermInter from "../components/mobile/project/projectUsermInter";
//profile
import ProfileHomem from "../components/mobile/profile/profileHomem";
import ProfileUserm from "../components/mobile/profile/profileUserm";


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
        path: "moving",
        element: <ProjectListmVideo />,
      },
      {
        path: "multi",
        element: <ProjectListmMulti />,
      },
      {
        path: "web",
        element: <ProjectListmWeb />,
      },
      {
        path: "inter",
        element: <ProjectListmInter />,
      },
    ],
  },
  //project 하위 페이지
  {
    path: "project/moving/:productId",
    element: <ProjectUsermVideo />,
  },
  {
    path: "project/multi/:productId",
    element: <ProjectUsermMulti />,
  },
  {
    path: "project/inter/:productId",
    element: <ProjectUsermInter />,
  },
];
