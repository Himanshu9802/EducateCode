import React, { useState } from "react";
import { FaBars, FaChevronRight, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const NavBar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div className={mobileMenu ? "navigation responsive" : "navigation"}>
      <nav>
        <div className="d-flex justify-content-between w-100 align-items-center">
          <div className="logoBox">
            <img src="./images/logo.svg" alt="mainMenuLogo" className="logo" />
          </div>
          <div className="navLinks">
            <ol>
              <li>
                <a href="" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="">About us</a>
              </li>
              <li>
                <a href="">Course</a>
              </li>
              <li>
                <a href="">Contact us</a>
              </li>
            </ol>
          </div>
          <div className="navJoin">
            <button
              onClick={() => {
                alert("JoinNow");
              }}
              className="btn"
            >
              Join Now
            </button>
          </div>
          <button
            className="mobileMenuBTN"
            onClick={() => {
              setMobileMenu(!mobileMenu);
            }}
          >
            <FaBars color="#171E2B" size={30} />
          </button>
        </div>
      </nav>
      <div className="mobileMenuItem">
        <div className="d-flex justify-content-between p-3 mb-5">
          <img
            src="./images/logoWhite.svg"
            alt="mobileMenuLogo"
            className="logo"
          />

          <FaTimes
            color="#ff5d5d"
            size={30}
            onClick={() => setMobileMenu(false)}
          />
        </div>
        <div className="navLinksMobile">
          <ol>
            <li>
              <a href="" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="">About us</a>
            </li>
            <li>
              <a href="">Course</a>
            </li>
            <li>
              <a href="">Contact us</a>
            </li>
          </ol>
        </div>
        <div className="navJoinMobile">
          <button
            onClick={() => {
              alert("JoinNow");
            }}
            className="btn"
          >
            Join Now
            <FaChevronRight
              size={17}
              color="#171E2B"
              className="ps-2 align-middle"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
