import "./App.css";
import Controllers from "./components/controllers";
import NavBar from "./components/Nav-Bar";
import NowPlaying from "./components/NowPlaying";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Controllers />
      <NavBar />
      <Main />
      <NowPlaying />
    </div>
  );
}

export default App;
