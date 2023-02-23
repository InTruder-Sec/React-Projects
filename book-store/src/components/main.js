import React from "react";
import Card from "./Cards";
import data from "./data.js";


export default function Main () {
    const newcard = data.map(item => {
        return (
            <Card 
                title={item.title}
                imgUrl={item.imgUrl}
                author={item.author}
                downloadUrl={item.downloadUrl}
            />
        )
    })

    return (
        
        <div className="main">
            {newcard}
        </div>
    )
}
