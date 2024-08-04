import React from 'react'
import scrollById from '../utils'

import './navbar.css'

const navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src="earth_logo.png" alt="logo" height="70px"/>
      </div>
      <ul>
        <li><a onClick={() => scrollById("about")}>About Climate</a></li>
        <li><a onClick={() => scrollById("take-action")}>Take Action</a></li>
        <li><a onClick={() => scrollById("tools")}>Tools</a></li>
      </ul>
    </nav>
  )
}

export default navbar
