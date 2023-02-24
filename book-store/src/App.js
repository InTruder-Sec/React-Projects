import React from "react";
import './index.css';
import logo from './images/logo.png';
import Main from "./components/main";
import BackgroundImg from './images/background.png';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
    </div>
  );
}


function NavBar() {
  return (
    <div className="Nav">
        <table>
          <tr>
            <td className="logo--td"><img alt="logo" className="logo" src={logo}></img></td>
            <td>The Bookmark</td>
          </tr>
        </table>
    </div>
  )
}

function Hero() {
  return (
    <div className="hero">
      <img className="backgroundImg" src={BackgroundImg} alt="background"></img>
      <div className="hero--details">
        THE<br/> <div className="hero--details2">BOOKMARK.</div>
        <div className="hero--details3">
          FIND! READ! DOWNLOAD! ANY BOOKS ANYTIME ANYWHERE...<br/>
          <input className="searchInpt" placeholder="Seacrh your book..."></input>
        </div> 
        
      </div>
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
