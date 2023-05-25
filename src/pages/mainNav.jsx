import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const MainNav = () => {
  return (
    <MainNavStyle>
      <div className="nav-left">
        <Link to="/">
          <h1>DREAMCORE</h1>
        </Link>
      </div>
      <ul className="nav-right">
        <li className="link">
          <Link to="about">About</Link>
        </li>
        <li className="link">
          <Link to="project">Project</Link>
        </li>
        <li className="link">
          <Link to="profile">Profile</Link>
        </li>
      </ul>
    </MainNavStyle>
  );
};

export default MainNav;

const MainNavStyle = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 150px;
  z-index: 99999;
  .nav-left {
    position: relative;
    h1 {
      font-size: 28px;
      font-weight: 700;
    }
  }
  .nav-right {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    .link {
      margin-left: 82px;
      &:nth-child(1) {
        margin: 0;
      }
    }
  }
`;
