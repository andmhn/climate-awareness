import React from 'react'
import './navbar.css'
const navbar = () => {
  return (
    <nav>
      <div className="logo">
        <a href="#"><img src="earth_logo.png" alt="logo" height="80px"/></a>
      </div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About Climate</a></li>
        <li><a href="#take-action">Take Action</a></li>
      </ul>
    </nav>
  )
}

export default navbar
