import React, { createContext, useContext, useState } from "react";
import "./search.css";
import searchImg from "../images/search.png";
import GetToken, { SearchQuery } from "../api/access";
import Cards from "./Cards";
import { millisToMinutesAndSeconds } from "./Playlist";
let SearchData;
let sq;

function SearchWindow() {
  const [SearchWindow, SetSearchWindow] = useState({
    main: true,
    searching: false,
  });
  const [SearchResult, SetSearchResult] = useState("");
  SearchData = createContext(SearchResult);

  return (
    <Search
      CurrentWindow={SearchWindow}
      ChangeWindow={SetSearchWindow}
      SearchResult={SearchResult}
      SetSearchResult={SetSearchResult}
    />
  );
}

function SearchFor(ChangeWindow, SetSearchResult) {
  sq = document.getElementById("search--inpt--main").value;
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

    SetSearchResult("");
  }
  const LimitCards = Math.floor((window.screen.width - 250) / 200) + 1;
  GetToken().then((Token) => {
    SearchQuery(sq, LimitCards, Token.access_token).then((Response) => {
      SetSearchResult(Response);
    });
  });
}

function SearchValue(props) {
  const SD = useContext(SearchData);
  let topImage;
  let toptitle;
  let topartists;
  let type;
  try {
    topImage = SD.albums.items[0].images[0].url;
    toptitle = SD.albums.items[0].name;
    topartists = SD.albums.items[0].artists[0].name;
    type = SD.albums.items[0].type;
    if (toptitle.length > 30) {
      toptitle = toptitle.slice(0, 30) + "...";
    }
  } catch {
    topImage = "";
    toptitle = "";
    topartists = "";
    type = "";
  }
  console.log(SD);
  let imageClass;
  if (topImage === "") {
    imageClass = "imgLoading";
  } else {
    imageClass = "top-result";
  }

  console.log(SD);

  return (
    <div
      className={`${
        props.CurrentWindow.searching ? "SearchWindow" : "hideSearch"
      }`}
    >
      <div className="featuring-search">
        <div className="feature--song">
          <div className="headline">Top Result</div>
          <div className="search--featured">
            <div className="top-result-img">
              <img className={imageClass} src={topImage} alt=""></img>
            </div>
            <div className="top--result--title">{toptitle}</div>
            <div className="artists--display">{topartists}</div>
            <div className="album--btn">{type}</div>
          </div>
        </div>
        <div className="search--song--list">
          <div className="headline">Songs</div>
          <div className="search--songs">
            <SongLists data={SD.tracks} />
          </div>
        </div>
      </div>
      <Category title={"Albums"} />
      <Category title={"Artists"} />
      <Category title={"Episodes"} />
      <Category title={"Playlists"} />
      <Category title={"Shows"} />
    </div>
  );
}

function SongLists(props) {
  let res = "";
  let time;
  try {
    res = props.data.items.map((e) => {
      time = millisToMinutesAndSeconds(e.duration_ms);
      return (
        <SingleTrack
          img={e.album.images[0].url}
          title={e.name}
          artist={e.album.artists[0].name}
          time={time}
        />
      );
    });
  } catch {
    console.log("Error Occured");
  }

  return (
    <div className="song--list">
      <table>{res}</table>
    </div>
  );
}

function SingleTrack(props) {
  return (
    <tr className="track--tr">
      <td className="track--tr--img">
        <img className="track--img" src={props.img}></img>
      </td>
      <td className="track--tr--details">
        <div className="track--tr--name">{props.title}</div>
        <div className="track--tr--artist">{props.artist}</div>
      </td>
      <td className="time">{props.time}</td>
    </tr>
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
            SearchFor(props.ChangeWindow, props.SetSearchResult);
          }}
        ></input>
      </div>
      <SearchValue
        CurrentWindow={props.CurrentWindow}
        ChangeWindow={props.ChangeWindow}
        SearchResult={props.SearchResult}
        SetSearchResult={props.SetSearchResult}
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

function Category(props) {
  const SD = useContext(SearchData);
  let NewMoreClass;
  if (SD === "") {
    NewMoreClass = "loadingMore";
  } else {
    NewMoreClass = "main--category--more";
  }
  return (
    <div className="main--category">
      <div className={NewMoreClass}></div>
      <div className="main--category--head">{props.title}</div>
      <div className="main--category--cards" id={`categories${props.id}`}>
        {/* {res} */}
        <Cards isLoading={true} />
        <Cards isLoading={true} />
        <Cards isLoading={true} />
      </div>
    </div>
  );
}

export default SearchWindow;
