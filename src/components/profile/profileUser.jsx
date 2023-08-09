import React from "react";
import { useParams } from "react-router-dom";
import { dummyList } from "../../dummy/dummylist";
import { styled } from "styled-components";

const ProfileUserStyle = styled.div`
  width: 100vw;
  height: 100vh;
  .profile-wrap {
    width: 100%;
    height: 400px;
    background: lightgray;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 150px;
    h2 {
    }
  }
  .user_work-wrap {
    width: 100%;
    height: calc(100vh - 400px);
    padding: 0 150px;
    padding-top: 100px;
    .work-table {
      width: 100%;
      margin-top: 50px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      /* place-items: center; */
      .work {
        width: 300px;
        height: 200px;
        border-radius: 10px;
        background: lightcoral;
        .img-box {
          width: inherit;
          height: inherit;
          overflow: hidden;
          img {
            width: inherit;
            object-fit: cover;
            object-position: center;
            display: inline-block;
            border-radius: 10px;
          }
        }
      }
    }
  }
`;

const ProfileUser = () => {
  const { productId } = useParams();
  const product = dummyList.find((v) => v.link === productId);
  const { name, text, work } = product;
  // console.log(product);
  // console.log(work);

  return (
    <>
      <ProfileUserStyle>
        <div className="profile-wrap">
          <h2>{name}</h2>
          <p>{text}</p>
        </div>
        <div className="user_work-wrap">
          <h2>Work</h2>
          <div className="work-table">
            {work.map((v) => {
              return (
                <a href="/profile">
                  <div className="work">
                    <div className="img-box">
                      <img src={v.img} alt={v.tag} />
                    </div>
                    <p color="black">{v.tag}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </ProfileUserStyle>
    </>
  );
};

export default ProfileUser;
