import React from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { multiDataList } from "../../../data/multiData";

const ProjectUsermMulti = () => {
  const { productId } = useParams();
  let shortcut = multiDataList[productId];
  return (
    <ProjectUsermMultiStyle>
      <div className="multi-contain">
        <h1 className="mu-title">{shortcut.title}</h1>
        <p className="mu-name">{shortcut.name}</p>
        <div className="mu-img-wrap">
          <img src={shortcut.pan1} alt="" />
          <img src={shortcut.pan2} alt="" />
        </div>
      </div>
    </ProjectUsermMultiStyle>
  );
};

export default ProjectUsermMulti;

const ProjectUsermMultiStyle = styled.div`
  width: 100vw;
  padding-top: 100px;
  margin-bottom: 100px;
  .multi-contain {
    width: 100%;
    text-align: center;
    .mu-title {
      font-size: 20px;
      margin-bottom: 30px;
    }
    .mu-name {
      font-size: 15px;
      margin-bottom: 30px;
    }
    .mu-img-wrap {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img {
        width: 340px;
        height: 240px;
        &:nth-child(1) {
          /* margin-bottom: 30px; */
        }
      }
    }
  }
`;
