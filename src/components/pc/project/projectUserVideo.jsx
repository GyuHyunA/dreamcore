import { useLocation, useParams } from "react-router-dom";
import { styled } from "styled-components";
import { videoDataList } from "../../../data/videoData";
import YouTube from "react-youtube";

const ProjectUserVideo = () => {
  const { productId } = useParams();
  let paramId = useLocation().pathname.split("/")[3];
  let shortcut = videoDataList[productId];

  return (
    <ProjectUserVideoStyle>
      <div className="video-contain">
        <h1 className="vi-title">{shortcut.title}</h1>
        <p className="vi-name">{shortcut.name}</p>
        <div className="vi-video">
          <YouTube
            className="vi-frame"
            videoId={shortcut.link} //동영상 주소
            opts={{
              playerVars: {
                disablekb: 1,
                modestbranding: 1, //컨트롤 바에 유튜브 로고 표시 여부
                loop: 1, //반복 재생
              },
            }}
          />
        </div>
        {/* <video className="vi-video" controls> */}
        {/* <source src={`${process.env.PUBLIC_URL}/assets/video/${shortcut.link}`} /> */}
        {/* <source src={`${shortcut.link}`} /> */}
        {/* </video> */}
      </div>
      <div className="dorok-contain">
        {paramId === "0" ? (
          <img src={`${process.env.PUBLIC_URL}/assets/videoimg/mo_p2_${shortcut.id}.webp`} alt="" className="do-dorok" />
        ) : (
          <img src={`${process.env.PUBLIC_URL}/assets/videoimg/mo_p_${shortcut.id}.webp`} alt="" className="do-dorok" />
        )}
      </div>
    </ProjectUserVideoStyle>
  );
};

export default ProjectUserVideo;

const ProjectUserVideoStyle = styled.div`
  width: 100vw;
  padding-top: 100px;
  .video-contain {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .do-dorok {
      width: 520px;
      height: 728px;
    }
  }
`;
