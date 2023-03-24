import React from "react";
import "./Cards.css";
import image1 from "./../images/song/0000001.jpeg";

function Cards() {
  return (
    <div className="cards">
      <div className="cards--play--btn"></div>
      <div className="cards--img">
        <img className="cards--img--main" alt="image1" src={image1}></img>
      </div>
      <div className="cards--details">
        <div className="cards--title">Perfect</div>
        <div className="cards--dis">
          Keep calm and focus with ambient and post-rock...
        </div>
      </div>
    </div>
  );
}

export default Cards;
