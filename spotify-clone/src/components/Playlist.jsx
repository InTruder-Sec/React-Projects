import React from "react";
import "./Playlist.css";
import palyBtn from "./../images/mainPlay.png";
import likeBtn from "./../images/liked.png";
import more from "./../images/more.png";
import clock from "./../images/clock.png";
import logo from "./../images/logo.png";

function Playlist(props) {
  // console.log(props.avi);
  return (
    <div className={`${props.win.playwin ? "playlist" : "playlist--hide"}`}>
      <div className="playlist--hero">
        <div className="playlist--hero--img">
          <img
            src={
              "https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebce202eea14763b8b7696936e/1/en/default"
            }
            alt="Playlist"
          ></img>
        </div>
        <div className="playlist--hero--details">
          <div className="playlist--hero--title">Playlist</div>
          <div className="playlist--hero--name">Daily Mix 1</div>
          <div className="playlist--hero--auth">Alan Walker, Rival...</div>
          <div className="playlist--brand">
            <img className="playlist--brand--logo" alt="logo" src={logo}></img>
            <div className="playlist--brand--title">Playify</div>
            <div className="playlist--brand--title playlist--count">
              50 Songs
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
          ></img>
          <img
            className="playlist--liked"
            alt="playlist--like"
            src={likeBtn}
          ></img>
          <img className="playlist--more" alt="playlist--more" src={more} />
        </div>
        <div className="playlist--list--main">
          <table>
            <tr className="playlist--table--head">
              <td className="table--sr">#</td>
              <td className="table--title">Title</td>
              <td className="table--album">Album</td>
              <td className="table--duration">
                <img className="playlist--clock" alt="clock" src={clock}></img>
              </td>
            </tr>
            <br></br>
            <MakePLaylist
              id="1"
              key="1"
              title="Perfect"
              album="ED's World"
              img="https://m.media-amazon.com/images/M/MV5BMGU5YTRjMTUtZDU4Mi00NjFlLWExYTAtMjVkN2JmOTE1Y2Q2XkEyXkFqcGdeQXVyNjE0ODc0MDc@._V1_.jpg"
            />
            <MakePLaylist
              id="2"
              key="2"
              title="Faded"
              album="Alan's World"
              img="https://m.media-amazon.com/images/M/MV5BMGU5YTRjMTUtZDU4Mi00NjFlLWExYTAtMjVkN2JmOTE1Y2Q2XkEyXkFqcGdeQXVyNjE0ODc0MDc@._V1_.jpg"
            />
            <MakePLaylist
              id="3"
              key="3"
              title="Alone Pt. II"
              album="Alan's World"
              img="https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebce202eea14763b8b7696936e/1/en/default"
            />
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
        <img className="playlist--song--img" src={props.img} alt="song"></img>
        <div className="playlist--song">
          <div className="playlist--song--title">{props.title}</div>
          <div className="playlist--song--author">Alan Walker</div>
        </div>
      </td>
      <td>{props.album}</td>
      <td>3:26</td>
    </tr>
  );
}

export default Playlist;
