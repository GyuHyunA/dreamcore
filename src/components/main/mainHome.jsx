import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Image } from "antd";

const MainHome = () => {
  const [position, setPosition] = useState(0);
  const [toCla, setTocla] = useState(false);

  function onScroll() {
    setPosition(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    if (position > window.innerHeight - 400) {
      setTocla(true);
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (position < 300) {
        setTocla(false);
      }
    };
  }, [position, toCla]);

  return (
    <>
      <MainHomeStyle>
        <div className="text-wrap tw-up">
          <p className="main-text">Digital Contents Design 24Graduation Exhibition</p>
          <p className="main-subtext">울산대학교 디지털콘텐츠디자인 24회 졸업전시회</p>
        </div>
        <div className="home-con">
          <video src="https://rcsvr.myds.me/agh/ma_vi1.mp4" muted autoPlay loop></video>
        </div>
        <div className="text-wrap tw-down">
          <div className="date">
            <p>10.31 -</p>
            <p>11.06</p>
          </div>
          <div className="time">
            <p>OPEN. 5PM - 6PM Mon</p>
            <p>9AM - 5PM Tue - Fri</p>
          </div>
        </div>
      </MainHomeStyle>
      <MainPosterStyle>
        <div className={`title-wrap`}>
          <h1 className="title">DREAMCORE</h1>
        </div>
        <div className={`poster-wrap`}>
          {/* <div className={`poster_img ${toCla ? "ia" : " "}`}></div> */}
          <Image
            src="assets/image/poster.jpeg"
            alt=""
            className={`poster_img ${toCla ? "ia" : " "}`}
          />
          <div className={`poster_text ${toCla ? "ta" : " "}`}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus ut eligendi voluptates quam minus earum quis temporibus non
              consectetur ullam, iure dolor quasi velit, corrupti tempore amet fuga eaque itaque?
            </p>
          </div>
        </div>
      </MainPosterStyle>
    </>
  );
};

export default MainHome;

const MainHomeStyle = styled.section`
  width: 100vw;
  height: 100vh;
  .home-con {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    video {
      position: relative;
      width: 100%;
      height: 100%;
      z-index: 1;
      object-fit: cover;
      object-position: center;
    }
  }
  .text-wrap {
    position: absolute;
    z-index: 2;
    font-family: "Pretendard-b";
    &.tw-up {
      top: 70px;
      left: 150px;
      color: #3b3b3b;
    }
    &.tw-down {
      bottom: 60px;
      left: 150px;
      color: #3b3b3b;
    }

    .main-text {
      font-size: 28px;
      font-weight: 700;
    }
    .main-subtext {
      font-size: 24px;
      font-weight: 700;
    }
    .date {
      position: relative;
      font-size: 38px;
      font-weight: 700;
    }
    .time {
      position: relative;
      font-size: 20px;
      display: flex;
      align-items: center;
      p:nth-child(1) {
        margin-right: 20px;
      }
    }
  }
  @media screen and (max-width: 1280px) {
    .home-con {
      width: 100%;
      video {
        width: 100vw;
        object-fit: cover;
      }
    }
    .text-wrap {
      &.tw-up {
        left: 70px;
        color: #3b3b3b;
      }
      &.tw-down {
        left: 70px;
        color: #3b3b3b;
      }
      .main-text {
        font-size: 20px;
      }
      .main-subtext {
        font-size: 16px;
      }
      .date {
        font-size: 30px;
      }
      .time {
        font-size: 12px;
      }
    }
  }
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
    /* padding: 0 210px; */
    .poster_img {
      width: 450px;
      height: 650px;
      /* background-color: lightgray; */
      /* margin-right: 30px; */
      transform: translateX(225px);
      opacity: 0;
      z-index: 3;
    }
    .ant-image-mask {
      transform: translateX(-30px);
      background: rgba(0, 0, 0, 0);
      .ant-image-mask-info{
        display: none;
      }
    }
    .ia {
      opacity: 1;
      transition: 1s;
      transform: translateX(-30px);
    }
    .poster_text {
      width: 450px;
      height: 650px;
      display: inline-flex;
      align-items: center;
      transform: translateX(-225px);
      opacity: 0;
    }
    .ta {
      opacity: 1;
      transform: translateX(30px);
      transition: 1s;
      transition-delay: 1s;
    }
  }
  @media screen and (max-width: 1280px) {
    .poster-wrap {
      .poster_img {
        width: calc(450px / 2);
        height: calc(650px / 2);
      }
      .poster_text {
        width: calc(450px / 2);
        height: calc(650px / 2);
      }
    }
  }
`;

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
