import React from 'react'
import './styling.css'

export default function Footer(props) {
  return (
    <div className={`footer footer-${props.theme}`}>
      Copyright &#169; 2022
    </div>
  )
}
