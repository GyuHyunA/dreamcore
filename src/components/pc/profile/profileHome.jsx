import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { profileDataList } from "../../../data/profileData";

const ProfileHome = () => {
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
      <ProfileHomeStyle>
        <h2>Profile</h2>
        <ContentsListStyle className={`${btar ? "act" : ""}`}>
          {profileDataList.map((v) => {
            return <ListContainer key={v.id} kname={v.kname} ename={v.ename} email={v.email} profile={v.profile} />;
          })}
        </ContentsListStyle>
      </ProfileHomeStyle>
    </>
  );
};

export default ProfileHome;

const ListContainer = ({ kname, ename, email, profile }) => {
  let nameSplit = ename.split(" ");
  // console.log(nameSplit);
  let comName = nameSplit[0] + nameSplit[1];
  // console.log(comName.toLowerCase());

  return (
    <li>
      <Link to={""} style={{ cursor: "auto" }}>
        <div className="list-wrap">
          <div className="name-box">
            <div className="filter"></div>
            <h1 className="kname">{kname}</h1>
            <p className="ename">{ename}</p>
            <p className="email">{email}</p>
          </div>
          <img src={`${process.env.PUBLIC_URL}/assets/profileimg/${comName}.${"jpg"}`} alt="" />
        </div>
      </Link>
    </li>
  );
};

const ProfileHomeStyle = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;

  h2 {
    padding-top: 100px;
    font-size: 28px;
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
  grid-template-columns: 250px 250px 250px;
  justify-content: center;
  gap: 80px;
  opacity: 0;
  transition: 1s;
  transition-delay: 0.5s;

  &.act {
    opacity: 1;
  }

  li {
    width: 251px;
    height: 322.535px;
    list-style: none;
    position: relative;
    a .list-wrap {
      width: 251px;
      height: 322.535px;
      /* background-color: lightgray; */
      .name-box {
        padding: 20px 0;
        padding-left: 15px;
        position: absolute;
        bottom: 0;
        left: 0;
        opacity: 0;
        transition: 0.5s;
        &:hover {
          opacity: 1;
        }
        p {
          font-size: 16px;
        }
        .kname {
          font-size: 16px;
          margin-bottom: 10px;
        }
        .ename,
        .email {
          font-family: "Pretendard-l";
          color: #3b3b3b;
        }
        .filter {
          position: absolute;
          width: 251px;
          height: 322.535px;
          bottom: 0;
          left: 0;
          background-color: #00000020;
        }
      }
      img {
        width: inherit;
        height: inherit;
      }
    }
  }
`;
