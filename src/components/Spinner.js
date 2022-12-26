import React from 'react'
import loading from './spinnergif.gif'

export default function Spinner() {
  return (
    <div>
      <img src={loading} alt='loading...'></img>
    </div>
  )
}
