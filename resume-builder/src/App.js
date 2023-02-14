import './App.css';
import NavPannel from './NavPannel';
import DisplayImg from './Images/desktop.svg'
import Template1 from './templates/template1';
import Template2 from './templates/template2';
import StepsDiv from './StepsDiv';


function App() {
  return (
    <div className="wrapper">
      <NavPannel />
      <img className='DesktopImg' alt='image' src={DisplayImg}></img>
      <StepsDiv />
      <FirstDisplay />
    </div>
  );
}


// Components

function FirstDisplay() {
  return (
    <div className='firstStepx032' id='firstStep_0x32'>
      <div className='details_0x32' id='details_0x32'>Free Online Resume Builder</div>
      <div className='details_0x33' id='details_0x33'>A Quick and Easy Way to Create Your Professional Resume. Choose over two modern and professional templates.  All of which can be customized to your liking. Fast and Easy to Use Our resume builder lets you easily and quickly create a resume using our resume wizard.</div>
      <button className='startBtn' onClick={startBuilding} >Create Resume Now</button>
    </div>
  )
}

// End of components

// Start of js functionalities

var details = [['head', 'Select Template'], ['Name', '']]

function startBuilding() {
  document.querySelector(".DesktopImg").style.right = "42%";
  document.querySelector(".firstStepx032").style.opacity = "0";
  document.querySelector(".stepsDiv").style.opacity = "1";
  document.querySelectorAll(".newColor");
}






export default App;

