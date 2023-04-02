import React from "react";

function Playlist(props) {
  return (
    <div className={`${props.win.playwin ? "playlist" : "playlist--hide"}`}>
      Playlist
    </div>
  );
}

export default Playlist;
