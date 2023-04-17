import "./App.css";
import Controllers from "./components/controllers";
import NavBar from "./components/Nav-Bar";
import Search from "./components/Search";
import NowPlaying from "./components/NowPlaying";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Main";
import { useContext, useState } from "react";

function App() {
  const [prevWindow, ChangePrevWindow] = useState("");
  const [nextWindow, ChangeNextWindow] = useState("");
  const previousWindow = useContext(prevWindow);
  const nxtWindow = useContext(nextWindow);

  return (
    <BrowserRouter>
      <div className="App">
        <Controllers />
        <NavBar />

        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home
                ChangeNextWindow={ChangeNextWindow}
                ChangePrevWindow={ChangePrevWindow}
              />
            }
          />
          <Route
            path="/search"
            element={
              <Search
                ChangeNextWindow={ChangeNextWindow}
                ChangePrevWindow={ChangePrevWindow}
              />
            }
          />
          <Route
            path="/library"
            element={
              <Home
                ChangeNextWindow={ChangeNextWindow}
                ChangePrevWindow={ChangePrevWindow}
              />
            }
          />
        </Routes>
        <NowPlaying />
      </div>
    </BrowserRouter>
  );
}

export default App;
