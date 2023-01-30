import './App.css';
import NavPannel from './NavPannel';
import DisplayImg from './Images/desktop.svg';

function App() {
  return (
    <div className="wrapper">
      <NavPannel />
      <FirstDisplay />
    </div>
  );
}

function FirstDisplay() {
  return (
    <div className='firstStepx032'>
      <img className='DesktopImg' alt='image' src={DisplayImg}></img>
      <div className='details_0x32'>Free Online Resume Builder</div>
      <div className='details_0x33'>A Quick and Easy Way to Create Your Professional Resume. Choose from over thirty modern and professional templates.  All of which can be customized to your liking. Fast and Easy to Use Our resume builder lets you easily and quickly create a resume using our resume wizard.</div>
      <button className='startBtn'>Create Resume Now</button>
    </div>
  )
}

export default App;
