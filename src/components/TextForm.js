import React from 'react'
import { useState } from 'react';


export default function TextForm({ title = "Enter the  text to anelize" }) {
    const clickup = ()  => {
        console.log("clickupbtn clicked")
        let ntext = text.toUpperCase()
        setText(ntext)
    }
    const change = (event)  => {
        console.log("changed")
        setText(event.target.value)
    }
    const [text, setText] = useState('enter text')
    return (
        <div className='container p-3 my-3 '>
            <div className="mb-3">
                <h2 className="title">{title}</h2>
                <textarea className="form-control" id="text" rows="8" value={text} onChange={change}></textarea>
            </div>
            <button className='btn btn-primary' onClick={clickup} >Convert to Uppercawe</button>
        </div>
    )
}
