import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { interDataList } from "../../../data/interData";

// 목록 더미 리스트

const ProjectListInter = () => {
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
            return <ListContainer key={v.id} id={v.id} title={v.title} name={v.name} poster={v.poster} />;
          })}
        </ContentsListStyle>
      </ProjectListInterStyle>
    </>
  );
};

export default ProjectListInter;

const ListContainer = ({ id, title, name, poster }) => {
  return (
    <>
      <li>
        <Link to={`${id}`}>
          <div className="list-wrap">
            <div className="tn-wrap">
              <h3 className="name">{name}</h3>
              <h3 className="title">{title}</h3>
              <div className="filter"></div>
            </div>
            <img src={`${process.env.PUBLIC_URL}/assets/interimg/inter_p_${id}.webp`} alt="" />
          </div>
        </Link>
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
    position: relative;
    width: 350px;
    height: 250px;
    list-style: none;
    a .list-wrap {
      width: 350px;
      height: 250px;
      box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.04);
      .tn-wrap {
        opacity: 0;
        position: absolute;
        bottom: 20px;
        left: 20px;
        transition: 0.5s;
        &:hover {
          opacity: 1;
        }
        h3 {
          position: relative;
          z-index: 111;
          font-size: 14px;
          &:nth-child(1) {
            margin-bottom: 5px;
          }
        }
        .filter {
          position: absolute;
          left: -20px;
          bottom: -20px;
          width: 350px;
          height: 250px;
          background-color: rgba(255, 255, 255, 0.7);
        }
      }
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
    gap: 50px;
    li {
      width: 250px;
      height: 179px;
      a .list-wrap {
        width: 250px;
        height: 179px;
        .tn-wrap {
          h3 {
            position: relative;
            z-index: 111;
            font-size: 14px;
            &:nth-child(1) {
              margin-bottom: 5px;
            }
          }
          .filter {
            position: absolute;
            left: -20px;
            bottom: -20px;
            width: 250px;
            height: 179px;
            background-color: rgba(255, 255, 255, 0.7);
          }
        }
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
  }
`;
