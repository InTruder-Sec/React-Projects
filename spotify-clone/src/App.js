import "./App.css";
import Controllers from "./components/controllers";
import NavBar from "./components/Nav-Bar";
import NowPlaying from "./components/NowPlaying";
import Main from "./components/Main";
import Search from "./components/Search";
import { useState } from "react";
let ChangeWindow;

function App() {
  const [window, SetWindow] = useState({
    home: true,
    search: false,
    library: false,
  });

  ChangeWindow = (e) => {
    if (e === "HOME") {
      SetWindow((prev) => {
        return {
          ...prev,
          home: true,
        };
      });
    } else if (e === "SEARCH") {
      console.log("search");
      SetWindow((prev) => {
        return {
          ...prev,
          search: true,
        };
      });
    }
    // console.log(e);
  };

  return (
    <div className="App">
      <Controllers />
      <NavBar />
      {/* {window} */}
      <NowPlaying />
    </div>
  );
}

export default App;
export { ChangeWindow };
