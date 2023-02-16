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
            <StepThreeDiv />
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
                <table>
                    <tr>
                        <td>
                            <label className="InputLable">First Name:</label><br/>
                            <input className="inputPar" placeholder="Captain"></input>
                        </td>
                        <td>
                            <label className="InputLable">Last Name:</label><br />
                            <input className="inputPar" placeholder="Price"></input>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <label className="InputLable">Profession</label><br />
                            <input className="inputPar proInpt" placeholder="Student"></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className="InputLable">Email:</label> <br />
                            <input className="inputPar" placeholder="example@gmail.com" type={"email"}></input>
                        </td>
                        <td>
                            <label className="InputLable">Phone:</label><br/>
                            <input className="inputPar" placeholder="+91 **********"></input>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <label className="InputLable">About:</label><br />
                            <textarea className="inputPar txtArea" placeholder="About You"></textarea>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

function StepThreeDiv() {
    return (
        <div className="StepThreeDiv">
                <div className='currHead'>Experience</div>
                <div className="expInput">
                    <table>
                        <tr>
                            <td colSpan={2}>
                                <label className="InputLable">Job Title:</label>
                                <input className="inputPar proInpt" placeholder="Job Title"></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="InputLable">Company:</label>
                                <input className="inputPar" placeholder="MCLaren Corp"></input>
                            </td>
                            <td>
                                <label className="InputLable">Date:</label>
                                <input className="inputPar" placeholder="2019-2022"></input>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <label className="InputLable">Description:</label>
                                <textarea className="inputPar txtArea txtArea2" placeholder="Job Description"></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <label className="InputLable">Job Title:</label>
                                <input className="inputPar proInpt" placeholder="Job Title"></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="InputLable">Company:</label>
                                <input className="inputPar" placeholder="MCLaren Corp"></input>
                            </td>
                            <td>
                                <label className="InputLable">Date:</label>
                                <input className="inputPar" placeholder="2019-2022"></input>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <label className="InputLable">Description:</label>
                                <textarea className="inputPar txtArea txtArea2" placeholder="Job Description"></textarea>
                            </td>
                        </tr>
                    </table>
                </div>
        </div>
    )
}

function StepFourDiv() {
    return (
        <div className="StepFourDiv">
            <div className='currHead'>Education</div>
            
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
    if (crntStp === 1) {
        document.querySelector(".StepOneDiv").style.opacity = "0";
        document.querySelector(".preBtn").disabled = false;
        document.querySelector(".StepTwoDiv").style.opacity = "1";
        document.querySelector(".stepsDiv").style.zIndex = "1";
        document.querySelector(".StepOneDiv").style.zIndex = "-1";
        document.querySelector(".StepTwoDiv").style.zIndex = "2";
        document.querySelector(".currentPro").style.width = "30%";
        crntStp++;
    }
    else if (crntStp === 2) {
        document.querySelector(".StepTwoDiv").style.zIndex = "-1";
        document.querySelector(".StepTwoDiv").style.opacity = "0";
        document.querySelector(".StepThreeDiv").style.zIndex = "2";
        document.querySelector(".StepThreeDiv").style.opacity = "1";
        document.querySelector(".currentPro").style.width = "42%";
        crntStp++;
    }
    
}

function prevStp() {
    if (crntStp === 2) {
        document.querySelector(".StepOneDiv").style.opacity = "1";
        document.querySelector(".preBtn").disabled = true;
        document.querySelector(".StepTwoDiv").style.opacity = "0";
        document.querySelector(".stepsDiv").style.zIndex = "2";
        document.querySelector(".StepTwoDiv").style.zIndex = "-1";
        document.querySelector(".StepOneDiv").style.zIndex = "2";
        document.querySelector(".currentPro").style.width = "10%";
        crntStp--;
    }
    else if (crntStp === 3) {
        document.querySelector(".StepTwoDiv").style.zIndex = "2";
        document.querySelector(".StepTwoDiv").style.opacity = "1";
        document.querySelector(".StepThreeDiv").style.zIndex = "-1";
        document.querySelector(".StepThreeDiv").style.opacity = "0";
        document.querySelector(".currentPro").style.width = "30%";
        crntStp--;
    }
}

// End of functionalities


export default StepsDiv;

export {liveTemp, proceedStp, prevStp};
