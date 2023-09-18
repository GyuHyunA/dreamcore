import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { styled } from "styled-components";
import { dummyList } from "../../../dummy/dummylist";

// 목록 더미 리스트

const ProjectVideomWeb = () => {
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
      <ProjectVideomWebStyle>
        <ContentsListStyle className={`${btar ? "act" : ""}`}>
          {dummyList.map((v) => {
            return <ListContainer num={v.id} key={v.id} link={v.link} work={v.work} />;
          })}
        </ContentsListStyle>
      </ProjectVideomWebStyle>
    </>
  );
};

export default ProjectVideomWeb;

const ListContainer = ({ num, link, work }) => {
  return (
    <>
      <li>
        <Link to="">
          <div></div>
        </Link>
        <p>작품명</p>
      </li>
    </>
  );
};

const ProjectVideomWebStyle = styled.section`
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
  gap: 12px;
  opacity: 0;
  transition: 1s;
  transition-delay: 0.5s;

  &.act {
    opacity: 1;
  }
  li {
    width: 180px;
    height: 252px;
    list-style: none;
    text-align: center;
    margin-bottom: 40px;
    a div {
      width: 180px;
      height: 252px;
      background-color: lightgray;
    }
    p{
      margin-top: 10px;
    }
  }
`;
