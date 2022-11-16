import React from "react";
import './style.css';

import TrollFace from '../../imgs/troll-face.svg'

export default function Navbar(){
    return(
        <nav>
            <span className="nav-logo"><img src={TrollFace} /><h1>Meme Generator</h1></span><span>React Course - Project 3</span>
        </nav>
    );
}