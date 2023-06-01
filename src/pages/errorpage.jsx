import React from "react";
import { styled } from "styled-components";

const ErrorPage = () => {
  return (
    <ErrorPageStyle>
      <h1>404</h1>
      <p>ErrorPage</p>
      <p>페이지를 찾을 수 없습니다</p>
    </ErrorPageStyle>
  );
};

export default ErrorPage;

const ErrorPageStyle = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 500px;
    position: absolute;
    z-index: 1;
    color: #e7e7e773;
  }
  p {
    font-weight: 700;
    z-index: 5;
    &:nth-child(1) {
      font-size: 40px;
      margin-bottom: 20px;
    }
    &:nth-child(2) {
      font-size: 20px;
      margin-bottom: 20px;
    }
  }
`;
