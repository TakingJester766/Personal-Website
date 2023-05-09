import { useState } from 'react'
import Header from './Components/Header'
import './App.css'
import About from './Pages/About';
import GitHubActivityFeed from './Components/GithubActivityFeed';
import config from './config';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Footer from './Components/Footer';

function App() {

  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<About />} />
            <Route path="/projects" element={<GitHubActivityFeed username={config.username} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
