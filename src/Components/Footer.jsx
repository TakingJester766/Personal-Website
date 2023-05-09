import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div>
        <footer className="footer">
            <div className="footer-text">
                <p>© 2021 Alex Zimmerman</p>
            </div>
            <div className="footer-icons">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </div>
        </footer>
    </div>
  )
}

export default Footer