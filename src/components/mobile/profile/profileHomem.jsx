import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { profileDataList } from "../../../data/profileData";

const ProfileHomeM = () => {
  const [tar, setTar] = useState(0);
  const [btar, setbtar] = useState(false);

  function onScroll() {
    setTar(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    if (tar === 0) {
      setbtar(true);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [tar, btar]);

  return (
    <>
      <ProfileHomeMStyle>
        <h2>Profile</h2>
        <ContentsListStyle className={`${btar ? "act" : ""}`}>
          {profileDataList.map((v) => {
            return <ListContainer key={v.id} kname={v.kname} ename={v.ename} email={v.email} profile={v.profile} />;
          })}
        </ContentsListStyle>
      </ProfileHomeMStyle>
    </>
  );
};

export default ProfileHomeM;

const ListContainer = ({ kname, ename, email, profile }) => {
  let nameSplit = ename.split(" ");
  // console.log(nameSplit);
  let comName = nameSplit[0] + nameSplit[1];
  // console.log(comName.toLowerCase());
  return (
    <li>
      <Link to={""} style={{ cursor: "auto" }}>
        <div>
        <img src={`${process.env.PUBLIC_URL}/assets/profileimg/${comName}.${"jpg"}`} alt="" />
        </div>
      </Link>
      <div className="name-box">
        <h1 className="kname">{kname}</h1>
        <p className="ename">{ename}</p>
        <p className="email">{email}</p>
      </div>
    </li>
  );
};

const ProfileHomeMStyle = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
  h2 {
    padding-top: 100px;
    font-size: 22px;
    margin-bottom: 50px;
    text-align: center;
  }
  .profile-navlist {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    li {
      list-style: none;
      font-size: 18px;
      margin: 0 50px;
    }
  }
`;

const ContentsListStyle = styled.ul`
  display: grid;
  grid-template-columns: 150px 150px;
  justify-content: center;
  gap: 20px;
  opacity: 0;
  transition: 1s;
  transition-delay: 0.5s;
  &.act {
    opacity: 1;
  }
  li {
    width: 150px;
    height: 200px;
    list-style: none;
    margin-bottom: 70px;
    a div {
      width: 150px;
      height: 200px;
      background-color: lightgray;
      border-radius: 10px;
      img {
        width: inherit;
        height: inherit;
      }
    }
    .name-box {
      margin-top: 10px;
      .kname {
        font-size: 12px;
        margin-bottom: 10px;
      }
      .ename,
      .email {
        font-size: 12px;
        font-family: "Pretendard-l";
        color: #3b3b3b;
      }
    }
  }
`;
