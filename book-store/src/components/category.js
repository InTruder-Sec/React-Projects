import React from "react";
import genre1 from './../images/genre-1.webp';

export default function Category() {
    return (
        <div className="category">
            <center>
                <table className="category--table">
                    <tr>
                        <td className="category-td">
                            <img className="genre genre1" src={genre1} alt="genre1"></img>
                        </td>
                    </tr>
                </table>
            </center>
        </div>
    )
}