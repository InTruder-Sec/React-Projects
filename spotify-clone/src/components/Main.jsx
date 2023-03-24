import React from "react";
import "./Main.css";
import Cards from "./Cards";

function Main() {
  return (
    <div className="main">
      <Category title="Trending" />
      <Category title="Playify Playlist" />
      <Category title="Latest" />
      <hr className="endline" />
    </div>
  );
}

function Category(props) {
  return (
    <div className="main--category">
      <div className="main--category--more">Show all</div>
      <div className="main--category--head">{props.title}</div>
      <div className="main--category--cards">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
}

export default Main;
