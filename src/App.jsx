import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <div className="header">
      <Header />
    </div>
    <div className="container">
      <div className="text">
        <h1>Hi, I'm Alex Zimmerman</h1>
        <p>I'm a self-taught developer and Finance Major at the University of Massachusetts Amherst.</p>
      </div>
      <div className="image">
        <img src="src/assets/me.jpg" alt="A picture of me" />
      </div>
    </div>
    </div>
  )
}

export default App
