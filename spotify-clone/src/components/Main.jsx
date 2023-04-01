import React, { useEffect, useState } from "react";
import "./Main.css";
import Cards from "./Cards";
import GetToken, { GetCategories, GetCategorySongs } from "../api/access";
let ChangeWindow;

function Main() {
  let limit = Math.floor((window.screen.width - 250) / 200) + 1;
  const [title, setTitle] = useState({
    trending: { t: "", trendingCards: {} },
    playlist: { t: "", playlistCards: {} },
    latest: { t: "", latestCards: {} },
  });

  useEffect(() => {
    GetToken().then((Response) => {
      GetCategories(Response.access_token).then((category) => {
        setTitle((prevtitle) => {
          return {
            ...prevtitle,
            trending: {
              t: category.categories.items[0].name,
              trendingCards: {},
            },
            playlist: {
              t: category.categories.items[1].name,
              playlistCards: {},
            },
            latest: {
              t: category.categories.items[2].name,
              playlistCards: {},
            },
          };
        });
        GetCategorySongs(
          Response.access_token,
          category.categories.items[0].id,
          limit
        ).then((Response) => {
          setTitle((prevtitle) => {
            return {
              ...prevtitle,
              trending: {
                t: category.categories.items[0].name,
                trendingCards: Response,
              },
            };
          });
        });
        GetCategorySongs(
          Response.access_token,
          category.categories.items[1].id,
          limit
        ).then((Response) => {
          setTitle((prevtitle) => {
            return {
              ...prevtitle,
              playlist: {
                t: category.categories.items[1].name,
                playlistCards: Response,
              },
            };
          });
        });
        GetCategorySongs(
          Response.access_token,
          category.categories.items[2].id,
          limit
        ).then((Response) => {
          setTitle((prevtitle) => {
            return {
              ...prevtitle,
              latest: {
                t: category.categories.items[2].name,
                latestCards: Response,
              },
            };
          });
        });
      });
    });
  }, []);
  return (
    <div className="main">
      <Category
        title={title.trending.t}
        cardDetails={title.trending.trendingCards}
      />
      <Category
        title={title.playlist.t}
        cardDetails={title.playlist.playlistCards}
      />
      <Category title={title.latest.t} cardDetails={title.latest.latestCards} />
      <hr className="endline" />
    </div>
  );
}

function Category(props) {
  let res;
  const t = props.cardDetails;
  try {
    console.log(t.playlists.items);
    res = t.playlists.items.map((item) => {
      return (
        <Cards
          img={item.images[0].url}
          title={item.name}
          description={item.description}
        />
      );
    });
  } catch (err) {}
  return (
    <div className="main--category">
      <div className="main--category--more">Show all</div>
      <div className="main--category--head">{props.title}</div>
      <div className="main--category--cards">{res}</div>
    </div>
  );
}

export default Main;
export { ChangeWindow };
