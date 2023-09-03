import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Image } from "antd";

const MainHomeM = () => {
  return (
    <>
      <MainHomeMStyle></MainHomeMStyle>
      <MainPosterStyle></MainPosterStyle>
    </>
  );
};

export default MainHomeM;

const MainHomeMStyle = styled.section`

`;

const MainPosterStyle = styled.section`
  width: 100vw;
  height: 100vh;
  .title-wrap {
    position: relative;
    padding-top: 100px;
    margin-bottom: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    .title {
      font-size: 28px;
    }
  }
  .poster-wrap {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 100px 0;
    opacity: 1;
    .poster_img {
      width: 400px;
      height: 600px;
      transform: translateX(225px);
      opacity: 0;
      z-index: 3;
    }
    .ant-image-mask {
      transform: translateX(-30px);
      background: rgba(0, 0, 0, 0);
      .ant-image-mask-info {
        display: none;
      }
    }
    .ia {
      opacity: 1;
      transition: 1s;
      transform: translateX(-30px);
    }
    .poster_text {
      width: 400px;
      height: 600px;
      display: inline-flex;
      align-items: center;
      transform: translateX(-225px);
      opacity: 0;
      p {
        z-index: 0;
        font-size: 16px;
      }
    }
    .ta {
      opacity: 1;
      transform: translateX(30px);
      transition: 1s;
      transition-delay: 1s;
    }
  }
  @media screen and (max-width: 1480px) {
    .poster-wrap {
      .poster_img {
        width: calc(450px / 1.5);
        height: calc(650px / 1.5);
      }
      .poster_text {
        width: calc(450px / 1.5);
        height: calc(650px / 1.5);
      }
    }
  }

  @media screen and (max-width: 1580px) {
    .poster-wrap {
      .poster_img {
        width: calc(450px / 1.3);
        height: calc(650px / 1.3);
      }
      .poster_text {
        width: calc(450px / 1.5);
        height: calc(650px / 1.5);
      }
    }
  }
`;

// const AudioStyle = styled.audio`
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: 99999999999999;
// `;
// const MainTrailerStyle = styled.section`
//   width: 100vw;
//   height: 100vh;
//   padding-top: 100px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   h1 {
//     text-align: center;
//     font-size: 28px;
//     margin-bottom: 80px;
//   }
//   .trailer-box {
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//   }
//   .trailer-box iframe {
//     width: 960px;
//     height: 540px;
//     margin-bottom: 10px;
//   }
// `;
