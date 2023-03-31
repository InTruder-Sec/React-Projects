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
    return (
      <CreateController
        title={e.title}
        key={e.title}
        icon={e.icon}
        link={e.link}
        id={e.id}
      />
    );
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
    <a href={`/${props.link}`}>
      <div className="controllers--home">
        <div className="home--icon">
          <img width={"30px"} alt={props.title} src={props.icon} />
        </div>
        <div className="home--title">{props.title}</div>
      </div>
    </a>
  );
}

const ControllerData = [
  {
    title: "HOME",
    icon: home,
    link: "",
    id: 0,
  },
  {
    title: "SEARCH",
    icon: search,
    link: "search",
    id: 1,
  },
  {
    title: "LIBRARY",
    icon: library,
    link: "library",
    id: 3,
  },
  {
    title: "CREATE PLAYLIST",
    icon: add,
    link: "",
  },
  {
    title: "LIKED SONGS",
    icon: like,
    link: "",
    id: 4,
  },
];

export default Controllers;
