import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { dummyList } from "../../../dummy/dummylist";

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
        <h2>profile</h2>
        {/* <ul className="profile-navlist">
          <li>
            <Link href="/profile">ㄱ~ㅂ</Link>
          </li>
          <li>
            <Link href="/profile">ㅅ~ㅎ</Link>
          </li>
        </ul> */}
        <ContentsListStyle className={`${btar ? "act" : ""}`}>
          {dummyList.map((v) => {
            return <ListContainer num={v.id} link={v.link} key={v.id} />;
          })}
        </ContentsListStyle>
      </ProfileHomeMStyle>
    </>
  );
};

export default ProfileHomeM;

const ListContainer = ({ num, link }) => {
  return (
    <li>
      <Link to="">
        <div></div>
      </Link>
      <p>이름</p>
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
  grid-template-columns: 150px 150px ;
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
    text-align: center;
    margin-bottom: 30px;
    a div {
      width: 150px;
      height: 200px;
      background-color: lightgray;
      border-radius: 10px;
    }
    p{
      margin-top: 10px;
    }
  }
`;
