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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at sagittis nulla, ut hendrerit felis. Fusce eget elementum orci. Aenean vel aliquet nisl, ac tempus erat.</p>
      </div>
      <div className="image">
        <img src="src/assets/me.jpg" alt="A picture of me" />
      </div>
    </div>
    </div>
  )
}

export default App
