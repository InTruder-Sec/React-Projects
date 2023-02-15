import React from "react";
import Template1 from "./templates/template1";
import Template2 from "./templates/template2";

var crntStp = 1;

function StepsDiv() {
    return (
        <div className="stepsDiv">
            <div className="progressDiv"><div className="currentPro"></div></div>
            <StepOneDiv />
            <StepTwoDiv />
            <ChangeStep />
        </div>
    )
}

// Start of Components


function StepOneDiv() {
    return (
    <div className="StepOneDiv">
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
        </div>
    </div>
    )
}

function StepTwoDiv() {
    return (
        <div className="StepTwoDiv">
            <div className='currHead'>Persnol Details</div>
            <div className="allInpt">
                <label className="InputLable lastName">Last&nbsp;Name:</label>
                <input className="inputPar lastName lastInp" placeholder="Price"></input>
                <label className="InputLable">First Name:</label><br></br>
                <input className="inputPar" placeholder="Captain"></input>
                
            </div>
        </div>
    )
}



function ChangeStep() {
    return (
        <div className="changeStep">
            <button className="preBtn" disabled={true}>Previous</button>
            <button className="nxtBtn">Next</button>
        </div>
    )
}


// End of components

// Start of functionalities

function liveTemp(c) {
    document.getElementById('tempName').style.color = c;
    document.getElementById('tempDiv').style.backgroundColor = c;
    document.getElementById('tempHR').style.border = 'solid 1px ' + c;
    document.getElementById('tempName_0x33').style.color = 'white';
    document.getElementById('tempDiv_0x33').style.backgroundColor = c;
    document.getElementById('tempHR_0x33').style.border = 'solid 1px ' + c;
}

function proceedStp() {
    document.querySelector(".StepOneDiv").style.opacity = "0";
    document.querySelector(".preBtn").disabled = false;
    document.querySelector(".StepTwoDiv").style.opacity = "1";
}

// End of functionalities


export default StepsDiv;

export {liveTemp, proceedStp};