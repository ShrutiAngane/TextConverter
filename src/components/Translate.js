import React from "react";
import { useRef } from "react";
import { useEffect,useState } from 'react'
import Spinner from "./Spinner";
import './styling.css';
import lang from './languages.json'

export default function Translate(props) {

  const [text, settext] = useState("");
  const [tl, settl] = useState("af");
  const [dl, setdl] = useState("");
  const [loading, setloading] = useState(false);
  const translate_input = useRef(null);
  useEffect(() => {
    let dropdown = document.getElementById("dropdown");
    let body = lang.translation;
    console.log(body);
    for (let element in body) {
      let option = document.createElement("option");
      option.innerHTML = body[element].name;
      option.value = element;
      dropdown.appendChild(option);
    }
  }, []);


  function changetext(e){
    settext(e.target.value);
  }
  function settargetlang(e){
    settl(e.target.value)
  }
  function checkclass(){
    if(translate_input.current.classList.contains('hidden')){

    }
    else{
      translate_input.current.classList.add('hidden')
    }

  }
    function gettranslation(){
      let textbody=[
        {
            "Text": text
        }
    ]
    console.log(textbody)
      const options1 = {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': '658e699f22msh8344fd6dc2522ffp1a7a85jsnd47b7a9075c3',
          'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
        },
        body: JSON.stringify(textbody)
      };
      
      fetch('https://microsoft-translator-text.p.rapidapi.com/Detect?api-version=3.0', options1)
        .then(response => response.json())
        .then(response =>{
          let x=response
          console.log(x[0].language)
          setdl(x[0].language)
        })
        .catch(err => console.error(err)); 

      setloading(true)
      const options2 = {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': '658e699f22msh8344fd6dc2522ffp1a7a85jsnd47b7a9075c3',
          'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
        },
        body: JSON.stringify(textbody)
      };
      
      fetch(`https://microsoft-translator-text.p.rapidapi.com/translate?to%5B0%5D=${tl}&api-version=3.0&from=${dl}&profanityAction=NoAction&textType=plain`, options2)
        .then(response => response.json())
        .then((response) => {
          setloading(false)
          translate_input.current.classList.remove('hidden')
          console.log(response[0].translations[0].text)
          console.log(translate_input.current)
          translate_input.current.value=response[0].translations[0].text
          
        })
        .catch((err) => console.error(err));
  }

  return (
    <>
      <div className={`container d-flex flex-column ${props.theme} justify-content-center align-items-center mt-4`} ref={props.reference}>
        <p className="my-4 fw-bold fs-3 text">
          Enter the text here to translate
        </p>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={changetext}
        ></textarea>
        <div>
        <label htmlFor="dropdown" style={{marginRight:'10px'}}>Select a language :</label>
        <select
          className="my-4"
          id="dropdown"
          onChange={settargetlang}
          value={tl}
          onClick={checkclass}
        ></select>
        </div>
        <textarea
          className="form-control hidden"
          id="exampleFormControlTextarea2"
          rows="8"
          ref={translate_input}
        ></textarea>
        <div>
        <button type="button" className={`btn btn-${props.theme} my-2`} onClick={gettranslation}>Translate</button>
        { loading && <Spinner/>}
        <button className={`btn btn-${props.theme} mx-2`} onClick={()=>{
          let t=document.getElementById('exampleFormControlTextarea2');
          t.select();
          t.setSelectionRange(0, 99999); // For mobile devices
          // Copy the text inside the text field
          navigator.clipboard.writeText(t.value)
        }}>
        Copy
      </button>
        </div>
      </div>
    </>
  );
}
