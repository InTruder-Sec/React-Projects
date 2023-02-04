import './App.css';
import NavPannel from './NavPannel';
import FooterDiv from './footer';
import DisplayImg from './Images/desktop.svg'
import Template1 from './templates/template1';
import Template2 from './templates/template2';


// Resume parameters
let crrColor = '#15abab';
let theme = "";
let cName = "";
let cProf = "";
let cAdd = "";
let CDetails = "";


function App() {
  return (
    <div className="wrapper">
      <NavPannel />
      <img className='DesktopImg' id='desktopImg' alt='image' src={DisplayImg}></img>
      <ProgressDiv />
      <Step1Div />
      <Step2Div />
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

function ProgressDiv() {
  return (
    <div className='ProgressBar'>
        <div className='currentProgress' id='currentProgress'></div>
    </div> 
  )
}



function Step1() {
  const rImg = document.getElementById("desktopImg");
  document.getElementById('firstStep_0x32').style.opacity=0;
  document.getElementById('s1Div').style.opacity = 1;
  rImg.style.right = "43%";
  document.getElementById('currentProgress').style.width = "10%";
  rImg.style.opacity = '0.8';
  document.querySelector('#stp2Btn').addEventListener("click", checkStep3);
  document.querySelector('.ProgressBar').style.opacity = 1;
  document.querySelectorAll('#newColor').forEach((e) => {
    e.addEventListener('click', () => {
      let q = e.value;
      changeColor(q);
    });
  })

  document.querySelectorAll('#template').forEach((e) => {
    e.addEventListener('click', () => {
      let q = e.className;
      changeTheme(q);
    });
  })
  document.querySelector('#nextStp').addEventListener("click", Step2DivCheck);
}


function Step1Div() {
  return (
    <div className='s1Div' id='s1Div'>
      
      <div className='currHead'>Select Template</div>
      <div className='selectTheme'>Theme:</div>
      <div className='colors'>
        <button className='color color1' id='newColor' value='#5b509b'></button>
        <button className='color color2' id='newColor' value='#17a9e4'></button>
        <button className='color color3' id='newColor' value='#232323'></button>
        <button className='color color4' id='newColor' value='rgb(255, 156, 170)'></button>
        <button className='color color5' id='newColor' value='#acd68b'></button>
        <button className='color color6' id='newColor' value='#15abab'></button>
      </div>
      <div className='templateList'>
      <table>
        <tr>
          <td><Template1 /></td>
          <td><Template2 /></td>
        </tr>
      </table>
      <button className='nxtBtn' id='nextStp'>Next</button>
      <div className='checkParam' id='warn'></div>
        
      </div>
    </div>
  )
}

function changeColor(atr) {

  document.getElementById('tempName').style.color = atr;
  document.getElementById('tempDiv').style.backgroundColor = atr;
  document.getElementById('tempHR').style.border = 'solid 1px ' + atr;
  document.getElementById('tempName_0x33').style.color = 'white';
  document.getElementById('tempDiv_0x33').style.backgroundColor = atr;
  document.getElementById('tempHR_0x33').style.border = 'solid 1px ' + atr;
  crrColor = atr;
}

function changeTheme(atr) {
  if (atr==='template1') {
    document.querySelector('.template1').style.border = 'solid 2px blue'
    document.querySelector('.template2').style.border = 'solid 1px black';
    theme = 1;
  } else {
    document.querySelector('.template1').style.border = 'solid 1px black';
    document.querySelector('.template2').style.border = 'solid 2px blue';
  }
  theme = 1;
}


function Step2DivCheck() {
  // check
  if (theme==="") {
    document.querySelector('#warn').innerHTML = "⚠ Please Select a Theme"
  } else {
    document.getElementById('s1Div').style.opacity = 0;
    document.getElementById('s1Div').style.zIndex = 0;
    document.getElementById('currentProgress').style.width = "30%"; 
    document.querySelector('.stp2Div').style.opacity = 1;
    document.querySelector('.stp2Div').style.zIndex = 2;
  }
}

function Step2Div() {
  return (
    <div className='stp2Div'>
      <div className='currHead'>About You</div>
      <div className='AboutDiv'>
        <label className='fnLable'>Name:</label><br/>
        <input type='text' className='fnInput' required id='cName' placeholder='Your Name'></input>
        <br/><br/>
        <label className='fnLable'>Profession:</label><br/>
        <input type='text' className='fnInput' required id='cProof' placeholder='Your Profession'></input>
        <br></br><br></br>
        <label className='fnLable'>Address:</label><br/>
        <input className='fnInput' required id='cAdd' placeholder='Address'></input>
        <br/><br/>
        <label className='fnLable'>About You</label><br/>
        <textarea className='ayTXT' required id='cAbout' placeholder='About You'></textarea><br/>
        <button className='nxtBtn newBtn' id='stp2Btn'>Next</button>
        <div className='checkParam warnDiv' id='warnNew'></div>
      </div>
    </div>
  )
}


function checkStep3() {
  cName = document.querySelector('#cName').value;
  cProf = document.querySelector('#cProf').value;
  cAdd = document.querySelector('#cAdd').value;
  CDetails = document.querySelector("#cAbout").value;
  if (cName !== "" && cProf !== "" && cAdd!=="" && CDetails!=="") {
    alert(cName);
  } else {
    document.querySelector(".warnDiv").innerHTML = "warnNew"
  }
  
}









export default App;

