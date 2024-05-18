import React from 'react'
import styled from 'styled-components'
import { ReactComponent as GithubIcon } from '../../../../../static/github.svg'
import { ReactComponent as LinkedInIcon } from '../../../../../static/linkedin.svg'
import { ReactComponent as MediumIcon } from '../../../../../static/medium.svg'
import { ReactComponent as LeetCodeIcon } from '../../../../../static/leetcode.svg'

const StyledSVG = (SVGComponent: any) => styled(SVGComponent)`
  fill: #ffffff;
  width: 40px;
  margin-bottom: 2pt;
`;

const SNButtonsGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 80px 20px 20px 20px;
`

const SNButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: white;
  font-weight: medium;
  width: 60pt;
  text-align: center;
  margin-bottom:40px;
`

const SNButtonText = styled.span`
  font-weight: 600;
`

const SocialLinks: React.FC = () => {

  const StyledGithubIcon = StyledSVG(GithubIcon);
  const StyledLinkedInIcon = StyledSVG(LinkedInIcon);  
  const StyledMediumIcon = StyledSVG(MediumIcon);
  const StyledLeetCodeIcon = StyledSVG(LeetCodeIcon);
  

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/vsmelo/', '_blank')
  }

  const handleGithubClick = () => {
    window.open('https://github.com/vctrsmelo', '_blank')
  }

  const handleMediumClick = () => {
    window.open('https://medium.com/@victorsmelopoa', '_blank')
  }

  const handleLeetCodeClick = () => {
    window.open('https://leetcode.com/vctrsmelo/', '_blank')
  }

  return (
    <SNButtonsGroup>
      <SNButton onClick={handleLinkedInClick}>
        <StyledLinkedInIcon className="social-icon"/>
        <SNButtonText>Linkedin</SNButtonText>
      </SNButton>
      <SNButton onClick={handleGithubClick}>
        <StyledGithubIcon className="social-icon"/>
        <SNButtonText>Github</SNButtonText>
      </SNButton>
      <SNButton onClick={handleLeetCodeClick}>
        <StyledLeetCodeIcon className="social-icon"/>
        <SNButtonText>LeetCode</SNButtonText>
      </SNButton>
      <SNButton onClick={handleMediumClick}>
        <StyledMediumIcon className="social-icon"/>
        <SNButtonText>Medium</SNButtonText>
      </SNButton>
    </SNButtonsGroup>
  )
}

export default SocialLinks;