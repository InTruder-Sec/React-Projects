import React from "react";
import "./controllers.css";
import logo from "./../images/logo.png";
import home from "./../images/home.png";
import library from "./../images/lib.png";
import search from "./../images/search.png";
import add from "./../images/add.png";
import like from "./../images/liked.png";

function Controllers() {
  const GetControllers = ControllerData.map((e) => {
    return <CreateController title={e.title} key={e.title} icon={e.icon} />;
  });
  return (
    <div className="controllers">
      <div className="controllers--img">
        <img className="controllers--img--main" alt="logo" src={logo}></img>
      </div>
      <div className="controllers--logo--txt">Playify</div>
      <div className="controllers--main">{GetControllers}</div>
    </div>
  );
}

function CreateController(props) {
  return (
    <div className="controllers--home">
      <div className="home--icon">
        <img width={"30px"} alt={props.title} src={props.icon} />
      </div>
      <div className="home--title">{props.title}</div>
    </div>
  );
}

const ControllerData = [
  {
    title: "HOME",
    icon: home,
  },
  {
    title: "SEARCH",
    icon: search,
  },
  {
    title: "LIBRARY",
    icon: library,
  },
  {
    title: "CREATE PLAYLIST",
    icon: add,
  },
  {
    title: "LIKED SONGS",
    icon: like,
  },
];

export default Controllers;
