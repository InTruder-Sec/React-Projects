import React, { createContext, useContext, useState } from "react";
import "./search.css";
import searchImg from "../images/search.png";
import GetToken, { SearchQuery } from "../api/access";
import Cards from "./Cards";
import { millisToMinutesAndSeconds } from "./Playlist";
import CardCategory from "./SearchCards";
import CategoryData from "./searchCategoriesData";
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
  let imageClass;
  if (topImage === "") {
    imageClass = "imgLoading";
  } else {
    imageClass = "top-result";
  }

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
            <SongLists data={SD.tracks} key="1321" />
          </div>
        </div>
      </div>
      <CardCategory title={"Albums"} cardDetails={SD.albums} />
      <CardCategory title={"Artists"} cardDetails={SD.artists} />
      <CardCategory title={"Episodes"} cardDetails={SD.episodes} />
      <CardCategory title={"Playlists"} cardDetails={SD.playlists} />
      <CardCategory title={"Shows"} cardDetails={SD.shows} />
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
          key={e.name}
        />
      );
    });
  } catch {}

  return (
    <div className="song--list">
      <table>
        <tbody>{res}</tbody>
      </table>
    </div>
  );
}

function SingleTrack(props) {
  let SearchTrackTitle = "";
  try {
    if (props.title.length > 25) {
      SearchTrackTitle = props.title.slice(0, 40) + "...";
    } else {
      SearchTrackTitle = props.title;
    }
  } catch {}
  return (
    <tr className="track--tr">
      <td className="track--tr--img">
        <img className="track--img" src={props.img}></img>
      </td>
      <td className="track--tr--details">
        <div className="track--tr--name">{SearchTrackTitle}</div>
        <div className="track--tr--artist">{props.artist}</div>
      </td>
      <td className="time">{props.time}</td>
    </tr>
  );
}

function Search(props) {
  const CategoryDetails = CategoryData.map((e) => {
    return <CategoryCards name={e.name} img={e.url} color={e.color} />;
  });

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
          {CategoryDetails}
        </div>
      </div>
    </div>
  );
}

function CategoryCards(props) {
  return (
    <div className="category--cards" style={{ backgroundColor: props.color }}>
      <div className="cat--card--head">{props.name}</div>
      <div
        className="cat--card--img"
        style={{
          backgroundImage: "url(" + props.img + ")",
        }}
      ></div>
    </div>
  );
}

export default SearchWindow;
