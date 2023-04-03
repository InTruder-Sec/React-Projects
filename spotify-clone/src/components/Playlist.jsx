import React, { useEffect } from "react";
import "./Playlist.css";
import { Playlisturl } from "./Cards";
import GetToken from "../api/access";
import { GetPLaylist } from "../api/access";

function Playlist(props) {
  console.log(Playlisturl);
  GetToken().then((response) => {
    GetPLaylist(Playlisturl, response.access_token).then((playlist) => {});
  });
  return (
    <div className={`${props.win.playwin ? "playlist" : "playlist--hide"}`}>
      <div className="">hello</div>
    </div>
  );
}

export default Playlist;
