import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="container mt-5" id="contact">
      <div className="row">
        <div className="col-12 text-center contactHeader">
          <h2>Contact Us</h2>
        </div>
        <div className="col">
            <div className="contactForm">
            <div class="input-container">
		<input type="text" required=""/>
		<label>Full Name</label>		
	</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
