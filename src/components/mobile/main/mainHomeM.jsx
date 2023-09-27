import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Image } from "antd";

const MainHomeM = () => {
  const [position, setPosition] = useState(0);
  const [toCla, setTocla] = useState(false);

  function onScroll() {
    setPosition(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    if (position > window.innerHeight - 200) {
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
      <MainHomeMStyle>
        <div className="text-wrap tw-up">
          <p className="main-text">Digital Contents Design 24Graduation Exhibition</p>
          <p className="main-subtext">울산대학교 디지털콘텐츠디자인 24회 졸업전시회</p>
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
      </MainHomeMStyle>
      <MainPosterStyle>
        <div className={`poster-wrap`}>
          <div className={`poster_img ${toCla ? "ia" : " "}`}>
            <Image src="https://rcsvr.myds.me/agh/poster.png" alt="" className={`poster_img ${toCla ? "ia" : " "}`} />
          </div>
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

export default MainHomeM;

const MainHomeMStyle = styled.section`
  width: 100vw;
  height: 100vh;
  background-image: url("https://rcsvr.myds.me/agh/poster_main.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  .text-wrap {
    position: absolute;
    z-index: 2;
    font-family: "Pretendard-b";
    &.tw-up {
      top: 70px;
      left: 20px;
      color: #3b3b3b;
    }
    &.tw-down {
      bottom: 20px;
      left: 20px;
      color: #3b3b3b;
    }
    .main-text {
      font-size: 15px;
      font-weight: 700;
    }
    .main-subtext {
      font-size: 13px;
      font-weight: 700;
    }
    .date {
      position: relative;
      font-size: 24px;
      font-weight: 700;
    }
    .time {
      position: relative;
      font-size: 16px;
      display: flex;
      align-items: center;
      p:nth-child(1) {
        margin-right: 20px;
      }
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

const MainPosterStyle = styled.section`
  width: 100vw;
  height: 100vh;
  .poster-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .poster_img {
      width: 250px;
      height: 350px;
      opacity: 0;
      z-index: 3;
    }
    .ant-image-mask {
      background: rgba(0, 0, 0, 0);
      .ant-image-mask-info {
        display: none;
      }
    }
    .ia {
      opacity: 1;
      transition: 1s;
    }

    .poster_text {
      width: 250px;
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      margin-top: 50px;
      opacity: 0;
      p {
        z-index: 0;
        font-size: 13px;
        &:nth-child(1) {
          margin-bottom: 20px;
        }
      }
    }
    .ta {
      opacity: 1;
      transition: 1s;
      transition-delay: 1s;
    }
  }
  /* 높이에 따른 해상도 차이 쿼리 */
  /* 안드로이드 */
  @media screen and (max-height: 810px) {
    /* height: calc(100vh - 70px); */
    .poster-wrap {
      .poster_img {
        width: 270px;
        height: 370px;
        object-fit: cover;
      }
    }
  }
  /* 아이폰 */
  @media screen and (max-height: 700px) {
    /* height: calc(100vh - 120px); */
    .poster_img {
      width: 150px;
      height: 250px;
    }
  }
`;
