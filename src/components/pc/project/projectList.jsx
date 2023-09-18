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
            return <ListContainer />;
          })}
        </ContentsListStyle>
      </ProjectVideoStyle>
    </>
  );
};

export default ProjectVideo;

const ListContainer = () => {
  return (
    <>
      <li>
        <Link to="">
          <div></div>
        </Link>
        <p>작품명</p>
        {/* <p>이름</p> */}
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
  grid-template-columns: 350px 350px 350px;
  justify-content: center;
  gap: 80px;
  opacity: 0;
  transition: 1s;
  transition-delay: 0.5s;

  &.act {
    opacity: 1;
  }
  li {
    width: 350px;
    height: 250px;
    list-style: none;
    text-align: center;
    a div {
      width: 350px;
      height: 250px;
      background-color: lightgray;
    }
    p {
      margin-top: 10px;
    }
  }
  @media screen and (max-width: 1100px) {
    grid-template-columns: 250px 250px 250px;
    li {
      width: 250px;
      height: 179px;
      a {
        div {
          width: 250px;
          height: 179px;
        }
      }
    }
  }
`;
