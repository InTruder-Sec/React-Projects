import React, { createContext, useState } from "react";
import "./search.css";
import searchImg from "../images/search.png";
import GetToken, { SearchQuery } from "../api/access";
let SearchData;

function SearchWindow() {
  const [SearchWindow, SetSearchWindow] = useState({
    main: true,
    searching: false,
  });
  const [SearchResult, SetSearchResult] = useState("");
  SearchData = createContext(SearchResult);

  return <Search CurrentWindow={SearchWindow} ChangeWindow={SetSearchWindow} />;
}

function SearchFor(ChangeWindow) {
  const sq = document.getElementById("search--inpt--main").value;
  if (document.getElementById("search--inpt--main").value !== "") {
    ChangeWindow({
      main: false,
      searching: true,
    });
  } else {
    ChangeWindow({
      main: true,
      searching: false,
    });
  }
  GetToken().then((Token) => {
    SearchQuery(sq, Token.access_token).then((Response) => {
      console.log(Response);
    });
  });
}

function SearchValue(props) {
  return (
    <div
      className={`${
        props.CurrentWindow.searching ? "SeachWindow" : "hideSearch"
      }`}
    >
      Loading
    </div>
  );
}

function Search(props) {
  return (
    <div className="main--search">
      <div className="search--inpt">
        <img className="search--img" alt="searchImg" src={searchImg}></img>
        <input
          className="search--inpt--main"
          placeholder="What do you want to listen to?"
          id="search--inpt--main"
          onChange={(e) => {
            SearchFor(props.ChangeWindow);
          }}
        ></input>
      </div>
      <SearchValue
        CurrentWindow={props.CurrentWindow}
        ChangeWindow={props.ChangeWindow}
      />
      <div className={`${props.CurrentWindow.main ? "search" : "hideSearch"}`}>
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

export default SearchWindow;
