import React from "react";
import "./style.css";

import profilePicture from '../../../assets/images/IMG_3748.jpg'

function PageBanner(props) {
  return (

    <div className="jumbotron jumbotron-fluid" id="hero-section">
      <div className="container">
        <h2 className="">Welcome to my Portfolio page</h2>
        <img src= {profilePicture} alt="profile photo of Steven Hannay" width="200"/>
        <p>
          This is what I have been learning at the Web Developer Skills Bootcamp<br />
          Steven Hannay<br /><br />
        </p>
      </div>
    </div>
    
  )
}

export default PageBanner;
