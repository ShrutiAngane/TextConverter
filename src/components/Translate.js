import React from "react";
import { useRef } from "react";
import { useEffect,useState } from 'react'
import Spinner from "./Spinner";
import './styling.css';
// import lang from './languages.json'

export default function Translate(props) {

  const [text, settext] = useState("");
  const [tl, settl] = useState("af");
  const [dl, setdl] = useState("");
  const [loading, setloading] = useState(false);
  const translate_input = useRef(null);
  useEffect(() => {
    let dropdown = document.getElementById("dropdown");
    let body = []
    const options = {
      method: 'GET',
      headers: {
        'Accept-Encoding': 'application/gzip',
        'X-RapidAPI-Key': '83570e0c38mshe677cb2814bdd31p1700c7jsn3be794f96e9f',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
      }
    };
    
    fetch('https://google-translate1.p.rapidapi.com/language/translate/v2/languages?target=en', options)
      .then(response => response.json())
      .then(response => {console.log(response)
        body=response.data.languages
        for (let i=0;i<body.length;i++) {
          let option = document.createElement("option");
          option.innerHTML = body[i].name;
          option.value = body[i].language;
          dropdown.appendChild(option);
        }})
      .catch(err => console.error(err));
  }, []);


  function changetext(e){
    settext(e.target.value);
    checkclass();
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
    setloading(true);
    const encodedParams = new URLSearchParams();
    encodedParams.append("q", text);
    
    const options_detect = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept-Encoding': 'application/gzip',
        'X-RapidAPI-Key': '83570e0c38mshe677cb2814bdd31p1700c7jsn3be794f96e9f',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
      },
      body: encodedParams
    };
    
    fetch('https://google-translate1.p.rapidapi.com/language/translate/v2/detect', options_detect)
      .then(response => response.json())
      .then(response => {console.log(response)
        setdl(response.data.detections[0][0].language)
      })
      .catch(err => console.error(err)); 

      const encodedParams_translate = new URLSearchParams();
      encodedParams_translate.append("q", text);
      encodedParams_translate.append("target", tl);
      encodedParams_translate.append("source", dl);

      const options = {
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'Accept-Encoding': 'application/gzip',
          'X-RapidAPI-Key': '83570e0c38mshe677cb2814bdd31p1700c7jsn3be794f96e9f',
          'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        body: encodedParams_translate
      };

      fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
        .then(response => response.json())
        .then(response => {console.log(response)
          setloading(false)
          translate_input.current.classList.remove('hidden')
          translate_input.current.value=response.data.translations[0].translatedText;
        })
        .catch(err => console.error(err));
  }

  return (
    <>
      <div className={`${props.theme} translate`} ref={props.reference}>
        <h4 className="headlines">
          Enter the text here to translate
        </h4>
        <textarea
          className="textarea"
          id="exampleFormControlTextarea1"
          value={text}
          onChange={changetext}
        ></textarea>
        <div className="dropdown">
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
          className="textarea hidden"
          id="exampleFormControlTextarea2"
          ref={translate_input}
        ></textarea>
        <div className="buttonsdiv">
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
