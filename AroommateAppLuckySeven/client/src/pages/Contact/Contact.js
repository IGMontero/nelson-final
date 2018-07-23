import React, { Component } from "react";
import "./Contact.css";

class About extends Component {
  render() {
    return (
      <div className="contact">
        <div className="contact-content">
          <h1 className="contact-title">Contact Us:</h1>
          <h3>Tel: (806) 236-1745</h3>
          <h3>Email: foobar@contact.com</h3>
          <h3 className="contact-social"><span>Social media:</span>
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-google-plus-g"></i>
          <i className="fab fa-linkedin-in"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-pinterest-p"></i>
          </h3>
        </div>
      </div>
    );
  }
}

export default About;
