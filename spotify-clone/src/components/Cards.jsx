import GetToken, { GetPLaylist } from "../api/access";
import "./Cards.css";
import Playlist from "./Playlist";
let Playlisturl;

function Cards(props) {
  let newDescription;
  let newTitle;
  try {
    if (props.title.length > 17) {
      newTitle = props.title.slice(0, 17) + "...";
      newDescription = props.description.slice(0, 45) + "...";
      document.querySelectorAll(".loadingCards").forEach((e) => {
        e.style.display = "none";
      });
    } else {
      newTitle = props.title;
      newDescription = props.description.slice(0, 45) + "...";
    }
  } catch {}

  function NewWindow(playlistId) {
    GetToken().then((token) => {
      GetPLaylist(playlistId, token.access_token).then((data) => {
        props.changeData(data);
      });
    });
    props.ChangeWindow(() => {
      return {
        home: false,
        playwin: true,
      };
    });
  }

  return (
    <div
      className={`${props.isLoading ? "loadingCards" : "cards"}`}
      onClick={() => {
        NewWindow(props.playlistId);
        window.scrollTo(0, 0);
      }}
    >
      <div className="cards--play--btn"></div>
      <div className="cards--img">
        <img
          className={`${props.isLoading ? "" : "cards--img--main"}`}
          alt=""
          src={props.img}
        ></img>
      </div>
      <div className="cards--details">
        <div className="cards--title">{newTitle}</div>
        <div className="cards--dis">{newDescription}</div>
      </div>
    </div>
  );
}

export default Cards;
export { Playlisturl };
