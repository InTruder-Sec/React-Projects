import React from "react";
import "./Playlist.css";
import palyBtn from "./../images/mainPlay.png";

function Playlist(props) {
  return (
    <div className={`${props.win.playwin ? "playlist" : "playlist--hide"}`}>
      <div className="playlist--hero">
        <div className="playlist--hero--img">
          <img
            src={
              "https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebce202eea14763b8b7696936e/1/en/default"
            }
            alt="Playlist Image"
          ></img>
        </div>
        <div className="playlist--hero--details">
          <div className="playlist--hero--title">Playlist</div>
          <div className="playlist--hero--name">Daily Mix 1</div>
          <div className="playlist--hero--auth">Alan Walker, Rival...</div>
        </div>
      </div>
      <div className="playlist--list">
        <div className="play--btn>">
          <img
            className="play--btn--img"
            alt="playlist--playBtn"
            src={palyBtn}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Playlist;
