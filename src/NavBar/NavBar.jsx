import React, { useState } from "react";
import { FaBars, FaChevronRight, FaTimes } from "react-icons/fa";
import "./Navbar.css";

import { Link, animateScroll as scroll } from "react-scroll";

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
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={600}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={600}
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="course"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={600}
                >
                  Course
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={600}
                >
                  Contact us
                </Link>
              </li>
            </ol>
          </div>
          <div className="navJoin">
            <button className="btn">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={600}
              >
                Join Now
              </Link>
            </button>
          </div>
          <button
            className="mobileMenuBTN"
            onClick={() => {
              setMobileMenu(!mobileMenu);
            }}
          >
            <FaBars color="#058A42" size={30} />
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
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={600}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={600}
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="course"
                spy={true}
                smooth={true}
                offset={-70}
                duration={600}
              >
                Course
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={600}
              >
                Contact us
              </Link>
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
