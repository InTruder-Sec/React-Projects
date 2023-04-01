import React from "react";
import "./Cards.css";
import playBtn from "./../images/play.png";

function Cards(props) {
  let newDescription;
  let newTitle;
  try {
    newTitle = props.title.slice(0, 17) + "...";
    newDescription = props.description.slice(0, 45) + "...";
  } catch {}
  return (
    <div className="cards">
      <div className="cards--play--btn">
        {/* <img className="cards--play--img" src={playBtn} alt="playbtn"></img> */}
      </div>
      <div className="cards--img">
        <img className="cards--img--main" alt="image1" src={props.img}></img>
      </div>
      <div className="cards--details">
        <div className="cards--title">{newTitle}</div>
        <div className="cards--dis">{newDescription}</div>
      </div>
    </div>
  );
}

export default Cards;
