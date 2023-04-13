import React from "react";

function Check(id) {
  console.log(id);
}

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
    <div className="main--category">
      <div
        className={NewMoreClass}
        onClick={() => {
          Check(props.id);
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

function Cards() {
  return <div></div>;
}

export default <Category />;
