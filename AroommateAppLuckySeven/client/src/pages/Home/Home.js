import React, { Component } from "react";
import Carousel from "../../components/Carousel";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Carousel/>
      </div>
    );
  }
}

export default Home;
