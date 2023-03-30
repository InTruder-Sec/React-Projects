import React, { useEffect, useState } from "react";
import "./Main.css";
import Cards from "./Cards";
import GetToken, { GetCategories } from "../api/access";

function Main() {
  // const [token, setToken] = useState("");
  const [title, setTitle] = useState({
    trending: "",
    playlist: "",
    latest: "",
  });
  useEffect(() => {
    GetToken().then((Response) => {
      GetCategories(Response.access_token).then((Response) => {
        setTitle((prevtitle) => {
          return {
            ...prevtitle,
            trending: Response.categories.items[0].name,
            playlist: Response.categories.items[1].name,
            latest: Response.categories.items[2].name,
          };
        });
      });
    });
  }, []);

  return (
    <div className="main">
      <Category title={title.trending} />
      <Category title={title.playlist} />
      <Category title={title.latest} />
      <hr className="endline" />
    </div>
  );
}

function Category(props) {
  return (
    <div className="main--category">
      <div className="main--category--more">Show all</div>
      <div className="main--category--head">{props.title}</div>
      <div className="main--category--cards">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
}

export default Main;
