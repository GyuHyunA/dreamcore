import React from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { videoDataList } from "../../../data/videoData";

const ProjectUsermVideo = () => {
  const { productId } = useParams();
  let shortcut = videoDataList[productId];
  return (
    <ProjectUsermVideoStyle>
      <div className="video-contain">
        <h1 className="vi-title">{shortcut.title}</h1>
        <p className="vi-name">{shortcut.name}</p>
        <video className="vi-video" controls preload="auto">
          <source src={`${process.env.PUBLIC_URL}/assets/video/${shortcut.link}`} />
        </video>
      </div>
      <div className="dorok-contain">
        <img src={shortcut.poster} alt="" className="do-dorok" />
      </div>
    </ProjectUsermVideoStyle>
  );
};

export default ProjectUsermVideo;

const ProjectUsermVideoStyle = styled.div`
  width: 100vw;
  padding-top: 100px;
  margin-bottom: 100px;

  .video-contain {
    width: 100%;
    text-align: center;
    margin-bottom: 100px;

    .vi-title {
      font-size: 20px;
      margin-bottom: 30px;
    }
    .vi-name {
      font-size: 15px;
      margin-bottom: 30px;
    }
    .vi-video {
      width: 384px;
      height: 216px;
      background-color: #eaeaea;
      source {
        width: inherit;
        height: inherit;
      }
    }
  }
  .dorok-contain {
    display: flex;
    justify-content: center;
    align-items: center;
    .do-dorok {
      width: 320px;
      height: 452px;
    }
  }
`;
