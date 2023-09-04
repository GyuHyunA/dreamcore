import React from "react";
import { styled } from "styled-components";

const MainFooterm = () => {
  return (
    <MainFootermStyle>
      <h1>DREAMCORE</h1>
      <p>
        <span>Tell : </span>
        <a href="01023513785">052-259-2676</a>
      </p>
      <p>
        <span>Location : </span>
        <a href="https://naver.me/GRz9ZQGm">울산 남구 대학로 93, 28호관 3층</a>
      </p>
      <p>Copyright 2023. DCD24 Graduation Team All rights reserved.</p>
    </MainFootermStyle>
  );
};

export default MainFooterm;

const MainFootermStyle = styled.footer`
  width: 100vw;
  height: 200px;
  padding: 0 20px;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-size: 22px;
    margin-bottom: 20px;
  }
  p {
    font-size: 12px;
    margin-bottom: 5px;
  }
`;
