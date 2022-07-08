import React from "react";
import { FaAngleDoubleDown } from "react-icons/fa";
import ParticlesComponent from "../Particles/Particles";
import "./style.css";

const MainHome = () => {
  return (
    <div className="container-fluid h-100" id="home">
      <ParticlesComponent id="tsparticles" />
      {/* home */}
      <div
        className="row h-100 align-items-center justify-content-center"
        id="Home"
      >
        <div className="col-7 homeIntrotxtBox">
          <h1 className="homeIntroTxt">You can learn from the comfort of your own Home</h1>
        </div>
        <div className="col-5 homeIntroImgBox">
          <img src="../images/homeBanner.png" alt="homeBanner" className="img-fluid" />
        </div>
        <div className="scrollDownButtonContainer">
            <button className="btn scrollDownButton">
              <FaAngleDoubleDown color="#171E2B" size={20} />
            </button>
          </div>
      </div>
    </div>
  );
};

export default MainHome;
