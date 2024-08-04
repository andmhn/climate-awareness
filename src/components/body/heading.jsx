import React from 'react'

import scrollById from '../scrollById'

const heading = () => {
  return (
      <div className="intro" >

        <p id="welcome">Climate Awareness</p>

        <button id="scroll_btn" onClick={() => scrollById("about", true)}>
          learn about climate
        </button>

      </div>
  )
}

export default heading
