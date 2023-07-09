import React from 'react'
import { ReactComponent as LinkedInIcon } from '../../../static/linkedin.svg'
import { ReactComponent as GithubIcon } from '../../../static/github.svg'
import { ReactComponent as MediumIcon } from '../../../static/medium.svg'
import './social-network.css'

const SocialLinks: React.FC = () => {

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/vsmelo/', '_blank')
  }

  const handleGithubClick = () => {
    window.open('https://github.com/vctrsmelo', '_blank')
  }

  const handleMediumClick = () => {
    window.open('https://medium.com/@victorsmelopoa', '_blank')
  }

  return (
    <div className="social-network-buttons">
      <button onClick={handleLinkedInClick}>
        <div style={{width: "100%" }}>
          <LinkedInIcon className="social-icon"/>
        </div>
        <span>Linkedin</span>
      </button>
      <button onClick={handleGithubClick}>
        <div style={{width: "100%" }}>
          <GithubIcon className="social-icon"/>
        </div>
        <span>Github</span>
      </button>
      <button onClick={handleMediumClick}>
        <div style={{width: "100%" }}>
          <MediumIcon className="social-icon"/>
        </div>
        <span>Medium</span>
      </button>
    </div>
  )
}

export default SocialLinks;