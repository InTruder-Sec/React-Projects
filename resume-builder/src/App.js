import NavPannel from './NavPannel';
import DisplayImg from './Images/desktop.svg'
import StepsDiv, { liveTemp, proceedStp, prevStp } from './StepsDiv';
import MainTemplate1 from './templates/MainTemplate1';
import MainTemplate2 from './templates/MainTemplate2';


// Variables

let color = "#15abab";
var template = "1";

// End of variables


function App() {
  return (
    <div className="wrapper">
      <MainTemplate1 theme={color} />
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


function startBuilding() {
  document.querySelector(".DesktopImg").style.right = "42%";
  document.querySelector(".firstStepx032").style.opacity = "0";
  document.querySelector(".stepsDiv").style.opacity = "1";
  document.querySelector(".stepsDiv").style.zIndex = "2";
  document.querySelector(".currentPro").style.width = "10%";
  let e = document.querySelectorAll('#newColor');
  e.forEach((t) => {
    t.addEventListener("click", () => {
      let m = t.value;
      color = m;
      liveTemp(m);
    })
  });

  document.querySelector(".nxtBtn").addEventListener("click", proceedStp);
  document.querySelector(".template1").addEventListener("click", TempOneSelect);
  document.querySelector(".template2").addEventListener("click", TempTwoSelect);
  document.querySelector(".preBtn").addEventListener("click", prevStp);
}


function TempOneSelect() {
  document.querySelector(".template1").style.border = "solid 2px blue";
  document.querySelector(".template2").style.border = "solid 1px black";
  template = 1;
}

function TempTwoSelect() {
  document.querySelector(".template2").style.border = "solid 2px blue";
  document.querySelector(".template1").style.border = "solid 1px black";
  template = 2;
}



// End of JS Functionalities



export default App;



