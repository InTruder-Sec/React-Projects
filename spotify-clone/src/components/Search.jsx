import React from "react";
import "./search.css";
import searchImg from "../images/search.png";

function Search() {
  return (
    <div className="search">
      <div className="search--inpt">
        <img className="search--img" alt="searchImg" src={searchImg}></img>
        <input
          className="search--inpt--main"
          placeholder="What do you want to listen to?"
        ></input>
      </div>
    </div>
  );
}

export default Search;
