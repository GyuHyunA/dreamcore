import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { styled } from "styled-components";
import { interDataList } from "../../../data/interData";

// 목록 더미 리스트

const ProjectListInter = () => {
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
      <ProjectListInterStyle>
        <ContentsListStyle className={`${btar ? "act" : ""}`}>
          {interDataList.map((v) => {
            return <ListContainer key={v.id} title={v.title} name={v.name} poster={v.poster} />;
          })}
        </ContentsListStyle>
      </ProjectListInterStyle>
    </>
  );
};

export default ProjectListInter;

const ListContainer = ({ title, name, poster }) => {
  return (
    <>
      <li>
        <Link to="">
          <div>
            <img src={`${process.env.PUBLIC_URL}/assets/interimg/${poster}`} alt="" />
          </div>
        </Link>
        <p>{title}</p>
        {/* <p>이름</p> */}
      </li>
    </>
  );
};

const ProjectListInterStyle = styled.section`
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
      img {
        width: inherit;
        height: inherit;
        object-fit: cover;
        object-position: center;
      }
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
