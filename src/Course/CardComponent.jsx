import React from "react";
import { FaChevronRight } from "react-icons/fa";

const CardComponent = (props) => {
  const { title, img, desc } = props;
  return (
    <div className="courseCardContainer">
      <h3 className="courseHeading">{title}</h3>
      <div className="courseBody">
        <img src={img} alt="courseImage" className="img-fluid"/>
        <p>
          {desc}
        </p>
        <div className="btnContainer">
          <button class="checkMore" role="button">
            <span class="text">
              More <FaChevronRight size={17} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
