import { useState } from 'react'
import Header from './home/Header'
import './App.css'
import About from './about/About';

function App() {

  return (
    <div className="App">
    <div className="header">
      <Header />
    </div>
    <div className="container">
      <div className="text">
        <h1>Hi, I'm Alex.</h1>
        <p>I'm a self-taught developer and Finance Major at the University of Massachusetts Amherst.</p>
        <a href="#" id='about-me' className="nav-link">About Me</a>
      </div>
      <div className="image">
        <img src="src/assets/me.jpg" alt="A picture of me" />
      </div>
      <About />
    </div>
    </div>
  )
}

export default App

