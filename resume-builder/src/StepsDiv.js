import React from "react";
import Template1 from "./templates/template1";
import Template2 from "./templates/template2";
import DoneImg from "./done.png";

var crntStp = 1;

function StepsDiv() {
    return (
        <div className="stepsDiv">
            <div className="progressDiv"><div className="currentPro"></div></div>
            <StepOneDiv />
            <StepTwoDiv />
            <StepThreeDiv />
            <StepFourDiv />
            <StepFiveDiv />
            <StepSixDiv />
            <StepSevenDiv />
            <StepEightDiv />
            <StepNineDiv />
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
            <div className="eduInpt">
                <table>
                    <tr>
                        <td colSpan={2}>
                            <label className="InputLable">Institution:</label><br/>
                            <input className="inputPar proInpt" placeholder="School / College name"></input>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <label className="InputLable">Title:</label><br/>
                            <input className="inputPar proInpt" placeholder="SSC"></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className="InputLable">Aggregate:</label><br/>
                            <input className="inputPar" placeholder="92%"></input>
                        </td>
                        <td>
                            <label className="InputLable">Year</label><br/>
                            <input className="inputPar" placeholder="2019-2022"></input>
                        </td>
                    </tr>
                    <div className="makeSpc"></div>
                    <tr>
                        <td colSpan={2}>
                            <label className="InputLable">Institution:</label><br/>
                            <input className="inputPar proInpt" placeholder="School / College name"></input>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <label className="InputLable">Title:</label><br/>
                            <input className="inputPar proInpt" placeholder="HSC"></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className="InputLable">Aggregate:</label><br/>
                            <input className="inputPar" placeholder="92%"></input>
                        </td>
                        <td>
                            <label className="InputLable">Year</label><br/>
                            <input className="inputPar" placeholder="2019-2022"></input>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

function StepFiveDiv() {
    return (
        <div className="StepFiveDiv">
            <div className='currHead'>Education</div>
            <div className="eduInpt">
                <table>
                    <tr>
                        <td colSpan={2}>
                            <label className="InputLable">Institution:</label><br/>
                            <input className="inputPar proInpt" placeholder="School / College name"></input>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <label className="InputLable">Title:</label><br/>
                            <input className="inputPar proInpt" placeholder="IT Engineer"></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className="InputLable">Aggregate:</label><br/>
                            <input className="inputPar" placeholder="92%"></input>
                        </td>
                        <td>
                            <label className="InputLable">Year</label><br/>
                            <input className="inputPar" placeholder="2019-2022"></input>
                        </td>
                    </tr>
                    <div className="makeSpc"></div>
                    <tr>
                        <td colSpan={2}>
                            <label className="InputLable">Institution:</label><br/>
                            <input className="inputPar proInpt" placeholder="School / College name"></input>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <label className="InputLable">Title:</label><br/>
                            <input className="inputPar proInpt" placeholder="Cyber Security Major"></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className="InputLable">Aggregate:</label><br/>
                            <input className="inputPar" placeholder="92%"></input>
                        </td>
                        <td>
                            <label className="InputLable">Year</label><br/>
                            <input className="inputPar" placeholder="2019-2022"></input>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

function StepSixDiv() {
    return (
        <div className="StepSixDiv">
            <div className='currHead'>Skills</div>
            <div className="skillInpt">
                <table>
                    <SkillsComp sId="1" skill="C++" />
                    <SkillsComp sId="2" skill="HTML"/>
                    <SkillsComp sId="3" skill="Javascript" />
                    <SkillsComp sId="4" skill="React" />
                    <SkillsComp sId="5" skill="Python" />
                </table>
            </div>
        </div>
    )
}

function StepSevenDiv() {
    return (
        <div className="StepSevenDiv">
            <div className='currHead'>Skills</div>
            <div className="skillInpt">
                <table>
                    <SkillsComp sId="6" skill="Django" />
                    <SkillsComp sId="7" skill="Numpy"/>
                    <SkillsComp sId="8" skill="Data Science" />
                    <SkillsComp sId="9" skill="Node JS" />
                    <SkillsComp sId="10" skill="Cloud Computing" />
                </table>
            </div>
        </div>
    )
}


function SkillsComp(props) {
    let k = "skill" + props.sId;
    return (
        <tr>
            <td>
                <label className="InputLable">Skill:</label><br/>
                <input className="inputPar" id={k} placeholder={props.skill}></input>
            </td>
            <td>
                <label className="InputLable">Proficiency:</label>
                <input className="slider" id={k} min="0" max="100"  type={"range"}></input>
            </td>
        </tr>
    )
}

function StepEightDiv() {
    return (
        <div className="StepEightDiv">
            <div className='currHead'>Projects</div>
            <div className="proInpt">
                <table>
                    <tr>
                        <td colSpan={2}>
                            <label className="InputLable">Project Title:</label>
                            <input className="inputPar proInpt" placeholder="Project Title"></input>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <label className="InputLable">Project URL:</label>
                            <input className="inputPar proInpt" placeholder="https://myproject.com"></input>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <label className="InputLable">Description:</label>
                            <textarea className="inputPar txtArea txtArea3" placeholder="Project Description"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <label className="InputLable">Project Title:</label>
                            <input className="inputPar proInpt" placeholder="Project Title"></input>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <label className="InputLable">Project URL:</label>
                            <input className="inputPar proInpt" placeholder="https://myproject.com"></input>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <label className="InputLable">Description:</label>
                            <textarea className="inputPar txtArea txtArea3" placeholder="Project Description"></textarea>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

function StepNineDiv() {
    return (
        <div className="StepNineDiv">
            <img className="doneImg" alt="All Set" src={DoneImg} />
            <div className="Donetxt">You are all Set!</div>
            <button className="prevBtn">Preview</button>
        </div>
    )
}



function ChangeStep() {
    return (
        <div className="changeStep">
            <button className="preBtn" disabled={true}>Previous</button>
            <button className="nxtBtn">Next Step</button>
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
    else if (crntStp === 3) {
        document.querySelector(".StepFourDiv").style.zIndex = "2";
        document.querySelector(".StepFourDiv").style.opacity = "1";
        document.querySelector(".StepThreeDiv").style.zIndex = "-1";
        document.querySelector(".StepThreeDiv").style.opacity = "0";
        document.querySelector(".currentPro").style.width = "55%";
        crntStp++;
        
    }
    else if (crntStp === 4) {
        document.querySelector(".StepFourDiv").style.zIndex = "-1";
        document.querySelector(".StepFourDiv").style.opacity = "0";
        document.querySelector(".StepFiveDiv").style.zIndex = "2";
        document.querySelector(".StepFiveDiv").style.opacity = "1";
        document.querySelector(".currentPro").style.width = "60%";

        crntStp++;
        
    } else if (crntStp === 5) {
        document.querySelector(".StepSixDiv").style.zIndex = "2";
        document.querySelector(".StepSixDiv").style.opacity = "1";
        document.querySelector(".StepFiveDiv").style.zIndex = "-1";
        document.querySelector(".StepFiveDiv").style.opacity = "0";
        document.querySelector(".currentPro").style.width = "75%";
        crntStp++;
    } else if (crntStp === 6) {
        document.querySelector(".StepSixDiv").style.zIndex = "-1";
        document.querySelector(".StepSixDiv").style.opacity = "0";
        document.querySelector(".StepSevenDiv").style.zIndex = "2";
        document.querySelector(".StepSevenDiv").style.opacity = "1";
        document.querySelector(".currentPro").style.width = "82%";
        crntStp++;  
    }
    else if (crntStp === 7) {
        document.querySelector(".StepEightDiv").style.zIndex = "2";
        document.querySelector(".StepEightDiv").style.opacity = "1";
        document.querySelector(".StepSevenDiv").style.zIndex = "-1";
        document.querySelector(".StepSevenDiv").style.opacity = "0";
        document.querySelector(".currentPro").style.width = "90%";
        crntStp++;  
        document.querySelector(".nxtBtn").innerHTML = "Build Now";
    } else if (crntStp === 8) {
        document.querySelector(".StepEightDiv").style.opacity = "0";
        document.querySelector(".StepEightDiv").style.zIndex = "-1";
        document.querySelector(".StepNineDiv").style.zIndex = "2";
        document.querySelector(".StepNineDiv").style.opacity = "1";
        document.querySelector(".currentPro").style.width = "100%";
        document.querySelector(".nxtBtn").style.opacity = "0";
        // document.querySelector(".prevBtn").addEventListener("click");
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
        
    } else if (crntStp === 4) {
        document.querySelector(".StepFourDiv").style.zIndex = "-1";
        document.querySelector(".StepFourDiv").style.opacity = "0";
        document.querySelector(".StepThreeDiv").style.zIndex = "2";
        document.querySelector(".StepThreeDiv").style.opacity = "1";
        document.querySelector(".currentPro").style.width = "42%";
        crntStp--;
        
    } else if (crntStp === 5) {
        document.querySelector(".StepFourDiv").style.zIndex = "2";
        document.querySelector(".StepFourDiv").style.opacity = "1";
        document.querySelector(".StepFiveDiv").style.zIndex = "-1";
        document.querySelector(".currentPro").style.width = "55%";
        document.querySelector(".StepFiveDiv").style.opacity = "0";
        crntStp--;
        
    } else if (crntStp === 6) {
        document.querySelector(".StepSixDiv").style.zIndex = "-1";
        document.querySelector(".StepSixDiv").style.opacity = "0";
        document.querySelector(".StepFiveDiv").style.zIndex = "2";
        document.querySelector(".StepFiveDiv").style.opacity = "1";
        document.querySelector(".currentPro").style.width = "60%";
        crntStp--;  
    } else if (crntStp === 7) {
        document.querySelector(".StepSixDiv").style.zIndex = "2";
        document.querySelector(".StepSixDiv").style.opacity = "1";
        document.querySelector(".StepSevenDiv").style.zIndex = "-1";
        document.querySelector(".currentPro").style.width = "75%";
        document.querySelector(".StepSevenDiv").style.opacity = "0";
        crntStp--;  
    } else if (crntStp === 8) {
        document.querySelector(".StepEightDiv").style.zIndex = "-1";
        document.querySelector(".StepEightDiv").style.opacity = "0";
        document.querySelector(".StepSevenDiv").style.zIndex = "2";
        document.querySelector(".currentPro").style.width = "82%";
        document.querySelector(".nxtBtn").innerHTML = "Next Step";
        document.querySelector(".StepSevenDiv").style.opacity = "1";
        crntStp--;  
    } else if (crntStp === 9) {
        document.querySelector(".StepEightDiv").style.opacity = "1";
        document.querySelector(".StepEightDiv").style.zIndex = "2";
        document.querySelector(".StepNineDiv").style.zIndex = "-1";
        document.querySelector(".StepNineDiv").style.opacity = "0";
        document.querySelector(".currentPro").style.width = "90%";
        document.querySelector(".nxtBtn").style.opacity = "1";
        crntStp--;
    }
}

// End of functionalities


export default StepsDiv;

export {liveTemp, proceedStp, prevStp};
