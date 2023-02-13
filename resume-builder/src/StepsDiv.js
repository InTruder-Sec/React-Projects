import React from "react";
import Template1 from "./templates/template1";
import Template2 from "./templates/template2";

var crntStp = 1;

function StepsDiv() {
    return (
        <div className="stepsDiv">
            <div className="progressDiv"><div className="currentPro"></div></div>
            <StepOneDiv />
            <ChangeStep />
        </div>
    )
}


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
        <script>addEvent()</script>
        </div>
    </div>
    )
}



function ChangeStep() {
    return (
        <div className="changeStep">
            <button className="preBtn">Previous</button>
            <button className="nxtBtn">Next</button>
        </div>
    )
}



export default StepsDiv;