import React from "react";
import "./style.css";

function PageNavbar(props) {
  return (

  <nav className="navbar navbar-expand-lg bg-body-tertiar" id="mainNav">
    <div className="container-fluid">

      <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="navbar-nav">

          <li className="nav-item">
            <a className="nav-link" href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#skills">Skills</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">About Me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact Me</a>
          </li>
        </ul>

      </div>
    </div>
  </nav>
    
  )
}

export default PageNavbar;
