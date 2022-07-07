import React from "react";
import "./Course.css";
import CardComponent from "./CardComponent";

const Course = () => {
  return (
    <div className="container mt-5" id="course">
      <div className="row my-3">
        <div className="col-12 text-center courseHeader my-5">
          <h2>Check Our Courses</h2>
        </div>
      </div>
      <div className="row courseList px-4 mb-5 justify-content-center">
        <CardComponent
          title={"JS full course"}
          desc={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam,fugit."
          }
          img={"../images/about-1.svg"}
        />
        <CardComponent
          title={"React JS"}
          desc={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam,fugit."
          }
          img={"../images/about-1.svg"}
        />
        <CardComponent
          title={"Frontend"}
          desc={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam,fugit."
          }
          img={"../images/about-1.svg"}
        />
      </div>
    </div>
  );
};

export default Course;
