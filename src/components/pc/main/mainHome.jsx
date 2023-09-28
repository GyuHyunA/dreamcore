import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Image } from "antd";
import { posterImg } from "../../../data/imgDataList";

const MainHome = () => {
  const [position, setPosition] = useState(0);
  const [toCla, setTocla] = useState(false);
  // const auRef = useRef();

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
        {/* <AudioStyle controls loop autoPlay preload="auto" ref={auRef}>
          <source src="assets/dreambgm.mp3" />
        </AudioStyle> */}
        <div className="text-wrap tw-up">
          <p className="main-text">Digital Contents Design 24Graduation Exhibition</p>
          <p className="main-subtext">울산대학교 디지털콘텐츠디자인 24회 졸업전시회</p>
        </div>
        <div className="home-con">
          <video src={`${process.env.PUBLIC_URL}/assets/video/ma_viv2.mp4`} muted autoPlay loop></video>
        </div>
        <div className="text-wrap tw-down">
          <div className="date">
            <p>10.30 -</p>
            <p>11.05</p>
          </div>
          <div className="time">
            <p>OPEN. 5PM - 6PM Mon</p>
            <p>9AM - 6PM Tue - Fri</p>
          </div>
        </div>
      </MainHomeStyle>
      <MainPosterStyle>
        <div className={`poster-wrap`}>
          {/* <div className={`poster_img ${toCla ? "ia" : " "}`}></div> */}
          <Image src={posterImg} alt="" className={`poster_img ${toCla ? "ia" : " "}`} />
          <div className={`poster_text ${toCla ? "ta" : " "}`}>
            <p>
              Dreamcore는 꿈과 현실 간의 연결을 의미합니다.
              <br />
              우리는 꿈을 현실로 만드는 과정을 보여주는 역할을 하며,
              <br /> 디지털 콘텐츠를 통해 미래를 상상하고
              <br /> 과거와 미래가 공존하는 공간으로 이끌어냅니다
            </p>
            <p>앞으로의 우리는 상상력의 한계를 넘어 새로운 세계를 창조하고, 아름다운 이야기를 공유하며, 다양한 경험을 선사할 것입니다</p>
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
      /* object-fit: cover; */
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

  .poster-wrap {
    position: relative;
    width: 100%;
    height: 100%;
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
      flex-direction: column;
      justify-content: center;
      /* align-items: center; */
      transform: translateX(-225px);
      opacity: 0;
      p {
        z-index: 0;
        font-size: 16px;
        &:nth-child(1) {
          margin-bottom: 20px;
        }
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
