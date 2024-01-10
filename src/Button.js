import React, { useRef } from "react";
import { ReactDOM } from "react";
import './nav.css'

const Button = ({
    text,
    onClick,
    status,
    type,
}) => {

    return (
        <div className="navButtonContainer">
            <button className={`${type} ${status}`} onClick={onClick}>
                {text}
            </button>
        </div>

    )
}

export default Button;