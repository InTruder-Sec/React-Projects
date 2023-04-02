import React, { useEffect, useState } from "react";
import "./Main.css";
import Cards from "./Cards";
import GetToken, { GetCategories, GetCategorySongs } from "../api/access";
let ChangeWindow;
let ShowAll;
let More;
let Less;
let Check;
let LimitCards;

function Home() {
  const [win, SetWin] = useState({
    home: true,
    playwin: false,
  });
  return <Main win={win} SetWin={SetWin} />;
}

function Main(props) {
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
          document.getElementById("show" + e).innerText = "Hide";
        };
        Less = (e) => {
          ShowAll(e, LimitCards);
          document.getElementById("categories" + e).style.height = "240px";
          document.getElementById("show" + e).innerText = "Show All";
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
    <div className={`${props.win.home ? "main" : "main--hide"}`}>
      <Category
        title={title.trending.t}
        cardDetails={title.trending.Cards}
        id={0}
        window={props.SetWin}
      />
      <Category
        title={title.playlist.t}
        cardDetails={title.playlist.Cards}
        window={props.SetWin}
        id={1}
      />
      <Category
        title={title.latest.t}
        cardDetails={title.latest.Cards}
        win={props.SetWin}
        id={2}
      />
      <hr className="endline" />
    </div>
  );
}

function Category(props) {
  let res;
  const t = props.cardDetails;
  try {
    res = t.playlists.items.map((item) => {
      return (
        <Cards
          img={item.images[0].url}
          title={item.name}
          description={item.description}
          win={props.win}
          url={item.href}
        />
      );
    });
  } catch (err) {}
  return (
    <div className="main--category">
      <div
        className="main--category--more"
        onClick={() => {
          Check(props.id);
        }}
        id={`show${props.id}`}
      >
        Show all
      </div>
      <div className="main--category--head">{props.title}</div>
      <div className="main--category--cards" id={`categories${props.id}`}>
        {res}
      </div>
    </div>
  );
}

export default Home;
export { ChangeWindow };
