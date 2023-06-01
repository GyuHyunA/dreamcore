import React from "react";
import { styled } from "styled-components";

const MainHome = () => {
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
        <div className="title-wrap">
          <h1 className="title">DREAMCORE</h1>
        </div>
        <div className="poster-wrap">
          <div className="testimg"></div>
          {/* <img src="" alt="" className="poster_img" /> */}
          <div className="poster_text">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus ut eligendi voluptates quam minus earum quis temporibus non
              consectetur ullam, iure dolor quasi velit, corrupti tempore amet fuga eaque itaque?
            </p>
          </div>
        </div>
      </MainPosterStyle>
      <MainTrailerStyle>
        <div className="title-wrap">
          <h1>Trailer</h1>
        </div>
        <div class="trailer-box">
          {/* <embed src="https://www.youtube.com/embed/7MteKIFrxd4?autoplay=1" /> */}
          {/* <video src="https://www.youtube.com/watch?v=7MteKIFrxd4"></video> */}
          <iframe
            src="https://www.youtube.com/embed/L6MZDx02D9I?autoplay=1&mute=1"
            title="Video-Poster"
            frameborder="0"
            allow="fullscreen; autoplay;"
          ></iframe>
          <p>▶︎사운드가 있는 영상입니다</p>
        </div>
      </MainTrailerStyle>
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
      font-size: 32px;
      font-weight: 700;
    }
    .main-subtext {
      font-size: 28px;
      font-weight: 700;
    }
    .date {
      position: relative;
      font-size: 50px;
      font-weight: 700;
    }
    .time {
      position: relative;
      font-size: 24px;
      display: flex;
      align-items: center;
      p:nth-child(1) {
        margin-right: 20px;
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
    padding: 0 210px;
    .testimg {
      width: 450px;
      height: 650px;
      background-color: lightgray;
      margin-right: 30px;
    }
    .poster_text {
      width: 450px;
      height: 650px;
      display: inline-flex;
      align-items: center;
    }
  }
`;

const MainTrailerStyle = styled.section`
  width: 100vw;
  height: 100vh;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    text-align: center;
    font-size: 28px;
    margin-bottom: 150px;
  }
  .trailer-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .trailer-box iframe {
    width: 960px;
    height: 540px;
    margin-bottom: 10px;
  }
`;
