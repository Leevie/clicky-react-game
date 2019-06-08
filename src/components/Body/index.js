import React from "react";
import "./Body.css"
import Images from "../../images/Images"

function Body () {
    return(
        <div className="body-style">
            <h2>
                This is my BODY!
                <img
                src={ Images }
                alt=""
                />
            </h2>
        </div>
    )
};

export default Body;