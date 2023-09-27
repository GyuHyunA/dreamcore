import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { professorList } from "../../../data/listData";

const AboutHomem = () => {
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
      <AboutHomemStyle>
        <h1 className={`${btar ? "act" : ""}`}>DigitalContentsDesign</h1>
        <h2 className={`${btar ? "act" : ""}`}>디지털콘텐츠디자인</h2>
        <p className={`${btar ? "act" : ""}`}>현존하는 미디어를 통해서 발신하는 방법을 배우고</p>
        <p className={`${btar ? "act" : ""}`}>창작하는 과정에서 다양한 표현 방식을 배워 나갑니다</p>
      </AboutHomemStyle>
      <AboutProStyle>
        <h2 className="main-title">Project Guidance Professor</h2>
        <div className="professor-wrap">
          {professorList.map((v) => {
            return (
              <div className="professor-box" key={v.id}>
                <div className="hoverbox">
                  <div className="top">
                    <h2 className="kname">{v.kname}</h2>
                    <h3 className="field">{v.field}</h3>
                  </div>
                  <div className="bottom">
                    <p className="ename">{v.ename}</p>
                    <p className="email">{v.email}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </AboutProStyle>
    </>
  );
};

export default AboutHomem;

const AboutHomemStyle = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 24px;
    margin-bottom: 10px;
    opacity: 0;
    transition: 1.5s;
    &.act {
      opacity: 1;
    }
  }
  h2 {
    font-size: 18px;
    margin-bottom: 50px;
    opacity: 0;
    transition: 1.5s;
    &.act {
      opacity: 1;
    }
  }
  p {
    font-size: 12px;
    opacity: 0;
    transition: 1.5s;
    transition-delay: 1s;
    &.act {
      opacity: 1;
    }
  }
  /* 높이에 따른 해상도 차이 쿼리 */
  /* 안드로이드 */
  @media screen and (max-height: 810px) {
    height: calc(100vh - 70px);
  }
  /* 아이폰 */
  @media screen and (max-height: 700px) {
    height: calc(100vh - 120px);
  }
`;

const AboutProStyle = styled.section`
  width: 100vw;
  /* height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .main-title {
    font-size: 20px;
    margin-bottom: 100px;
  }
  .professor-wrap {
    width: 100%;
    padding: 0 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 100px;
    .professor-box {
      position: relative;
      width: 150px;
      height: 200px;
      /* border-radius: 10px; */
      /* border: 1px solid black; */
      background-color: #f6f6f6;
      .hoverbox {
        width: inherit;
        height: inherit;
        position: relative;
        /* color: #dcdcdc; */
        &:hover {
          /* color: black; */
          transition: 1s;
        }
        .top {
          position: absolute;
          top: 12px;
          left: 12px;
          .kname {
            font-size: 15px;
            font-family: "Pretendard-sb";
            margin-bottom: 3px;
          }
          .field {
            font-size: 11px;
            font-family: "Pretendard-sb";
          }
        }
        .bottom {
          position: absolute;
          bottom: 12px;
          left: 12px;
          .ename {
            font-size: 11px;
            font-family: "Pretendard-l";
          }
          .email {
            margin-top: 3px;
            font-size: 11px;
            font-family: "Pretendard-l";
          }
        }
      }
    }
  }
  /* 높이에 따른 해상도 차이 쿼리 */
  /* 안드로이드 */
  @media screen and (max-height: 810px) {
    /* height: calc(100vh - 70px); */
  }
  /* 아이폰 */
  @media screen and (max-height: 700px) {
    /* height: calc(100vh - 120px); */
  }
`;
