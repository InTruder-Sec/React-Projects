import React, { useContext } from "react";
import "./Playlist.css";
import palyBtn from "./../images/mainPlay.png";
import likeBtn from "./../images/liked.png";
import more from "./../images/more.png";
import clock from "./../images/clock.png";
import logo from "./../images/logo.png";
import { playlistData } from "./Main";

function Playlist(props) {
  let isDataLoaded;
  const data = useContext(playlistData);
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  if (data === "") {
    isDataLoaded = false;
    var color = "linear-gradient(#000000 , #292929)";
  } else {
    isDataLoaded = true;
    var color = "linear-gradient(#" + randomColor + ", #292929)";
  }
  let PlaylistLength;
  let playlistTable;
  let time;
  try {
    PlaylistLength = data.tracks.items.length + " Songs";
    let newId = 0;
    playlistTable = data.tracks.items.map((e) => {
      newId = newId + 1;
      time = millisToMinutesAndSeconds(e.track.duration_ms);

      return (
        <MakePLaylist
          id={newId}
          key={e.uri}
          title={e.track.name}
          album={e.track.album.artists[0].name}
          img={e.track.album.images[0].url}
          artist={e.track.album.type}
          time={time}
        />
      );
    });
  } catch {
    PlaylistLength = "";
    playlistTable = "";
  }

  return (
    <div className={`${props.win.playwin ? "playlist" : "playlist--hide"}`}>
      <div className="playlist--hero" style={{ backgroundImage: color }}>
        <div
          className={`${
            isDataLoaded ? "playlist--hero--img" : "loadingCardsPlaylist"
          }`}
        >
          <img
            src={`${isDataLoaded ? data.images[0].url : ""}`}
            loading="lazy"
            className={`${isDataLoaded ? "playlist--hero--img" : ""}`}
            alt=""
          ></img>
        </div>
        <div className="playlist--hero--details">
          <div
            className={`${
              isDataLoaded ? "playlist--hero--title" : "loadingBar"
            }`}
          >
            Playlist
          </div>
          <div
            className={`${
              isDataLoaded ? "playlist--hero--name" : "loadingBarDetailed"
            }`}
          >
            {data.name}
          </div>
          <div
            className={`${
              isDataLoaded ? "playlist--hero--auth" : "loadingBar"
            }`}
          >
            {data.description}
          </div>
          <div className={`${isDataLoaded ? "playlist--brand" : "loadingBar"}`}>
            <img
              className={`${
                isDataLoaded ? "playlist--brand--logo" : "disableImg"
              }`}
              loading="lazy"
              alt="logo"
              src={logo}
            ></img>
            <div className="playlist--brand--title">Playify</div>
            <div className="playlist--brand--title playlist--count">
              {PlaylistLength}
            </div>
          </div>
        </div>
      </div>
      <div className="playlist--list">
        <div className="playlist--controllers">
          <img
            className="play--btn--img"
            alt="playlist--playBtn"
            src={palyBtn}
            loading="lazy"
          ></img>
          <img
            className="playlist--liked"
            alt="playlist--like"
            src={likeBtn}
          ></img>
          <img
            className="playlist--more"
            alt="playlist--more"
            src={more}
            loading="lazy"
          />
        </div>
        <div className="playlist--list--main">
          <table>
            <tr className="playlist--table--head">
              <td className="table--sr">#</td>
              <td className="table--title">Title</td>
              <td className="table--album">Album</td>
              <td className="table--duration">
                <img
                  className="playlist--clock"
                  alt="clock"
                  src={clock}
                  loading="lazy"
                ></img>
              </td>
            </tr>
            <br></br>
            {playlistTable}
            <hr className="endline endlinePlaylist"></hr>
          </table>
        </div>
      </div>
    </div>
  );
}

function MakePLaylist(props) {
  return (
    <tr className="playlist--songs">
      <td className="playlist--sr">{props.id}</td>
      <td className="playlist--title--song">
        <img
          className="playlist--song--img"
          src={props.img}
          loading="lazy"
          alt="song"
        ></img>
        <div className="playlist--song">
          <div className="playlist--song--title">{props.title}</div>
          <div className="playlist--song--author">Playify</div>
        </div>
      </td>
      <td>{props.album}</td>
      <td>{props.time}</td>
    </tr>
  );
}

function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

export default Playlist;
export { millisToMinutesAndSeconds };
