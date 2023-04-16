import "./App.css";
import Controllers from "./components/controllers";
import NavBar from "./components/Nav-Bar";
import Search from "./components/Search";
import NowPlaying from "./components/NowPlaying";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Main";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Controllers />
        <NavBar />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/library" element={<Home />} />
        </Routes>
        <NowPlaying />
      </div>
    </BrowserRouter>
  );
}

export default App;
