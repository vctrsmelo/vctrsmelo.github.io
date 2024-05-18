import './index.css'
import hero from '../../../../static/hero.png'
import SocialLinks from './social-networks';

const Hero = () => {
  return (
    <div id="hero">
      <div className="overlay-and-blur"></div>
      <div id="hero-content">
        <div id="hero-image-and-text">
          <div id="hero-image">
          <img src={hero} alt="profile"/>
          </div>
          <div id="hero-texts">
            <p className='hero-title hero-text'>Hi, I'm Victor</p>
            <p className='hero-text'>SDE at Amazon 👨🏻‍💻</p>
            <p className='hero-text'>Lifelong Learner 📚</p>
            <p className='hero-text'>Virtual Worlds Explorer 👾</p>
          </div>
        </div>
        <SocialLinks/>
      </div>
    </div>
    )
}

export default Hero;