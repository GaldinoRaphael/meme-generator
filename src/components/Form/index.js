import React, { useState } from "react";
import './style.css';

import Generator from '../../imgs/generator.png'

import memesData from '../../data/memesData'


export default function Form(){

    const [meme, setMeme] = useState({topText: '', bottomText: '', randomImage: "http://i.imgflip.com/1bij.jpg"});
    const [allMemesImages, setAllMemesImages] = useState(memesData);

    function getRandomImage(){
        const memeArray =  allMemesImages.data.memes;
        const random = Math.floor(Math.random() * memeArray.length)
        return memeArray[random].url
    }

    function getNewMemeImage(){
        const newImage = getRandomImage();
        setMeme(prevState => {
            return ({...prevState, randomImage: newImage })
        });
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

            <img className="meme-image" key={meme.randomImage} src={meme.randomImage} alt='Meme'/>
        </>
    )
} 