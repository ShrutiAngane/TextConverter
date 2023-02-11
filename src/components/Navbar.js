import React, { useState } from 'react'
import './styling.css';
import menuimg from './menu-burger.svg'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  const[menu,setmenu]=useState(false)
  const gototranslate=()=>{
    props.reference.current?.scrollIntoView({behavior: 'smooth',block:'start'});
  }
  const gotoabout=()=>{
    props.aboutreference.current?.scrollIntoView({behavior: 'smooth'});
  }
  const gotohome=()=>{
    props.textreference.current?.scrollIntoView({behavior: 'smooth'});
  }
  return (
    <>
    <nav className={`nav-${props.theme} sticky-top`}>
  <div className=" navbar container-fluid mx-3">
    <Link className={`logo ${props.theme}`} to="/">TextConverter</Link>
    <div>
      <img src={menuimg} className={`hamburger-${props.theme} hamburger`} alt='hamburgermenu' onClick={()=>setmenu((prev)=>!prev)}></img>
    </div>
    <div className={`${menu?'menuphone':'menu'} nav-${props.theme}`} id="navbarSupportedContent">
      <ul className="navlist">
        <li className="nav-item">
          <Link className={`navlink ${props.theme}`} aria-current="page" onClick={gotohome}>Home </Link>
        </li>
        <li className="nav-item">
          <Link className={`navlink ${props.theme}`} onClick={gotoabout}>About us</Link>
        </li>
        <li className="nav-item">
          <Link className={`navlink ${props.theme}`} onClick={gototranslate}>Translate text</Link>
        </li>
      </ul>
      <input type='checkbox' id='check' className='toggle'onClick={props.togglemode}/>
      <label htmlFor='check'>{`Enable ${props.mode} mode`}</label>
    </div>
  </div>
</nav>
    </>
  )
}
Navbar.defaultProps = {
    navbarhead: 'Stranger'
  }
