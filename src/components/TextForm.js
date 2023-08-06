import React, {useState} from 'react'

function TextForm(props) {
    const handleUpClick=()=>{
        // console.log(text);
        let newtext=text.toUpperCase()
        setText(newtext)
    }

    const handlelowClick=()=>{
      // console.log(text);
      let newtext=text.toLowerCase()
      setText(newtext)
    }

    const handleChange=(event )=>{
        // console.log("on change");
        setText(event.target.value);
    }

    const handleclear=()=>{
      // console.log(text);
      let newtext=""
      setText(newtext)
    }

    const handlecopy=()=>{
      // console.log(text);
      let newtext=document.getElementById("exampleFormControlTextarea1")
      newtext.select()
      navigator.clipboard.writeText(newtext.value)
    }

    const handleremovespace = ()=>{
      let newtext=text.split(/[ ]+/)
      setText(newtext.join(" "))
    }

    const [text,setText]= useState("")
  return (
    <div>
        
        <div className="mb-3 container my-3" style={{color : props.mode==="dark"?'white':'black'}}>
          <h1>{props.heading}</h1>
          <textarea className="form-control" style={{backgroundColor : props.mode==="light"?'white':'#72818c', color : props.mode==="dark"?'white':'black'}} value={text} onChange={handleChange}   id="exampleFormControlTextarea1" rows="8"></textarea>
          <button type="button" disabled={text.length===0} className="btn btn-primary btn-sm my-3 mx-3" onClick={handleUpClick}>Upper Case</button>
          <button type="button" disabled={text.length===0} className="btn btn-primary btn-sm my-3 mx-3" onClick={handlelowClick}>Lower Case</button>
          <button type="button" disabled={text.length===0} className="btn btn-primary btn-sm my-3 mx-3" onClick={handleclear}>Clear text</button>
          <button type="button" disabled={text.length===0} className="btn btn-primary btn-sm my-3 mx-3" onClick={handlecopy}>Copy text</button>
          <button type="button" disabled={text.length===0} className="btn btn-primary btn-sm my-3 mx-3" onClick={handleremovespace}>Remove Extra spaces</button>
        </div>

        <div className='container' style={{color : props.mode==="dark"?'white':'black'}}>
          <h3>Your text summary</h3>
          <p> {text.split(/\s+/).filter((element)=>{return element.length!=0}).length} words, {text.length} characters</p>
          <p>{0.008*text.split(" ").filter((element)=>{return element.length!=0}).length} minutes to read</p>
          <h3>Preview</h3>
          <p>{text.length>0?text :"Enter in textbox to preview it here"}</p>
        </div>
    </div>
  )
}

export default TextForm
