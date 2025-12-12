import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Who I Am</h2>
          <div className="title-underline"></div>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              I'm a Computer Science Engineering student at COER University, Roorkee, 
              currently pursuing my B.Tech degree with a CGPA of 7.28. I'm a passionate 
              Front End Developer with experience in building responsive web applications 
              and interactive user interfaces.
            </p>
            <p className="about-description">
              I have completed internships at Prodesk IT and Bharat Intern, where I 
              contributed to multiple web projects, improved user engagement, and optimized 
              application performance. My expertise includes React.js, JavaScript, HTML5, 
              CSS3, and modern web development tools. I'm always eager to learn new 
              technologies and create innovative solutions.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">8.1</div>
                <div className="stat-label">CGPA</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2</div>
                <div className="stat-label">Internships</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">4+</div>
                <div className="stat-label">Projects</div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-wrapper">
              <div className="image-glow"></div>
              <div className="about-card">
                <div className="card-icon">💻</div>
                <h3>B.Tech CSE Student</h3>
                <p>COER University, Roorkee</p>
                <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>2022 - 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

