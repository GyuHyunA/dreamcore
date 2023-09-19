import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { styled } from "styled-components";
// import { dummyList } from "../../../dummy/dummylist";
import { webDataList } from "../../../data/webData";

// 목록 더미 리스트

const ProjectListWeb = () => {
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
      <ProjectListWebStyle>
        <ContentsListStyle className={`${btar ? "act" : ""}`}>
          {webDataList.map((v) => {
            return <ListContainer key={v.id} title={v.title} name={v.name} link={v.link} poster={v.poster} />;
          })}
        </ContentsListStyle>
      </ProjectListWebStyle>
    </>
  );
};

export default ProjectListWeb;

const ListContainer = ({ title, name, link, poster }) => {
  return (
    <>
      <li>
        <Link to={link}>
          <div>
            <img src={`${process.env.PUBLIC_URL}/assets/webimg/${poster}`} alt="" />
          </div>
        </Link>
        <p>{title}</p>
      </li>
    </>
  );
};

const ProjectListWebStyle = styled.section`
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
  grid-template-columns: 250px 250px 250px;
  justify-content: center;
  gap: 80px;
  opacity: 0;
  transition: 1s;
  transition-delay: 0.5s;

  &.act {
    opacity: 1;
  }
  li {
    width: 250px;
    height: 350px;
    list-style: none;
    text-align: center;
    a {
      div {
        width: 250px;
        height: 350px;
        background-color: lightgray;
        img {
          width: inherit;
          height: inherit;
          object-fit: cover;
          object-position: center;
        }
      }
    }
    p {
      margin-top: 10px;
    }
  }
`;
