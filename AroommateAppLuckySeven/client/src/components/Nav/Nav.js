import React from "react";

const Nav = () =>

<nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="./myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                        
      </button>
      <a className="navbar-brand" href="./">ROOMMATE QUEST</a>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav">
        <li className="active"><a href="./">Home</a></li>
        <li className="dropdown">
          <a className="dropdown-toggle" data-toggle="dropdown" href="./">SEARCH <span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><a href="./">I NEED A ROOM</a></li>
            <li><a href="./">I HAVE A ROOM</a></li>
           </ul>
        </li>        
        <li className="dropdown">
          <a className="dropdown-toggle" data-toggle="dropdown" href="./">CREATE ACCOUNT <span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><a href="./">I NEED A ROOM</a></li>
            <li><a href="./">I HAVE A ROOM</a></li>
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



//   // <nav className="navbar navbar-inverse navbar-top">
//   //   <div className="container-fluid">
//   //     <div className="navbar-header">
//   //       <button type="button" className="collapsed navbar-toggle">
//   //         <span className="sr-only">Toggle navigation</span>
//   //         <span className="icon-bar" /> <span className="icon-bar" />
//   //         <span className="icon-bar" />
//   //       </button>
//   //       <a href="/" className="navbar-brand">
//   //         ROOMATE QUEST
//   //       </a>
//   //       <a href="/" className="navbar-brand">
//   //         I NEED A ROOM
//   //       </a>
//   //       <a href="/" className="navbar-brand">
//   //         I HAVE A ROOM
//   //       </a>
//   //       <a href="/" className="navbar-brand">
//   //         CREATE ACCOUNT
//   //       </a>
//   //       <a href="/" className="navbar-brand">
//   //         ABOUT US
//   //       </a>
//   //       <a href="/" className="navbar-brand">
//   //         CONTACT US
//   //       </a>
//   //     </div>
      
//   //   </div>
//   // </nav>;

export default Nav;
