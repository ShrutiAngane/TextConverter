import React, { useState } from 'react'
import './styling.css';
import menuimg from './menu-burger.svg'
import { Link } from "react-scroll"

export default function Navbar(props) {
  const[menu,setmenu]=useState(false)
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
          <Link className={`navlink ${props.theme}`} aria-current="page"  to='home' smooth duration={1000}>Home </Link>
        </li>
        <li className="nav-item">
          <Link className={`navlink ${props.theme}`}  to='about' smooth duration={1000} offset={0}>About us</Link>
        </li>
        <li className="nav-item">
          <Link className={`navlink ${props.theme}`}  to='translate' smooth duration={1000}>Translate text</Link>
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
