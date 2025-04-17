import React from 'react'
import { useState } from 'react';


export default function TextForm({ title = "Enter the  text to anelize" }) {
    const clickup = ()  => {
        console.log("clickupbtn clicked")
        let ntext = text.toUpperCase()
        setText(ntext)
    }
    const clicklow = ()  => {
        console.log("clicklowbtn clicked")
        let ntext = text.toLowerCase()
        setText(ntext)
    }
    const copy = ()  => {
        console.log("clickupbtn clicked")
        let ntext = "";
        setText(ntext)
    }
    const change = (event)  => {
        console.log("changed")
        setText(event.target.value)
    }
    const [text, setText] = useState('enter text')
    return (
        <>
        <div className='container p-3 my-3 '>
            <div className="mb-3">
                <h2 className="title">{title}</h2>
                <textarea className="form-control" id="text" rows="8" value={text} onChange={change}></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={clickup} >Convert to Uppercase</button>
            <button className='btn btn-primary mx-2' onClick={clicklow} >Convert to lowercase</button>
            <button className='btn btn-info mx-2' onClick={copy} >clear text</button>
        </div>
        <div className="container my-3">
            <h1 className="">Your Text Summery</h1>
            {/* <p>{text === ""? 0 : text.split(' ').sort().join(" ").trim().split(" ").length} words  {text.length} character</p> */}
            <p>{text.split(" ").filter(x => x!=="" ).length} words  {text.length} character</p>
            <p>{0.008 * text.split(' ').length} minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>

        </div>
        </>
    )
}
