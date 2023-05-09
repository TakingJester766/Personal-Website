import Header from '../Components/Header'
import '../App.css'


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
        {/*Link to my GitHub*/}
        <a href="https://github.com/TakingJester766" target="_blank">GitHub</a>
      </div>
      <div className="image">
        <img src="src/assets/me.jpg" alt="A picture of me" />
      </div>
    </div>
    </div>
  )
}

export default Home

