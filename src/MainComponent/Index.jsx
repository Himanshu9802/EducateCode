import React from "react";
import ParticlesComponent from "../Particles/Particles";

import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home";

const Index = () => {
  return (
    <div>
      <NavBar />
      <ParticlesComponent id="tsparticles" />
      <Home/>
    </div>
  );
};

export default Index;
