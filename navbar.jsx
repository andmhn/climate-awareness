import React from 'react'
import './navbar.css'
const navbar = () => {
  return (
    <nav>
      <div className="logo"><img src='' alt="Icon" /></div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="#about">About Climate</a></li>
        <li><a href="#take-action">Take Action</a></li>
      </ul>
    </nav>
  )
}

export default navbar
