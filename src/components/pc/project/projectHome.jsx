import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { styled } from "styled-components";
import { projectNav } from "../../../data/listData";

const ProjectHome = () => {
  let paramId = useLocation().pathname.slice(9, 18);

  const [tar, setTar] = useState(0);
  const [btar, setbtar] = useState(false);
  const [navAction, setNavAction] = useState(paramId);

  function onScroll() {
    setTar(window.scrollY);
  }

  useEffect(() => {
    //scroll event
    window.addEventListener("scroll", onScroll);
    if (tar === 0) {
      setbtar(true);
    }
    setNavAction(paramId);

    return () => {
      //return scroll evnet
      window.removeEventListener("scroll", onScroll);
    };
  }, [tar, btar, paramId, navAction]);

  return (
    <>
      <ProjectHomeStyle>
        <h2>Project</h2>
        <ul className="project-navlist">
          {projectNav.map((v, i) => {
            return (
              <li key={v.id}>
                <Link to={v.link} className={navAction === v.link ? "act" : ""} onClick={() => setNavAction(v.link)}>
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
      a {
        color: black;
      }
      .act {
        color: #afafaf;
      }
    }
  }
`;
