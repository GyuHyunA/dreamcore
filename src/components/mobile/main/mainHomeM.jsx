import React from "react";
import { styled } from "styled-components";

const MainHomeM = () => {
  return (
    <>
      <MainHomeMStyle>
        <div className="text-wrap tw-up">
          <p className="main-text">Digital Contents Design 24Graduation Exhibition</p>
          <p className="main-subtext">울산대학교 디지털콘텐츠디자인 24회 졸업전시회</p>
        </div>
        <div className="home-con">
          <video src="https://rcsvr.myds.me/agh/ma_vi2.mp4" muted autoPlay loop></video>
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
      </MainHomeMStyle>
      <MainPosterStyle></MainPosterStyle>
    </>
  );
};

export default MainHomeM;

const MainHomeMStyle = styled.section``;

const MainPosterStyle = styled.section``;
