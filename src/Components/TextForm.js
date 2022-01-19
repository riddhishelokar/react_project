import React ,{useState}from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
            // console.log("Uppercase was clicked");
            let newText=text.toUpperCase();
            setText(newText)
    }
    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
}
const handleReverseClick=()=>{
    let newText=text.split("").reverse().join("");
    setText(newText)
}
const handleClearClick=()=>{
    let newText='';
    setText(newText)
}
    const handleOnChange=(event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // setText=("new text");// correct way to change the text
    return (
        <><div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}> Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}> Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleReverseClick}> Reverse Text</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}> Clear Text</button>
        </div>
        <div className="container my-3">

        <h2> Your text Summary</h2>
        <p> {text.split(" ").length } words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h3>Preview </h3>
            <p>{text}</p>
       
            </div></>

    )
}
