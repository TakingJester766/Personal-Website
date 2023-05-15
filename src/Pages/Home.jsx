import Header from '../Components/Header'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


function Home() {

  return (
    <div className="App">
    <div className="header">
      <Header />
    </div>
    <div className="container">
      <div className="text">
        <h1>Hi, I'm Alex.</h1>
        <p>I'm a self-taught developer and Finance Major at the University of Massachusetts Amherst.</p>
        <p>Click the buttons below to see what I'm up to.</p>
        {/*Link to my GitHub*/}
        <div className="buttons">
        
        <a href="https://github.com/TakingJester766" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" id="github_logo" />
        </a>

        {/*Link to my LinkedIn*/}
        <a href="https://www.linkedin.com/in/alex-zimmerman/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" id="linkedin_logo" />
        </a>

        </div>

      </div>
      <div className="image">
        <img src="src/assets/me.jpg" alt="A picture of me" />
      </div>
    </div>
    </div>
  )
}

export default Home

