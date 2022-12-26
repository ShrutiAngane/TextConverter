import React from "react";
import { useRef } from "react";
import { useEffect,useState } from 'react'
import './styling.css';

export default function Translate(props) {

  const[text,settext]=useState('');
  const[tl,settl]=useState('')
  const[translatedtext,settranslation]=useState('')
  const translate_input=useRef(null)
  useEffect(()=>{
    let dropdown=document.getElementById('dropdown');
    const options = {
        method: 'GET',
        headers: {
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': '658e699f22msh8344fd6dc2522ffp1a7a85jsnd47b7a9075c3',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        }
    };
    
    fetch('https://google-translate1.p.rapidapi.com/language/translate/v2/languages?target=en', options)
        .then(response => response.json())
        .then(data => {
            let body=data;
            let languages=body.data.languages;
            languages=Array.from(languages)
            languages.forEach((x)=>{
                let option=document.createElement('option')
                option.value=x.language;
                option.innerHTML=x.name;
                dropdown.appendChild(option)
            }) 
        })
        .catch(err => console.error(err));
},[])


  function changetext(e){
    settext(e.target.value);
  }
  function settargetlang(e){
    settl(e.target.value)
  }
    function gettranslation(){
      const encodedParams = new URLSearchParams();
      encodedParams.append("q", text);
      encodedParams.append("target",tl);
      encodedParams.append("source", "en");

      const options = {
          method: 'POST',
          headers: {
              'content-type': 'application/x-www-form-urlencoded',
              'Accept-Encoding': 'application/gzip',
              'X-RapidAPI-Key': '658e699f22msh8344fd6dc2522ffp1a7a85jsnd47b7a9075c3',
              'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
          },
          body: encodedParams
      };

      fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
          .then(response => response.json())
          .then(response => {
            settranslation(response.data.translations[0].translatedText)
            translate_input.current.value=translatedtext
            console.log(translate_input.current.value)
          })
          .catch(err => console.error(err));
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
          ref={translate_input}
        ></textarea>
        <div>
        <label htmlFor="dropdown" style={{marginRight:'10px'}}>Select a language :</label>
        <select
          className="my-4"
          id="dropdown"
          onChange={settargetlang}
          value={tl}
        ></select>
        </div>
        <button type="button" className={`btn btn-${props.theme}`} onClick={gettranslation}>Translate</button>
      </div>
    </>
  );
}
