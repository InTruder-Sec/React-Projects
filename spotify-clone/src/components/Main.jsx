import React, { createContext, useEffect, useState } from "react";
import "./Main.css";
import Cards from "./Cards";
import Playlist from "./Playlist";
import GetToken, { GetCategories, GetCategorySongs } from "../api/access";
let ShowAll;
let More;
let Less;
let Check;
let LimitCards;
let playlistData;
let MainWindow;

function Home(props) {
  const [win, SetWin] = useState({
    home: true,
    playwin: false,
  });
  MainWindow = createContext(SetWin);
  return (
    <Main
      win={win}
      ChangeNextWindow={props.ChangeNextWindow}
      ChangePrevWindow={props.ChangePrevWindow}
      ChangeWindow={SetWin}
    />
  );
}

function Main(props) {
  const [playData, ChangePLay] = useState("");
  playlistData = createContext(playData);

  LimitCards = Math.floor((window.screen.width - 250) / 200) + 1;
  const [title, setTitle] = useState({
    trending: { t: "", Cards: {} },
    playlist: { t: "", Cards: {} },
    latest: { t: "", Cards: {} },
  });

  useEffect(() => {
    GetToken().then((Response) => {
      GetCategories(Response.access_token).then((category) => {
        setTitle((prevtitle) => {
          return {
            ...prevtitle,
            trending: {
              t: category.categories.items[0].name,
              Cards: {},
            },
            playlist: {
              t: category.categories.items[1].name,
              Cards: {},
            },
            latest: {
              t: category.categories.items[2].name,
              Cards: {},
            },
          };
        });
        GetCategorySongs(
          Response.access_token,
          category.categories.items[0].id,
          LimitCards
        ).then((Response) => {
          setTitle((prevtitle) => {
            return {
              ...prevtitle,
              trending: {
                t: category.categories.items[0].name,
                Cards: Response,
              },
            };
          });
        });
        GetCategorySongs(
          Response.access_token,
          category.categories.items[1].id,
          LimitCards
        ).then((Response) => {
          setTitle((prevtitle) => {
            return {
              ...prevtitle,
              playlist: {
                t: category.categories.items[1].name,
                Cards: Response,
              },
            };
          });
        });
        GetCategorySongs(
          Response.access_token,
          category.categories.items[2].id,
          LimitCards
        ).then((Response) => {
          setTitle((prevtitle) => {
            return {
              ...prevtitle,
              latest: {
                t: category.categories.items[2].name,
                Cards: Response,
              },
            };
          });
        });

        ShowAll = (e, limit) => {
          if (e === 0) {
            GetCategorySongs(
              Response.access_token,
              category.categories.items[e].id,
              limit
            ).then((Response) => {
              setTitle((prevtitle) => {
                return {
                  ...prevtitle,
                  trending: {
                    t: category.categories.items[e].name,
                    Cards: Response,
                  },
                };
              });
            });
          } else if (e === 1) {
            GetCategorySongs(
              Response.access_token,
              category.categories.items[e].id,
              limit
            ).then((Response) => {
              setTitle((prevtitle) => {
                return {
                  ...prevtitle,
                  playlist: {
                    t: category.categories.items[e].name,
                    Cards: Response,
                  },
                };
              });
            });
          } else {
            GetCategorySongs(
              Response.access_token,
              category.categories.items[e].id,
              limit
            ).then((Response) => {
              setTitle((prevtitle) => {
                return {
                  ...prevtitle,
                  latest: {
                    t: category.categories.items[e].name,
                    Cards: Response,
                  },
                };
              });
            });
          }
        };

        More = (e) => {
          ShowAll(e, 20);
          document.getElementById("categories" + e).style.height = "unset";
          document.querySelectorAll(".loadingCards").forEach((e) => {
            e.style.display = "none";
          });
        };
        Less = (e) => {
          ShowAll(e, LimitCards);
          document.getElementById("categories" + e).style.height = "240px";
        };

        Check = (e) => {
          if (
            document.getElementById("categories" + e).style.height === "unset"
          ) {
            Less(e);
          } else {
            More(e);
          }
        };
      });
    });
  }, []);
  return (
    <>
      <Playlist SetWindow={props.ChangeWindow} win={props.win} />
      <div className={`${props.win.home ? "main" : "main--hide"}`}>
        <Category
          title={title.trending.t}
          cardDetails={title.trending.Cards.playlists}
          id={0}
          win={props.win}
          key="trending"
          ChangeWindow={props.ChangeWindow}
          changeData={ChangePLay}
          ChangeNextWindow={props.ChangeNextWindow}
          ChangePrevWindow={props.ChangePrevWindow}
        />
        <Category
          title={title.playlist.t}
          win={props.win}
          cardDetails={title.playlist.Cards.playlists}
          ChangeWindow={props.ChangeWindow}
          id={1}
          changeData={ChangePLay}
          ChangeNextWindow={props.ChangeNextWindow}
          ChangePrevWindow={props.ChangePrevWindow}
          key="playlist"
        />
        <Category
          title={title.latest.t}
          cardDetails={title.latest.Cards.playlists}
          key="latest"
          win={props.win}
          ChangeWindow={props.ChangeWindow}
          ChangeNextWindow={props.ChangeNextWindow}
          ChangePrevWindow={props.ChangePrevWindow}
          changeData={ChangePLay}
          id={2}
        />
        <hr className="endline" />
      </div>
    </>
  );
}

function Category(props) {
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
          ChangeNextWindow={props.ChangeNextWindow}
          ChangePrevWindow={props.ChangePrevWindow}
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

export default Home;
export { playlistData, MainWindow };
