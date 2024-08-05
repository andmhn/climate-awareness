import React from 'react'

import scrollById from '../../utils'

const heading = () => {
  return (
      <div className="intro" >

        <p id="welcome">Climate Awareness</p>
        <a id="scroll_btn" onClick={() => scrollById("about", true)}>
          ▼ learn about climate ▼
        </a>

      </div>
  )
}

export default heading
