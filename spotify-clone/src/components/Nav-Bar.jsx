import React from "react";
import "./Nav-Bar.css";

function NavBar() {
  return (
    <div className="NavBar">
      <div className="change--display">
        <div className="change--arrow">{"<"}</div>
        <div className="change--arrow">{">"}</div>
      </div>
      <div className="nb--account">
        <div className="sign-in--btn">Sign up</div>
        <div className="login--btn">Log in</div>
      </div>
    </div>
  );
}

export default NavBar;
