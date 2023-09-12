import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { styled } from "styled-components";
import { dummyList } from "../../../dummy/dummylist";

// 목록 더미 리스트

const ProjectVideo = () => {
  const params = useParams();
  console.log(params);
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
      <ProjectVideoStyle>
        <ContentsListStyle className={`${btar ? "act" : ""}`}>
          {dummyList.map((v) => {
            return <ListContainer num={v.id} key={v.id} link={v.link} work={v.work} />;
          })}
        </ContentsListStyle>
      </ProjectVideoStyle>
    </>
  );
};

export default ProjectVideo;

const ListContainer = ({ num, link, work }) => {
  return (
    <>
      <li>
        <Link to={`${link}`}>
          <div></div>
          <p>{num}</p>
        </Link>
      </li>
    </>
  );
};

const ProjectVideoStyle = styled.section`
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
    margin-bottom: 50px;
    list-style: none;
    li {
      font-size: 18px;
    }
  }
`;

const ContentsListStyle = styled.ul`
  display: grid;
  grid-template-columns: 180px 180px;
  justify-content: center;
  gap: 30px;
  opacity: 0;
  transition: 1s;
  transition-delay: 0.5s;

  &.act {
    opacity: 1;
  }
  li {
    width: 180px;
    height: 180px;
    list-style: none;
    a div {
      width: 180px;
      height: 180px;
      background-color: lightgray;
      border-radius: 10px;
    }
  }
`;
