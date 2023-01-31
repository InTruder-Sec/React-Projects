import './App.css';
import NavPannel from './NavPannel';
import FooterDiv from './footer';
import DisplayImg from './Images/desktop.svg'

function App() {
  return (
    <div className="wrapper">
      <NavPannel />
      <img className='DesktopImg' id='desktopImg' alt='image' src={DisplayImg}></img>
      <FirstDisplay />
      <FooterDiv />
    </div>
  );
}

function FirstDisplay() {
  return (
    <div className='firstStepx032' id='firstStep_0x32'>
      <div className='details_0x32' id='details_0x32'>Free Online Resume Builder</div>
      <div className='details_0x33' id='details_0x33'>A Quick and Easy Way to Create Your Professional Resume. Choose from over thirty modern and professional templates.  All of which can be customized to your liking. Fast and Easy to Use Our resume builder lets you easily and quickly create a resume using our resume wizard.</div>
      <button className='startBtn' onClick={Step1}>Create Resume Now</button>
    </div>
  )
}



function Step1() {
  const rImg = document.getElementById("desktopImg");
  document.getElementById('firstStep_0x32').style.opacity=0;
  rImg.style.right = "40%"
  

}


export default App;
