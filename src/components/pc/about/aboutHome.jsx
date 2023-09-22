import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { professorList } from "../../../data/listData";

const AboutHome = () => {
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
      <AboutHomeStyle>
        <h1 className={`${btar ? "act" : ""}`}>DigitalContentsDesign</h1>
        <h2 className={`${btar ? "act" : ""}`}>디지털콘텐츠디자인</h2>
        <p className={`${btar ? "act" : ""}`}>현존하는 미디어를 통해서 발신하는 방법을 배우고</p>
        <p className={`${btar ? "act" : ""}`}>창작하는 과정에서 다양한 표현 방식을 배워 나갑니다</p>
      </AboutHomeStyle>
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

export default AboutHome;

const AboutHomeStyle = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 40px;
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
`;

const AboutProStyle = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .main-title {
    font-size: 28px;
    margin-bottom: 100px;
  }
  .professor-wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .professor-box {
      position: relative;
      width: 220px;
      height: 270px;
      margin-right: 30px;
      /* border-radius: 10px; */
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
            font-size: 20px;
            font-family: "Pretendard-sb";
            margin-bottom: 3px;
          }
          .field {
            font-size: 14px;
            font-family: "Pretendard-sb";
          }
        }
        .bottom {
          position: absolute;
          bottom: 12px;
          left: 12px;
          .ename {
            font-size: 15px;
            font-family: "Pretendard-l";
          }
          .email {
            margin-top: 3px;
            font-size: 15px;
            font-family: "Pretendard-l";
          }
        }
      }
    }
  }
  @media screen and (max-width: 1280px) {
    .professor-wrap {
      gap: 30px;
      flex-wrap: wrap;
      .professor-box {
        margin-right: 0;
      }
    }
  }
`;
