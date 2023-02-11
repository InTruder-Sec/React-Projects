import React from "react";


function StepsDiv(props) {
    return (
        <div className="stepsDiv">
            <div className="progressDiv"><div className="currentPro"></div></div>
            <div className="divheader">{props.head}</div>
        </div>
    )
}

export default StepsDiv;