import "./App.css";
import Controllers from "./components/controllers";
import NavBar from "./components/Nav-Bar";
import NowPlaying from "./components/NowPlaying";
import Main from "./components/Main";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Controllers />
      <NavBar />
      <Search />
      <NowPlaying />
    </div>
  );
}

export default App;
