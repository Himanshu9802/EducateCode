import React from "react";
import { FaClock, FaCode } from "react-icons/fa";
import "./About.css";

const About = () => {
  return (
    <div className="container" id="about">
      <div className="row aboutIntro">
        <div className="col">
          <img src="../images/about-1.svg" alt="" />
        </div>
        <div className="col">
          <div className="text-justify aboutText">
            <h6 className="smallHeading">About Us</h6>
            <h4>
              Educate is a online education portal. where we provide tutorials
              of leading technologies.
            </h4>
            <h4>
              We have partnershiped with technical experts from all over the
              world, they will provide their best knowledge with us. This will
              lead our students to get the proper knowledge with hands-on
              practice.
            </h4>
            <h4>We provide live sessions & a seprate session for doubt.</h4>
          </div>
        </div>
      </div>
      <div className="row featuresSection">
        <div className="col-12 text-center featureHeading">
          <h2>Why study with Educate?</h2>
        </div>
        <div className="col-12">
          <div className="row featureRow">
            <div className="col">
              <div className="text-justify aboutText">
                <h6 className="smallHeading">
                  <FaClock
                    color="#FB8574"
                    className="smallHeadingIcon"
                    size={18}
                  />
                  24x7 Support
                </h6>
                <h4>
                  <b>1. Live Sessions</b>
                </h4>
                <h5>
                  We always provide live sessions with market experts, even you
                  can record sessions to do revision anytime anywhere.
                </h5>
              </div>
            </div>
            <div className="col">
              <img src="../images/about-2.svg" alt="featureImg 1" className="img-fluid"/>
            </div>
          </div>
          <div className="row mt-5 featureRow">
            <div className="col">
              <div className="text-justify aboutText">
                <h6 className="smallHeading">
                  <FaCode
                    color="#FB8574"
                    className="smallHeadingIcon"
                    size={18}
                  />
                  Advanced technologies
                </h6>
                <h4>
                  <b>2. All latest technologies</b>
                </h4>
                <h5>
                  We always all the latest technology with latest techniques to
                  use them. Get experience of working on live projects.
                </h5>
              </div>
            </div>
            <div className="col">
              <img src="../images/about-3.svg" alt="featureImg 2" className="img-fluid"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
