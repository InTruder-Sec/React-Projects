import React from "react";
import './index.css';
import logo from './images/logo.png';
import Main from "./components/main";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <center>
        <Main />
      </center>
      <Footer />
    </div>
  );
}


function NavBar() {
  return (
    <div className="Nav">
      <center>
        <table>
          <tr>
            <td className="logo--td"><img alt="logo" className="logo" src={logo}></img></td>
            <td>The Bookmark</td>
          </tr>
        </table>
      </center>
    </div>
  )
}

function Hero() {
  return (
    <div className="hero">
      <div className="hero--background"></div>
      <div className="hero--details">LOTS OF EBOOKS. 100% FREE.</div>
    </div>
  )
}

function Footer() {
  return (
    <footer>
      <center>
        All Rights Reserved 2023.
      </center>
    </footer>
  )
}


export default App;
