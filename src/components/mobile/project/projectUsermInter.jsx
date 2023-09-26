import React from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { interDataList } from "../../../data/interData";

const ProjectUsermInter = () => {
  const { productId } = useParams();
  let shortcut = interDataList[productId];
  return (
    <ProjectUsermInterStyle>
      <div className="video-contain">
        <h1 className="vi-title">{shortcut.title}</h1>
        <p className="vi-name">{shortcut.name}</p>
        {/* <video className="vi-video" controls>
          <source src={`${process.env.PUBLIC_URL}/assets/video/${shortcut.link}`} />
        </video> */}
      </div>
      <div className="dorok-contain">
        <img src={shortcut.pan} alt="" className="do-dorok" />
      </div>
    </ProjectUsermInterStyle>
  );
};

export default ProjectUsermInter;

const ProjectUsermInterStyle = styled.div`
  width: 100vw;
  padding-top: 100px;
  .video-contain {
    width: 100%;
    /* height: 100vh; */
    text-align: center;
    .vi-title {
      font-size: 20px;
      margin-bottom: 30px;
    }
    .vi-name {
      font-size: 15px;
      margin-bottom: 30px;
    }
    /* .vi-video {
      width: 1280px;
      height: 720px;
      source {
        width: inherit;
        height: inherit;
      }
    } */
  }
  .dorok-contain {
    width: 100%;
    /* height: 100vh; */
    display: flex;
    justify-content: center;
    /* align-items: center; */
    margin-bottom: 100px;
    .do-dorok {
      width: 320px;
      height: 800px;
    }
  }
`;
