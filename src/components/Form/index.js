import React, { useState } from "react";
import './style.css';

import Generator from '../../imgs/generator.png'

import memesData from '../../data/memesData'


export default function Form(){

    const [memeImage, setMemeImage] = useState('');

    function getRandomImage(){
        const memeArray =  memesData.data.memes;
        const random = Math.floor(Math.random() * memeArray.length)
        return memeArray[random]
    }

    function getNewMemeImage(){
        const randomImage = getRandomImage();
        setMemeImage(randomImage);
    }

    return(
        <>
            <div className="form">
                <input  className="form-input" placeholder="First text" type="text"/>
                <input  className="form-input" placeholder="Second text" type="text"/>
                <button className="form-button" onClick={ getNewMemeImage }>
                    Get new image meme 
                    <img src={Generator} className="form-button--icon" alt="generator"/>
                </button>
            </div>

            <img className="meme-image" key={memeImage.id} src={memeImage.url} alt={memeImage.name}/>
        </>
    )
} 