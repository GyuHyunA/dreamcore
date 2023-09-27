import React from "react";
import { styled } from "styled-components";

const MainFooter = () => {
  return (
    <MainFooterStyle>
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
    </MainFooterStyle>
  );
};

export default MainFooter;

const MainFooterStyle = styled.footer`
  width: 100vw;
  height: 300px;
  background-color: lightgray;
  padding: 0 210px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-size: 28px;
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 5px;
  }
`;
