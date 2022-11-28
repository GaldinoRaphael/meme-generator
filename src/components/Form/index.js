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

    function handleChange(event){
        const name = event.target.name;
        const value = event.target.value;

        setMeme(lastState => {
            return {
                ...lastState,
                [name]: value,
            }
        })
    }

    return(
        <>
            <div className="form">
                <input  className="form-input" placeholder="First text" type="text" onChange={handleChange} name="topText" value={meme.topText}/>
                <input  className="form-input" placeholder="Second text" type="text"onChange={handleChange}  name="bottomText" value={meme.bottomText}/>
                <button className="form-button" onClick={ getNewMemeImage }>
                    Get new image meme 
                    <img src={Generator} className="form-button--icon" alt="generator"/>
                </button>
            </div>

            <div className="meme">
                <h1 className="meme-text meme-text--top">{meme.topText}</h1>
                <h1 className="meme-text meme-text--bottom">{meme.bottomText}</h1>
                <img className="meme-image" key={meme.randomImage} src={meme.randomImage} alt='Meme'/>
            </div>
        </>
    )
} 