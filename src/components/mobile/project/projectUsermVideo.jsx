import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { styled } from "styled-components";
import { videoDataList } from "../../../data/videoData";
import YouTube from "react-youtube";

const ProjectUsermVideo = () => {
  const { productId } = useParams();
  let paramId = useLocation().pathname.split("/")[3];
  let shortcut = videoDataList[productId];
  return (
    <ProjectUsermVideoStyle>
      <div className="video-contain">
        <h1 className="vi-title">{shortcut.title}</h1>
        <p className="vi-name">{shortcut.name}</p>
        <div className="vi-video">
          <YouTube
            className="vi-frame"
            videoId={shortcut.link} //동영상 주소
            opts={{
              playerVars: {
                modestbranding: 1, //컨트롤 바에 유튜브 로고 표시 여부
                loop: 1, //반복 재생
              },
            }}
          />
        </div>
        {/* <video className="vi-video" controls preload="auto">
          <source src={`${process.env.PUBLIC_URL}/assets/video/${shortcut.link}`} />
        </video> */}
      </div>
      <div className="dorok-contain">
        {paramId === "0" ? (
          <img src={`${process.env.PUBLIC_URL}/assets/videoimg/mo_p2_${shortcut.id}.webp`} alt="" className="do-dorok" />
        ) : (
          <img src={`${process.env.PUBLIC_URL}/assets/videoimg/mo_p_${shortcut.id}.webp`} alt="" className="do-dorok" />
        )}
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
    display: flex;
    flex-direction: column;
    align-items: center;
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
      display: flex;
      justify-content: center;
      .vi-frame {
        width: inherit;
        height: inherit;
        iframe {
          width: inherit;
          height: inherit;
        }
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
