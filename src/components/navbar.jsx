import React from 'react'
import './navbar.css'
const navbar = () => {
  return (
    <nav>
      <div className="logo">
        <a href="#"><img src="earth_logo.png" alt="logo" height="70px"/></a>
      </div>
      <ul>
        <li><a href="#about">About Climate</a></li>
        <li><a href="#take-action">Take Action</a></li>
        <li><a href="#tools">Tools</a></li>
      </ul>
    </nav>
  )
}

export default navbar
