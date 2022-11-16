import React from "react";
import './style.css';

import Generator from '../../imgs/generator.png'

export default function Form(){
    return(
        <form className="form">
            <input  className="form-input" placeholder="First mensage"/>
            <input  className="form-input" placeholder="Second message"/>
            <button className="form-button">Get your new meme <img src={Generator} className="form-button--icon" alt="generator"/></button>
        </form>
    )
}