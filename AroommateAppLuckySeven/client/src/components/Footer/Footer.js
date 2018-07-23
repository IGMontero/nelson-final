import React from "react";
import "./Footer.css";

export class Footer extends React.Component{
  render() {
    return (
      <div className="footer">
        <div className="social-buttons-container">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-google-plus-g"></i>
        <i className="fab fa-linkedin-in"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-pinterest-p"></i>
        </div>
        <div className="author-container">
          Made by Nelson Quinones
        </div>
      </div>
    )
  }
}

export default Footer;
