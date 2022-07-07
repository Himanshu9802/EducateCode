import React from "react";
import ParticlesComponent from "../Particles/Particles";
import "./style.css";

import { FaAngleDoubleDown, FaSearch } from "react-icons/fa";

const MainHome = () => {
  return (
    <div className="container-fluid h-100">
      <ParticlesComponent id="tsparticles" />
      {/* home */}
      <div
        className="row h-100 align-items-center justify-content-center"
        id="Home"
      >
        <div className="col-11">
          <div className="d-block searchContainer">
            <div className="typewriter">
              <h1>Start Learning...</h1>
            </div>
            <div className="d-flex">
              <input className="form-control searchInput" />
              <button className="btn searchBTN">
                <FaSearch color="#ced4da" size={22} />
              </button>
            </div>
          </div>
          <div className="scrollDownButtonContainer">
            <button className="btn scrollDownButton">
              <FaAngleDoubleDown color="#171E2B" size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHome;
