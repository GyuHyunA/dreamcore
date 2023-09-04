import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { BiMenu } from "react-icons/bi";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const MainNavm = () => {
  // drawer State
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  
  return (
    <>
      {/* Drawer */}
      <Drawer open={isOpen} onClose={toggleDrawer} direction="top" className="drawer" size={250} zIndex={100} lockBackgroundScroll={true}>
        <ul className="hamenu-drawer">
          <li className="link">
            <Link to="about">About</Link>
          </li>
          <li className="link">
            <Link to="project/home">Project</Link>
          </li>
          <li className="link">
            <Link to="profile">Profile</Link>
          </li>
        </ul>
      </Drawer>

      {/* DOM */}
      <MainNavmStyle>
        <div className="nav-left">
          <Link to="/">
            <h1>DREAMCORE</h1>
          </Link>
        </div>
        <div className="hamenu-contain">
          <button onClick={toggleDrawer} className="hamenu-img">
            <BiMenu />
          </button>
        </div>
      </MainNavmStyle>
    </>
  );
};

export default MainNavm;

const MainNavmStyle = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 99;
  .nav-left {
    position: relative;
    h1 {
      font-family: "Pretendard-b";
      font-size: 22px;
      font-weight: 700;
    }
  }
  .hamenu-contain {
    position: relative;
    .hamenu-img {
      position: relative;
      border: none;
      background: none;
      svg {
        font-size: 30px;
        cursor: pointer;
        color: black;
        &:hover {
          color: gray;
          transition: color 0.5s;
        }
      }
    }
  }

`;
