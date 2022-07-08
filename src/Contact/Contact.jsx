import React, { useState } from "react";
import "./Contact.css";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
  UncontrolledAccordion,
} from "reactstrap";

const Contact = () => {
  const [accord, setAccord] = useState(true);
  return (
    <div className="container mt-5" id="contact">
      <div className="row">
        <div className="col-12 text-center contactHeader mt-5 pt-5">
          <h2>Contact Us</h2>
        </div>
        <div className="col-12">
          <div className="row mt-4 formRow">
            <div className="col-6 text-center order-2">
              <img src="../images/contact-2.svg" alt="contactImage1" className="img-fluid"/>
            </div>
            <div className="col-5 text-center align-self-center">
              <div className="contactForm">
                <h3 className="formFloat">Get in touch with us.</h3>
                <div class="group">
                  <input type="text" required />
                  <span class="highlight"></span>
                  <span class="bar"></span>
                  <label>Name</label>
                </div>
                <div class="group">
                  <input type="text" required />
                  <span class="highlight"></span>
                  <span class="bar"></span>
                  <label>Email</label>
                </div>
                <div class="group">
                  <input type="text" required />
                  <span class="highlight"></span>
                  <span class="bar"></span>
                  <label>Message</label>
                </div>
                <button
                  onClick={() => {
                    alert("Sent");
                  }}
                  className="btn contactBTN"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
          <div className="row mt-5 pt-5 faqrow">
            <div className="col-6 align-self-center">
              <h3 className="text-center mb-3"><b>Frequently Asked Quesntions</b></h3>
              <div>
                <UncontrolledAccordion
                  defaultOpen={1}
                >
                  <AccordionItem>
                    <AccordionHeader targetId="1">Question 1?</AccordionHeader>
                    <AccordionBody accordionId="1">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Est minus amet sequi quam aspernatur quidem.
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionHeader targetId="2">Question 2?</AccordionHeader>
                    <AccordionBody accordionId="2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Est minus amet sequi quam aspernatur quidem.
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionHeader targetId="3">Question 3?</AccordionHeader>
                    <AccordionBody accordionId="3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Est minus amet sequi quam aspernatur quidem.
                    </AccordionBody>
                  </AccordionItem>
                </UncontrolledAccordion>
              </div>
            </div>
            <div className="col-6">
              <img src="../images/contact-1.svg" alt="contactFAQ" className="img-fluid"/>
            </div>
          </div>
        </div>
        <div className="col-12 text-center footerText my-3">© 2022 Educate. All Rights Reserved</div>
      </div>
    </div>
  );
};

export default Contact;
