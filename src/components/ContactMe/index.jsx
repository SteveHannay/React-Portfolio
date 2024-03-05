import React from "react";
import "./style.css";

function ContactMe(props) {
  return (

    <section className="page-section contact" id="contact">

      <div className="container text-center">

        <div className="row">
          <div className="col">
            <div className="card">
            <p>Email me at Hannay.Steve@Googlemail.com</p>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <a href="https://www.linkedin.com/in/steve-hannay-68401a1b"> LinkedIn</a>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <a href="https://github.com/SteveHannay"> Github</a>
            </div>
          </div>
        </div>
      </div>
      
    </section>

  )
}

export default ContactMe;
