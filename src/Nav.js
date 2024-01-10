import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import './nav.css'
import Button from "./Button";

const externalLinks = [
    {
        className: "fab fa-github",
        link: "https://github.com/imzuddin",
        title: "GitHub"
    },
    {
        className: "fab fa-linkedin",
        link:"https://www.linkedin.com/in/imran-u/",
        title: "LinkedIn"
    },
    {
        className: "far fa-file",
        link: "#",
        title: "Resume"
    },
    {
        className: "fas fa-computer",
        link: "#",
        title: "Contact Me"
    }
]

const internalLinks = [
    {
        name: "Home"
    },
    {
        name: "About"
    },
    {
        name: "Projects"
    }
]

const Nav = ({ 
    isActive,
    isPhone,
    screenMode,
    activeSection,
    onHomeClick,
    onAboutClick,
    onProjectsClick
}) => {

    return (
        isActive && (
            <div className="navParent">
                <h1 className={`navIcon ${screenMode}`}> IU </h1>
                <div className="navLinks ">
                    <ul className="externalLinks">
                        {
                            externalLinks.map(link => {
                                return (
                                <li> 
                                    <a href={link.link} title={link.title} target="_blank">
                                        <FontAwesomeIcon 
                                            icon={link.className} 
                                            className={`externalLinkIcon ${screenMode}`}
                                        /> 
                                    </a>
                                </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="internalLinks">
                    <Button text={'HOME'} onClick={onHomeClick} status={activeSection === 'home' ? 'active': ''} type={'navButton'}/>
                    <Button text={'ABOUT'} onClick={onAboutClick} status={activeSection === 'about' ? 'active': ''} type={'navButton'}/>
                    <Button text={'PROJECTS'} onClick={onProjectsClick} status={activeSection === 'projects' ? 'active': ''} type={'navButton'}/>
                </div>
            </div>
        )
    )
} 

export default Nav