import React from "react";

function CardCategory(props) {
  let res;
  const t = props.cardDetails;
  try {
    res = t.items.map((item) => {
      return (
        <Cards
          img={item.images[0].url}
          title={item.name}
          description={item.description}
          win={props.win}
          playlistId={item.id}
          ChangeWindow={props.ChangeWindow}
          url={item.href}
          key={item.title}
          changeData={props.changeData}
        />
      );
    });
  } catch (err) {}
  let HideCategory = false;
  try {
    if (
      props.cardDetails.items.length === 0 ||
      props.cardDetails.items[0] === null
    ) {
      HideCategory = true;
    } else {
      HideCategory = false;
    }
  } catch {}
  let NewHeadClass;
  let NewMoreClass;
  if (props.title === "") {
    NewHeadClass = "loadingWindow";
    NewMoreClass = "loadingMore";
  } else {
    NewHeadClass = "main--category--head";
    NewMoreClass = "main--category--more";
  }
  return (
    <div className={`${HideCategory ? "imgLoading" : "main--category"}`}>
      <div
        className={NewMoreClass}
        onClick={() => {
          // Check(props.id);
        }}
        id={`show${props.id}`}
      ></div>
      <div className={NewHeadClass}>{props.title}</div>
      <div className="main--category--cards" id={`categories${props.id}`}>
        {res}
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
      newDescription = props.description.slice(0, 25) + "...";
      document.querySelectorAll(".loadingCards").forEach((e) => {
        e.style.display = "none";
      });
    } else {
      newTitle = props.title;
      newDescription = props.description.slice(0, 25) + "...";
    }
  } catch {}
  return (
    <div className={`${props.isLoading ? "loadingCards" : "cards"}`}>
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

export default CardCategory;
