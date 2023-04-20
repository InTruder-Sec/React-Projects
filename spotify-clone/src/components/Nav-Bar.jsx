import React from "react";
import { useContext } from "react";
import "./Nav-Bar.css";
import { previousWindow, nxtWindow } from "../App";
import { MainWindow, SongsData } from "./Main";

function ForwardWindow() {
  // let value = useContext(MainWindow);
  // value(() => {
  //   return {
  //     home: false,
  //     playwin: true,
  //   };
  // });
  // document.getElementById("next--arrow").style.cursor = "not-allowed";
  // document.getElementById("next--arrow").style.opacity = "0.5";
  // document.getElementById("prev--arrow").style.cursor = "pointer";
  // document.getElementById("prev--arrow").style.opacity = "1";
}

function PreWindow() {
  const first = useContext(MainWindow);
  alert(first);

  // let value = useContext(MainWindow);
  // value(() => {
  //   return {
  //     home: true,
  //     playwin: false,
  //   };
  // });
  // document.getElementById("next--arrow").style.cursor = "pointer";
  // document.getElementById("next--arrow").style.opacity = "1";
  // document.getElementById("prev--arrow").style.cursor = "not-allowed";
  // document.getElementById("prev--arrow").style.opacity = "0.5";
}

function NavBar() {
  return (
    <div className="NavBar">
      <div className="change--display">
        <div className="change--arrow" id="prev--arrow" onClick={PreWindow}>
          {"<"}
        </div>
        <div className="change--arrow" id="next--arrow" onClick={ForwardWindow}>
          {">"}
        </div>
      </div>
      <div className="nb--account">
        <div className="sign-in--btn">Sign up</div>
        <div className="login--btn">Log in</div>
      </div>
    </div>
  );
}

export default NavBar;
