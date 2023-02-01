import './App.css';
import NavPannel from './NavPannel';
import FooterDiv from './footer';
import DisplayImg from './Images/desktop.svg'
import Template1 from './templates/template1';
import Template2 from './templates/template2';


function App() {
  return (
    <div className="wrapper">
      <NavPannel />
      <img className='DesktopImg' id='desktopImg' alt='image' src={DisplayImg}></img>
      <Step1Div />
      <FirstDisplay />
      <FooterDiv />
      
    </div>
  );
}

function FirstDisplay() {
  return (
    <div className='firstStepx032' id='firstStep_0x32'>
      <div className='details_0x32' id='details_0x32'>Free Online Resume Builder</div>
      <div className='details_0x33' id='details_0x33'>A Quick and Easy Way to Create Your Professional Resume. Choose over two modern and professional templates.  All of which can be customized to your liking. Fast and Easy to Use Our resume builder lets you easily and quickly create a resume using our resume wizard.</div>
      <button className='startBtn' onClick={Step1}>Create Resume Now</button>
    </div>
  )
}



function Step1() {
  const rImg = document.getElementById("desktopImg");
  document.getElementById('firstStep_0x32').style.opacity=0;
  document.getElementById('s1Div').style.opacity = 1;
  rImg.style.right = "43%";
  document.getElementById('currentProgress').style.width = "10%";
}


function Step1Div() {
  return (
    <div className='s1Div' id='s1Div'>
      <div className='ProgressBar'>
        <div className='currentProgress' id='currentProgress'></div>
      </div>  
      <div className='currHead'>Select Template</div>
      <div className='selectTheme'>Theme:</div>
      <div className='colors'>
        <div className='color color1' onClick={ChangeColor1}></div>
        <div className='color color2' onClick={ChangeColor2}></div>
        <div className='color color3' onClick={ChangeColor3}></div>
        <div className='color color4' onClick={ChangeColor4}></div>
        <div className='color color5' onClick={ChangeColor5}></div>
        <div className='color color6' onClick={ChangeColor6}></div>
      </div>
      <div className='templateList'>
      <table>
        <tr>
          <td><Template1 /></td>
          <td><Template2 /></td>
        </tr>
      </table>
      <button className='nxtBtn'>Next</button>
        
      </div>
    </div>
  )
}


function ChangeColor1() {
  document.getElementById('tempName').style.color = '#5b509b';
  document.getElementById('tempDiv').style.backgroundColor = '#5b509b';
  document.getElementById('tempHR').style.border = 'solid 1px #5b509b';
  document.getElementById('tempName_0x33').style.color = 'white';
  document.getElementById('tempDiv_0x33').style.backgroundColor = '#5b509b';
  document.getElementById('tempHR_0x33').style.border = 'solid 1px #5b509b';
}

function ChangeColor2() {
  document.getElementById('tempName').style.color = '#17a9e4';
  document.getElementById('tempDiv').style.backgroundColor = '#17a9e4';
  document.getElementById('tempHR').style.border = 'solid 1px #17a9e4';
  document.getElementById('tempName_0x33').style.color = 'white';
  document.getElementById('tempDiv_0x33').style.backgroundColor = '#17a9e4';
  document.getElementById('tempHR_0x33').style.border = 'solid 1px #17a9e4';
}

function ChangeColor3() {
  document.getElementById('tempName').style.color = '#232323';
  document.getElementById('tempDiv').style.backgroundColor = '#232323';
  document.getElementById('tempHR').style.border = 'solid 1px #232323';
  document.getElementById('tempName_0x33').style.color = 'white';
  document.getElementById('tempDiv_0x33').style.backgroundColor = '#232323';
  document.getElementById('tempHR_0x33').style.border = 'solid 1px #232323';
}

function ChangeColor4() {
  document.getElementById('tempName').style.color = 'hwb(351 61% 0%)';
  document.getElementById('tempDiv').style.backgroundColor = 'hwb(351 61% 0%)';
  document.getElementById('tempHR').style.border = 'solid 1px hwb(351 61% 0%)';
  document.getElementById('tempName_0x33').style.color = 'white';
  document.getElementById('tempDiv_0x33').style.backgroundColor = 'hwb(351 61% 0%)';
  document.getElementById('tempHR_0x33').style.border = 'solid 1px hwb(351 61% 0%)';
}

function ChangeColor5() {
  document.getElementById('tempName').style.color = '#acd68b';
  document.getElementById('tempDiv').style.backgroundColor = '#acd68b';
  document.getElementById('tempHR').style.border = 'solid 1px #acd68b';
  document.getElementById('tempName_0x33').style.color = 'white';
  document.getElementById('tempDiv_0x33').style.backgroundColor = '#acd68b';
  document.getElementById('tempHR_0x33').style.border = 'solid 1px #acd68b';
}

function ChangeColor6() {
  document.getElementById('tempName').style.color = '#15abab';
  document.getElementById('tempDiv').style.backgroundColor = '#15abab';
  document.getElementById('tempHR').style.border = 'solid 1px #15abab';
  document.getElementById('tempName_0x33').style.color = 'white';
  document.getElementById('tempDiv_0x33').style.backgroundColor = '#15abab';
  document.getElementById('tempHR_0x33').style.border = 'solid 1px #15abab';
}


export default App;


// <div className='currHead'>About You</div>
//       <div className='AboutDiv'>
//         <label className='fnLable'>Name:</label><br/>
//         <input type='text' className='fnInput'></input>
//       </div>