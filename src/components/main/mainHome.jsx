import React from "react";
import { styled } from "styled-components";

const MainHome = () => {
  return (
    <MainHomeStyle>
      <div className="home-con">
        <img src="/assets/image/main_1.png" alt="" />
      </div>
      <div className="text-wrap">
        <p>Digital Contents Design 24Graduation Exhibition</p>
      </div>
    </MainHomeStyle>
  );
};

export default MainHome;

const MainHomeStyle = styled.section`
  width: 100vw;
  height: 100vh;
  .home-con {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 80%;
    }
  }
  .text-wrap {
    position: absolute;
    bottom: 30px;
    left: 150px;
    p {
      font-size: 20px;
      font-weight: 700;
    }
  }
`;
