import React from "react";

export default function Card(props) {
    
    return (
        <div className="card">
            <div className="card--img">
                <img className="card--img--main" alt="Book" src={props.imgUrl}></img>
            </div>
            <div className="card--title">{props.title}</div>
            <div className="card--author">{props.author}</div>
            <a href={props.downloadUrl} target="_blank" rel="noreferrer"><button className="card--download">Download Now</button></a>
        </div>
    )
}