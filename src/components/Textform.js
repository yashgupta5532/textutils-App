import React, { useState } from 'react';

export default function Textform() {
    const [text, setText] = useState('Enter text here :');
    const changeUptext = () => {
        let newText = text.toUpperCase();
        setText(newText);

    }
    const changeLowtext =()=>{
        let newText =text.toLowerCase();
        setText(newText);
    }
    const clearText =()=>{
        setText('');
    }
    const copyText =()=>{
        let mytext =document.getElementById('myBox');
        mytext.select();
        // mytext.setSelectionRange(0,999);
        navigator.clipboard.writeText(mytext.value); //use of javascript navigator clipboard
    }
    const removeExtraSpaces=()=>{
        let newText=text.split(/[ ]+/); // use of javascript regix
        setText(newText.join(" "));
    }
    const changeText = (event) => {
        setText(event.target.value);
    }
    return (
        <div className='container'>
            <h2 className='text-center'>Analysing Text with Text-Utils :</h2>
            <div className="main">
                <textarea name="text" cols="150" id='myBox' rows="15" value={text} onChange={changeText}></textarea>
            </div>
            <div className='rows'>
                <div className="columns">
                    <button className="btn btn-primary mx-1" onClick={changeUptext}>UpperCase</button>
                    <button className="btn btn-primary mx-1" onClick={changeLowtext}>LowerCase</button>
                    <button className="btn btn-primary mx-1" onClick={clearText}>clear</button>
                    <button className="btn btn-primary mx-1" onClick={copyText}>copy</button>
                    <button className="btn btn-primary mx-1" onClick={removeExtraSpaces}>removeExtraSpaces</button>
                </div>
            </div>
            <div>
                <h4 className='text-center'>Preview - Your Text summary</h4> <i>{text}</i>
                <p>No. of words :{text.split(" ").length}</p>
                <p>No. of characters :{text.length}</p>
                <p>Time taken to Read :{(text.split(" ").length)/250} minutes</p>
            </div>
        </div>
    )
}
