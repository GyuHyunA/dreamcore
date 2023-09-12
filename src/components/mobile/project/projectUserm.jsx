import React from "react";
import { useParams } from "react-router-dom";
import { dummyList } from "../../../dummy/dummylist";
import { styled } from "styled-components";

const ProjectUserM = () => {
  const { productId } = useParams();
  const product = dummyList.find((v) => v.link === productId);
  console.log(product)
  return (
    <ProjectUserMStyle>
      <div className="title-wrap">
        <div className="back-img">
          {/* <img src={product.work[1].img} alt="" /> */}
          <div className="imgbox"></div>
        </div>
        <h2>이건 어떤 작품인가요?</h2>
      </div>
      <div className="pr-wrap">
        <div className="presentation-wrap">
          <p className="text">이러이러한 색상을 가지고 있다</p>
        </div>
      </div>
    </ProjectUserMStyle>
  );
};

export default ProjectUserM;

const ProjectUserMStyle = styled.div`
  padding-top: 110px;
  .title-wrap {
    position: relative;
    width: 100%;
    height: 300px;
    .back-img {
      /* overflow: hidden; */
      width: inherit;
      height: inherit;
      object-fit: cover;
      object-position: center;
      //이미지 대용
      .imgbox {
        width: inherit;
        height: inherit;//이미지 넣을 때 뻬기
        background-color: lightgray;
      }
    }
    h2 {
      position: absolute;
      top: 30px;
      padding: 0 150px;
      color: black;
    }
  }

  .pr-wrap {
    width: 100%;
    height: calc(100vh - 410px);
    padding: 0 150px;
    padding-top: 50px;
  }
`;
