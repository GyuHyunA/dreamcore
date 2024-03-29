import React from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { multiDataList } from "../../../data/multiData";

const ProjectUserMulti = () => {
  const { productId } = useParams();
  let shortcut = multiDataList[productId];

  return (
    <ProjectUserMultiStyle>
      <div className="multi-contain">
        <h1 className="mu-title">{shortcut.title}</h1>
        <p className="mu-name">{shortcut.name}</p>
        <div className="mu-img-wrap">
          <img src={`${process.env.PUBLIC_URL}/assets/mulimg/mul_p1_${shortcut.id}.webp`} alt="" />
          <img src={`${process.env.PUBLIC_URL}/assets/mulimg/mul_p2_${shortcut.id}.webp`} alt="" />
        </div>
      </div>
    </ProjectUserMultiStyle>
  );
};

export default ProjectUserMulti;

const ProjectUserMultiStyle = styled.div`
  width: 100vw;
  padding-top: 100px;
  margin-bottom: 100px;
  .multi-contain {
    width: 100%;
    text-align: center;
    .mu-title {
      font-size: 34px;
      margin-bottom: 80px;
    }
    .mu-name {
      font-size: 18px;
      margin-bottom: 80px;
    }
    .mu-img-wrap {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img {
        width: 1192px;
        height: 842px;
        &:nth-child(1) {
          /* margin-bottom: 30px; */
        }
      }
    }
  }

  @media screen and (max-width: 1280px) {
    .multi-contain {
      .mu-img-wrap {
        img {
          width: 842.5px;
          height: 596px;
          &:nth-child(1) {
            /* margin-bottom: 30px; */
          }
        }
      }
    }
  }
`;
