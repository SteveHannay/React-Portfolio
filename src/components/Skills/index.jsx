import React from "react";
import "./style.css";

function Skills(props) {
  return (

    <section className ="page-section">
    <p>
      These are some of the skills that I have learned at the Bootcamp 
    </p>
    <ul className="list-group">
      <li className="list-group-item">HTML, CSS and Git</li>
      <li className="list-group-item">Javascript</li>
      <li className="list-group-item">Web API's</li>
      <li className="list-group-item">Third Party API's</li>
      <li className="list-group-item">Server API's</li>
      <li className="list-group-item">Working with ES6 and Node.js</li>
      <li className="list-group-item">Test Driven Development</li>
      <li className="list-group-item">Modern Development with React</li>
      <li className="list-group-item">Advanced React, Testing, and Deployment</li>
    </ul>

  </section>

    

  )
}

export default Skills;
