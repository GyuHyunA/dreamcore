import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const AboutHome = () => {
  return (
    <>
      <AboutHomeStyle>
        <h1>DigitalContentsDesign</h1>
        <h2>디지털콘텐츠디자인</h2>
        <p>현존하는 미디어를 통해서 발신하는 방법을 배우고</p>
        <p>창작하는 과정에서 다양한 표현 방식을 배워 나갑니다</p>
      </AboutHomeStyle>
      <AboutProStyle>
        <h2>Project Guidance Professor</h2>
        <div className="professor-wrap">
          <Link>
            <div className="professor-box"></div>
          </Link>
          <Link>
            <div className="professor-box"></div>
          </Link>
          <Link>
            <div className="professor-box"></div>
          </Link>
          <Link>
            <div className="professor-box"></div>
          </Link>
          <Link>
            <div className="professor-box"></div>
          </Link>
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
  }
  h2 {
    font-size: 18px;
    margin-bottom: 50px;
  }
  p {
    font-size: 12px;
  }
`;

const AboutProStyle = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    font-size: 28px;
    margin-bottom: 100px;
  }
  .professor-wrap {
    width: 100%;
    /* padding: 0 230px; */
    display: flex;
    justify-content: center;
    align-items: center;
    .professor-box {
      width: 250px;
      height: 300px;
      margin-right: 30px;
      border-radius: 10px;
      border: 1px solid black;
      &:nth-child(2) {
        margin-right: 0;
      }
      &:hover {
        background-color: #00000025;
        /* border: none; */
        transition: 1s;
      }
    }
  }
`;
