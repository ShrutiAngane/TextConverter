import React from 'react'
import './styling.css';
import { Link } from 'react-router-dom';


export default function Navbar(props) {
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
    <nav className={`navbar navbar-expand-lg nav-${props.theme} sticky-top`}>
  <div className="container-fluid mx-3">
    <Link className={`nav-link ${props.theme} fw-bold fs-5 text`} to="/">TextConverter</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse mx-3" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
