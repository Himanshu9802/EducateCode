import React from "react";

import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home";
import About from "../About/About";
import Course from "../Course/Course";
import Contact from "../Contact/Contact";

const Index = () => {
  return (
    <div className="container-fluid h-100 px-0">
      <NavBar />
      <Home/>
      <About/>
      <Course/>
      <Contact/>
    </div>
  );
};

export default Index;
