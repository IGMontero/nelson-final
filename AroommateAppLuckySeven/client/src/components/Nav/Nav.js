import React from "react";
import {withRouter} from "react-router-dom";


export class Nav extends React.Component{
  constructor(props) {
    super(props);

    this.handleNavigateToURL = this.handleNavigateToURL.bind(this);
  }

  handleNavigateToURL(path) {
    if (path) {
      this.props.history.push(path);
    }
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="./myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#" onClick={() => this.handleNavigateToURL("/")}>ROOMMATE QUEST</a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#" onClick={() => this.handleNavigateToURL("/")}>Home</a></li>
              <li className="dropdown">
                <a className="dropdown-toggle" id="dropdownSearchButton" data-toggle="dropdown" href="#">SEARCH <span className="caret"></span></a>
                <ul className="dropdown-menu" aria-labelledby="dropdownSearchButton">
                  <li onClick={() => this.handleNavigateToURL("/search/have")}><a href="/search/have">I HAVE A ROOM</a></li>
                  <li onClick={() => this.handleNavigateToURL("/search/need")}><a href="/search/need">I NEED A ROOM</a></li>
                 </ul>
              </li>
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="./">CREATE ACCOUNT <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a onClick={() => this.handleNavigateToURL("/createaccount/need")} href="/createaccount/need">I NEED A ROOM</a></li>
                  <li><a onClick={() => this.handleNavigateToURL("/createaccount/have")} href="/createaccount/have">I HAVE A ROOM</a></li>
                 </ul>
              </li>

              <li><a href="./">ABOUT US</a></li>
              <li><a href="./">CONTACT US</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="./"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
              <li><a href="./"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(Nav);
