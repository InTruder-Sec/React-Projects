import React from "react";
import "./footer.css";
import logo from "./../../images/logo.png";

function Footer() {
  return (
    <div className="footer">
      <div className="logo--nav">
        <img className="nav--logo--et" alt="logo" src={logo}></img>
        <div className="nav--logo--title">PHOEINIX.</div>
      </div>
      <hr></hr>
      <div className="footer--copy">
        {" "}
        &#169; Copyright All Rights Reserved | Phoeinix
      </div>
    </div>
  );
}

export default Footer;
