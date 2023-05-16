import React from 'react'
import '../App.css'

function About() {
  return (
    <div>

      <h1 >About</h1>
      <div className="image_and_text">
      <div className='image'>
        <img src="src/assets/grad_me.jpg" alt="A picture of me" />
      </div>
      <p>I'm a self-taught developer and Finance Major at the University of Massachusetts Amherst.</p>
      </div>
    </div>
  )
}

export default About;