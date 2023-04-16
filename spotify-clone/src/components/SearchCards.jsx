import React from "react";

function CardCategory(props) {
  let result;
  let isArtitst = false;
  if (props.title === "Artists") {
    isArtitst = true;
  }
  let t;
  try {
    t = props.cardDetails;
  } catch {
    t = "";
  }
  try {
    console.log(t.items.length);
    if (t.items.length === 0 || t.items[0] === null) {
      return "";
    }
  } catch {}

  let ArtistName;
  try {
    result = t.items.map((item) => {
      try {
        ArtistName = item.artists[0].name;
      } catch {
        ArtistName = item.description;
      }
      return (
        <Cards
          title={item.name}
          img={item.images[0].url}
          artists={ArtistName}
          isArtitst={isArtitst}
        />
      );
    });
  } catch (err) {}
  return (
    <div className="main--category">
      <div className="main--category--more" id={`show${props.id}`}></div>
      <div className="main--category--head">{props.title}</div>
      <div className="main--category--cards" id={`categories${props.id}`}>
        {result}
        <Cards isLoading={true} />
        <Cards isLoading={true} />
      </div>
    </div>
  );
}

function Cards(props) {
  let newDescription;
  let newTitle;
  try {
    if (props.title.length > 17) {
      newTitle = props.title.slice(0, 17) + "...";
      newDescription = props.artists.slice(0, 25) + "...";
      document.querySelectorAll(".loadingCards").forEach((e) => {
        e.style.display = "none";
      });
    } else {
      newTitle = props.title;
      newDescription = props.artists.slice(0, 25) + "...";
    }
  } catch {}
  let imageClass;
  if (props.isArtitst) {
    imageClass = "cards--img--main--artists";
  } else {
    imageClass = "cards--img--main";
  }
  return (
    <div
      className={`${props.isLoading ? "loadingCards" : "cards"}`}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <div className="cards--play--btn"></div>
      <div className="cards--img">
        <img
          className={`${props.isLoading ? "" : imageClass}`}
          alt=""
          src={props.img}
        ></img>
      </div>
      <div className="cards--details">
        <div
          className={`${
            props.isArtitst ? "cards--details--artists" : "cards--title"
          }`}
        >
          {newTitle}
        </div>
        <div className="cards--dis">{newDescription}</div>
      </div>
    </div>
  );
}

export default CardCategory;
