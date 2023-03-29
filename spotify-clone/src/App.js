import "./App.css";
import Controllers from "./components/controllers";
import NavBar from "./components/Nav-Bar";
import NowPlaying from "./components/NowPlaying";
import Main from "./components/Main";
import Search from "./components/Search";
import { useState } from "react";
import GetToken from "./api/access";
import { GetCategories } from "./api/access";
let ChangeWindow;

function App() {
  const [Current, ChangeCurrent] = useState(Main);

  ChangeWindow = (e) => {
    if (e === "HOME") {
      ChangeCurrent(Main);
    } else if (e === "SEARCH") {
      ChangeCurrent(Search);
    }
  };

  GetToken().then((TOKEN) => {
    GetCategories(TOKEN.access_token).then((CATEGORY) => {
      console.log(CATEGORY);
    });
  });

  return (
    <div className="App">
      <Controllers />
      <NavBar />
      {Current}
      <NowPlaying />
    </div>
  );
}

export default App;
export { ChangeWindow };
