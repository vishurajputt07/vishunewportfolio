import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaDownload } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleResumeDownload = () => {
    // You can replace this with your actual resume file path
    const link = document.createElement('a')
    link.href = '/Vishu Rajput Resume.pdf' // Update this path to your resume file
    link.download = 'Vishu_Rajput_Resume.pdf'
    link.click()
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting">Hello, I'm</p>
            <h1 className="hero-name">
              <span className="gradient-text">Vishu Rajput</span>
            </h1>
            <p className="hero-title">Front End Developer</p>
            <p className="hero-description">
              A passionate Front End Developer and Computer Science Engineering student 
              at COER University. I specialize in building responsive, user-friendly web 
              interfaces using React.js, JavaScript, and modern web technologies. 
              Experienced in creating interactive applications with clean code and 
              innovative design.
            </p>
            <div className="hero-buttons">
              <button
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
              <button
                className="btn btn-resume"
                onClick={handleResumeDownload}
              >
                <FaDownload /> Download Resume
              </button>
            </div>
            <div className="hero-social">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/vishu-rajput"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:vishu05475@gmail.com"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-avatar">
              <div className="avatar-glow"></div>
              <div className="code-snippet">
                <div className="code-line">
                  <span className="code-keyword">const</span>{' '}
                  <span className="code-variable">developer</span> ={' '}
                  <span className="code-brace">{'{'}</span>
                </div>
                <div className="code-line">
                  <span className="code-property">name</span>:{' '}
                  <span className="code-string">'Vishu Rajput'</span>,
                </div>
                <div className="code-line">
                  <span className="code-property">passion</span>:{' '}
                  <span className="code-string">'Creating amazing UIs'</span>,
                </div>
                <div className="code-line">
                  <span className="code-property">skills</span>:{' '}
                  <span className="code-array">['React', 'JavaScript', 'HTML', 'CSS']</span>
                </div>
                <div className="code-line">
                  <span className="code-property">education</span>:{' '}
                  <span className="code-string">'B.Tech CSE - COER University'</span>
                </div>
                <div className="code-line">
                  <span className="code-brace">{'}'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero

