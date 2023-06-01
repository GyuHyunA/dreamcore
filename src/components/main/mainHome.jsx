import React from "react";
import { styled } from "styled-components";

const MainHome = () => {
  return (
    <>
      <MainHomeStyle>
        <div className="home-con">
          <video src="/assets/video/ma_vi1.mp4" muted autoPlay loop></video>
          {/* <img src="/assets/image/main_3.png" alt="" /> */}
        </div>
        <div className="text-wrap">
          <p>Digital Contents Design 24Graduation Exhibition</p>
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
              ut eligendi voluptates quam minus earum quis temporibus non
              consectetur ullam, iure dolor quasi velit, corrupti tempore amet
              fuga eaque itaque?
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
    /* display: flex;
    justify-content: center;
    align-items: center; */
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
    bottom: 30px;
    left: 150px;
    z-index: 2;
    p {
      font-size: 20px;
      font-weight: 700;
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
