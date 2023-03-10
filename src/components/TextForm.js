import React, { useState } from "react";
import './styling.css';
import Translate from './Translate';

export default function TextForm(props) {
  const [text, settext] = useState("");
  function convertUpper() {
    let converted_text = text.toUpperCase();
    settext(converted_text);
  }
  function changetext(e) {
    settext(e.target.value);
  }
  function convertLower() {
    let converted_text = text.toLowerCase();
    settext(converted_text);
  }
  function trimSpaces(){
    let splittext=text.split(' ')  // better code 
    let trimedspace=[]
    splittext.forEach((x)=>{
      if(x!==''){
        trimedspace.push(x)
      }
    })
    // let trimedspace=text.split(/[ ]+/) this adds an extra space if there is any space at the beginning of the og text
    settext(trimedspace.join(' '));
  }
  function cleartext(){
    settext('');
  }
  function copytext(){
    let t=document.getElementById('exampleFormControlTextarea1');
    t.select();
    t.setSelectionRange(0, 99999); // For mobile devices
    // Copy the text inside the text field
    navigator.clipboard.writeText(t.value)
  }
  return (
    <div className={`container ${props.theme}`} name='home'>
      <div className={`${props.theme}`}>
        <h4 className="headlines">{props.textareahead}</h4>
        <textarea
          className="textarea"
          id="exampleFormControlTextarea1"
          value={text}
          onChange={changetext}
        ></textarea>
      </div>
      <div className="buttonsdiv">
      <button className={`btn btn-${props.theme} mx-2`} onClick={convertUpper}>
        Convert to Uppercase
      </button>
      <button className={`btn btn-${props.theme} mx-2`} onClick={convertLower}>
        Convert to Lowercase
      </button>
      <button className={`btn btn-${props.theme} mx-2`} onClick={trimSpaces}>
        Remove Extra spaces
      </button>
      <button className={`btn btn-${props.theme} mx-2`} onClick={cleartext}>
        Clear
      </button>
      <button className={`btn btn-${props.theme} mx-2`} onClick={copytext}>
        Copy
      </button>
      </div>
      <p className="my-2">
        {text.length > 0 ? text.trim().split('\n').reduce((a1,a2)=>{
    return a1+a2.split(' ').length;
},0) : text.length} words and{" "}
        {text.split("").length} characters
      </p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h5 className="headlines">Preview</h5>
      <textarea
          className="textarea"
          id="exampleFormControlTextarea1"
          value={text}
          onChange={changetext}
          placeholder='Enter the text above to see its preview here'></textarea>
      <Translate reference={props.reference} theme={props.theme}/>
    </div>
    
  );
}
