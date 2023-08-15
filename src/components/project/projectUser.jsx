import React from "react";
import { useParams } from "react-router-dom";
import { dummyList } from "../../dummy/dummylist";
import { styled } from "styled-components";

const ProjectUser = () => {
  const { productId } = useParams();
  const product = dummyList.find((v) => v.link === productId);
  return (
    <ProjectUserStyle>
      <div className="title-wrap">
        <div className="back-img">
          <img src={product.work[1].img} alt="" />
        </div>
        <h2>{product.work[0].title}</h2>
      </div>
      <div className="pr-wrap">
        <div className="presentation-wrap">
          <p className="text">이러이러한 색상을 가지고 있다</p>
        </div>
      </div>
    </ProjectUserStyle>
  );
};

export default ProjectUser;

const ProjectUserStyle = styled.div`
  padding-top: 110px;
  .title-wrap {
    position: relative;
    width: 100%;
    height: 300px;
    .back-img {
      overflow: hidden;
      position: relative;
      width: inherit;
      height: inherit;
      object-fit: cover;
      object-position: center;
      img {
        width: inherit;
        /* opacity: .5; */
      }
    }
    h2 {
      position: absolute;
      top: 30px;
      padding: 0 150px;
      color: white;
    }
  }

  .pr-wrap {
    width: 100%;
    height: calc(100vh - 410px);
    padding: 0 150px;
    padding-top: 50px;
  }
`;
