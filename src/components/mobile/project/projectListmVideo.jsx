import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { videoDataList } from "../../../data/videoData";

// 목록 더미 리스트

const ProjectListmVideo = () => {
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
      <ProjectListmVideoStyle>
        <ContentsListStyle className={`${btar ? "act" : ""}`}>
          {videoDataList.map((v) => {
            return <ListContainer key={v.id} id={v.id} title={v.title} name={v.name} poster={v.poster} />;
          })}
        </ContentsListStyle>
      </ProjectListmVideoStyle>
    </>
  );
};

export default ProjectListmVideo;

const ListContainer = ({ id, title, name, poster }) => {
  return (
    <>
      <li>
        <Link to={`${id}`}>
          <div className="list-wrap">
            <img src={`${process.env.PUBLIC_URL}/assets/videoimg/mo_p_${id}.webp`} alt="" />
          </div>
          <div className="text-wrap">
            <h3 className="title">{title}</h3>
            <p className="name">{name}</p>
          </div>
        </Link>
      </li>
    </>
  );
};

const ProjectListmVideoStyle = styled.section`
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
    margin-bottom: 60px;
    a {
      .list-wrap {
        width: 180px;
        height: 252px;
        box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.04);
        img {
          width: inherit;
          height: inherit;
          object-fit: cover;
          object-position: center;
        }
      }
      .text-wrap {
        margin-top: 10px;
        h3 {
          font-size: 12px;
        }
        p{
          font-size: 12px;
          margin-top: 3px;
        }
      }
    }
  }
`;
