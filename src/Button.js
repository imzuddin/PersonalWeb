import React, { useRef } from "react";
import { ReactDOM } from "react";
import './nav.css'

const Button = ({text}) => {

    const handleClick = () => {
    }

    return (
        <div className="navButtonContainer">
            <button className="navButton dark" onClick={handleClick}>
                {text}
            </button>
        </div>

    )
}

export default Button;