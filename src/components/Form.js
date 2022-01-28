import React, {useState} from 'react'

export default function Forms(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className ="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
  <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button type="button" onClick={handleUpClick} className="btn btn-primary">Convert To UpperCase</button>

        <div className ="container">
            <h1>Your Text Summary</h1>
            <p>In this text you write {text.split(" ").length} words and {text.length} Charcters </p>
            <p>{0.008*text.split(" ").length} Mint Read</p>
            <h1>Preview</h1>
            <p>{text}</p>
        
        </div>
        </div>
        </>

    )
}