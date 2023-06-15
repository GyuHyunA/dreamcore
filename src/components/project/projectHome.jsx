import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { dummyList } from "../../dummy/dummylist";

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
          <li>
            <Link to="/project">Video Animation</Link>
          </li>
          <li>
            <Link to="/project">Multimedia Design</Link>
          </li>
          <li>
            <Link to="/project">Web Studio</Link>
          </li>
          <li>
            <Link to="/project">Interactive Media</Link>
          </li>
        </ul>
        <ContentsListStyle className={`${btar ? "act" : ""}`}>
          {dummyList.map((v) => {
            return <ListContainer num={v.id} key={v.id} link={v.link} />;
          })}
        </ContentsListStyle>
      </ProjectHomeStyle>
    </>
  );
};

export default ProjectHome;

const ListContainer = ({ num, link }) => {
  return (
    <li>
      <Link to={`/${link}`}>
        <div>{num}</div>
      </Link>
    </li>
  );
};

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

const ContentsListStyle = styled.ul`
  display: grid;
  grid-template-columns: 320px 320px 320px;
  justify-content: center;
  gap: 80px;
  opacity: 0;
  transition: 1s;
  transition-delay: 0.5s;

  &.act {
    opacity: 1;
  }
  li {
    width: 320px;
    height: 180px;
    list-style: none;
    a div {
      width: 320px;
      height: 180px;
      background-color: lightgray;
      border-radius: 10px;
    }
  }
`;
