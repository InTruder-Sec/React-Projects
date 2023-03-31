import "./App.css";
import Controllers from "./components/controllers";
import NavBar from "./components/Nav-Bar";
import Search from "./components/Search";
import NowPlaying from "./components/NowPlaying";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Controllers />
        <NavBar />

        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/search" element={<Search />} />
          {/* <Route path="/library" element={<Library />} /> */}
        </Routes>
        <NowPlaying />
      </div>
    </BrowserRouter>
  );
}

export default App;
