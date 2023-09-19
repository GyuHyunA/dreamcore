import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { videoDataList } from "../../../data/videoData";

// 목록 더미 리스트

const ProjectListVideo = () => {
  // const params = useParams();
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
      <ProjectListVideoStyle>
        <ContentsListStyle className={`${btar ? "act" : ""}`}>
          {videoDataList.map((v) => {
            return <ListContainer key={v.id} id={v.id} title={v.title} name={v.name} link={v.link} poster={v.poster} />;
          })}
        </ContentsListStyle>
      </ProjectListVideoStyle>
    </>
  );
};

export default ProjectListVideo;

const ListContainer = ({ id, title, name, link, poster }) => {
  return (
    <>
      <li>
        <Link to={`${id}`}>
          <div>
            <img src={`${process.env.PUBLIC_URL}/assets/videoimg/${poster}`} alt="" />
          </div>
        </Link>
        <p>{title}</p>
      </li>
    </>
  );
};

const ProjectListVideoStyle = styled.section`
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
