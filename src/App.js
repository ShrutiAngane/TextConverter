import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{ useState,useRef } from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Footer from './components/Footer';

function App() {
  const ref=useRef(null)
  const aboutref=useRef(null)
  const textref=useRef(null)
  const[mode,setmode]= useState('dark');
  const[theme,settheme]=useState('light');
  function changemode(){
    if(mode==='light' && theme==='dark'){
      setmode('dark');
      settheme('light')
      document.body.style.backgroundColor='white';
    }else{
      setmode('light');
      settheme('dark')
      document.body.style.backgroundColor='#042743';
    }
  }
  return (
    <>
    <Router>
    <Navbar reference={ref} mode={mode} aboutreference={aboutref} togglemode={changemode} theme={theme} textreference={textref}/>
    </Router>
    <TextForm textareahead='Enter your text below to convert' theme={theme} reference={ref} textref={textref}/>
    <About theme={theme} refer={aboutref}/>
    <Footer theme={theme}/>
    </>
  );
}

export default App;
