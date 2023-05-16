import React from 'react'
import GitHubActivityFeed from '../Components/GithubActivityFeed';
import '../App.css'
import config from '../config';

function Projects() {
  return (
    <div className="App">
      <div className="container">
        <GitHubActivityFeed username={config.username} />

      </div>
    </div>
  )
}

export default Projects