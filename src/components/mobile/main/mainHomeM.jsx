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
          {/* <div className={`poster_img ${toCla ? "ia" : " "}`}></div> */}
          <Image src="https://rcsvr.myds.me/agh/poster.png" alt="" className={`poster_img ${toCla ? "ia" : " "}`} />
          <div className={`poster_text ${toCla ? "ta" : " "}`}>
            <p>드림코어는 몽환적임과 익숙하지만 현실과 동떨어진 괴리감으로 낯설음을 동시에 안겨주는 스타일을 의미하는 단어입니다</p>
            <p>미디어 콘텐츠를 다루며 익숙한 환경에서 항상 새로운 시도를 하는 우리와 닮아 키워드로 선정하였습니다</p>
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
    }
    .ant-image-mask {
      background: rgba(0, 0, 0, 0);
      .ant-image-mask-info {
        display: none;
      }
    }

    .poster_text {
      width: 250px;
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      p {
        z-index: 0;
        font-size: 13px;
        &:nth-child(1) {
          margin-bottom: 20px;
        }
      }
    }
  }
  /* 높이에 따른 해상도 차이 쿼리 */
  /* 안드로이드 */
  @media screen and (max-height: 810px) {
    height: calc(100vh - 70px);
    .poster-wrap {
      .poster_img {
        width: 200px;
        height: 300px;
        object-fit: cover;
      }
    }
  }
  /* 아이폰 */
  @media screen and (max-height: 700px) {
    height: calc(100vh - 120px);
    .poster_img {
      width: 100px;
      height: 200px;
    }
  }
`;
