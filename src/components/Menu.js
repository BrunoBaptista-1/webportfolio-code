import React from "react";
import { Link } from "react-router-dom";

function Menu() {

    function handleHover() {

        const menu = document.getElementsByClassName("homeMenu");

        Array.from(document.getElementsByClassName("homeMenu-item"))
            .forEach((item, index) => {
                item.onmouseover = () => {
                    menu[0].setAttribute("index", index);
                }
            })
    }

    function handleLeave() {
        Array.from(document.getElementsByClassName("homeMenu"))
            .forEach(item => {
                item.removeAttribute("index");
            })
    }

    return (
        <div className="menu">
            <ul className="homeMenu">
                <li className="homeMenu-item" onMouseEnter={handleHover} onMouseLeave={handleLeave}><Link className="homeMenu-link" to={"about/"}>About Me</Link></li>
                <li className="homeMenu-item" onMouseEnter={handleHover} onMouseLeave={handleLeave}><Link className="homeMenu-link" to={"skills/"}>Skills</Link></li>
                <li className="homeMenu-item" onMouseEnter={handleHover} onMouseLeave={handleLeave}><Link className="homeMenu-link" to={"assistant/"}>Virtual Assistant</Link></li>
            </ul>
            <div className="pattern"></div>
            <div className="pattern-image"></div>
        </div>
    );
}

export default Menu;