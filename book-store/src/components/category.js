import React from "react";
import CategoryData from './../data/categorydata';

export default function Category() {
    
    const Categories = CategoryData.map(item => {
        return (
            <CategoryCards 
                id={item.id}
                title={item.title}
                img={item.img}
            />
        )
    })

    return (
        <div className="category">
            <center>
            <div className="category--head">BROWSE GENRE</div>
            <div className="category--all">
                {Categories}
            </div>
            </center>

        </div>
    )
}

function CategoryCards(props) {
    return (
        <div className="category--card">
                <div className="category--hover" onMouseEnter={e=> {CategoryChange(props.id)}} onMouseOut={e => {CategoryChangeOut(props.id)}}></div>
                <div className="category--bkgrnd" id={`category${props.id}`}></div>
                <div className="category--dis">{props.title}</div>

                <img className="category--img" src={props.img} alt="img" ></img>
        </div>
    )
}

function CategoryChange(id) {
    let now = "category" + id;
    let q = document.getElementById(now);
    q.style.height = "140px";
    q.style.marginTop = "0px";
}

function CategoryChangeOut(id) {
    let now = "category" + id;
    let q = document.getElementById(now);
    q.style.height = "30px";
    q.style.marginTop = "55px";
}