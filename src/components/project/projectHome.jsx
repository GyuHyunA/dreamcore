import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { styled } from "styled-components";

// 목록 더미 리스트
const projectNav = [
  {
    id: 0,
    title: "Video Animation",
    link: "video",
  },
  {
    id: 1,
    title: "Multimedia Design",
    link: "multi",
  },
  {
    id: 2,
    title: "Web Studio",
    link: "web",
  },
  {
    id: 3,
    title: "Interactive Media",
    link: "inter",
  },
];

const ProjectHome = () => {
  const [tar, setTar] = useState(0);
  const [btar, setbtar] = useState(false);

  function onScroll() {
    setTar(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    if (tar === 0) {
      setbtar(true);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [tar, btar]);

  return (
    <>
      <ProjectHomeStyle>
        <h2>Project</h2>
        <ul className="project-navlist">
          {projectNav.map((v) => {
            return (
              <li key={v.id}>
                <Link to={v.link} className={v.id ? "act" : ""}>
                  {v.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <Outlet />
      </ProjectHomeStyle>
    </>
  );
};

export default ProjectHome;



const ProjectHomeStyle = styled.section`
  width: 100vw;
  /* height: 100vh; */
  padding-bottom: 100px;
  h2 {
    padding-top: 100px;
    font-size: 28px;
    margin-bottom: 50px;
    text-align: center;
  }
  .project-navlist {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 230px;
    margin-bottom: 50px;
    list-style: none;
    li {
      font-size: 18px;
    }
  }
`;

