import "./App.css";
import Controllers from "./components/controllers";
import NavBar from "./components/Nav-Bar";
import NowPlaying from "./components/NowPlaying";

function App() {
  return (
    <div className="App">
      <Controllers />
      <NavBar />
      <NowPlaying />
    </div>
  );
}

export default App;
