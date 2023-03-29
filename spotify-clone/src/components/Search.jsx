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
      <div className="cat--main">
        <div className="main--category--head cat-head">Browse</div>
        <CategoryCards />
        <CategoryCards />
        <CategoryCards />
        <CategoryCards />
        <CategoryCards />
        <CategoryCards />
        <CategoryCards />
        <CategoryCards />
        <CategoryCards />
        <CategoryCards />
      </div>
    </div>
  );
}

function CategoryCards() {
  return (
    <div className="category--cards" style={{ backgroundColor: "#343432" }}>
      <div className="cat--card--head">Podcast</div>
      <div
        className="cat--card--img"
        style={{
          backgroundImage:
            "url(" +
            "https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5" +
            ")",
        }}
      ></div>
    </div>
  );
}

export default Search;
