import React from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { interDataList } from "../../../data/interData";

const ProjectUserInter = () => {
  const { productId } = useParams();
  console.log(productId);
  let shortcut = interDataList[productId];
  return (
    <ProjectUserInterStyle>
      <div className="video-contain">
        <h1 className="vi-title">{shortcut.title}</h1>
        <p className="vi-name">{shortcut.name}</p>
        <video className="vi-video" controls>
          <source src={`${process.env.PUBLIC_URL}/assets/video/${shortcut.link}`} />
        </video>
      </div>
      <div className="dorok-contain">
        <img src={`${process.env.PUBLIC_URL}/assets/videoimg/dummy.png`} alt="" className="do-dorok" />
      </div>
    </ProjectUserInterStyle>
  );
};

export default ProjectUserInter;

const ProjectUserInterStyle = styled.div`
  width: 100vw;
  padding-top: 100px;
  .video-contain {
    width: 100%;
    height: 100vh;
    text-align: center;
    .vi-title {
      font-size: 34px;
      margin-bottom: 80px;
    }
    .vi-name {
      font-size: 18px;
      margin-bottom: 80px;
    }
    .vi-video {
      width: 1280px;
      height: 720px;
      source {
        width: inherit;
        height: inherit;
      }
    }
  }
  .dorok-contain {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .do-dorok{
      width: 520px;
      height: 728px;
    }
  }
`;
