import React from "react";
import { links } from "../portfolio";
import { SocialIcon } from "react-social-icons";
import Fade from "react-reveal/Fade";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1 className="contact-title">
        <Fade bottom cascade duration={1000}>
          Reach Out To Me!
        </Fade>
      </h1>
      <div className="icon">
        {links.map((link) => (
          <div className="icons">
            {" "}
            <SocialIcon url={link} target="_blank" />{" "}
          </div>
        ))}
      </div>
      <center>
        <hr className="style-f" />
      </center>
      <p className="copyright">
        Socializing and Connecting is really important, which leads to great
        ideas and major breakthroughs. <br />
        You can contact me at the places mentioned above or at +91 9163474373 .
      </p>
    </div>
  );
};

export default Contact;
