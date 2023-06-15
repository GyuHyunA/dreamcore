import React from "react";
import { styled } from "styled-components";

const ReadyPage = () => {
  return (
    <ReadyStyle>
      <h1>섹션 준비중입나다</h1>
    </ReadyStyle>
  );
};

export default ReadyPage;

const ReadyStyle = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;
