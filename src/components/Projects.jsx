import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'V- Films Landing Page',
      description:
        'A modern and responsive landing page designed for V-Films, showcasing their brand and services with a clean layout, clear call-to-action sections, and smooth user navigation. The page highlights essential information in a visually appealing format and is fully optimized for all devices.',
      technologies: ['React.js', 'CSS', 'JavaScript'],
      image: 'https://res.cloudinary.com/dqsphdxol/image/upload/v1765535373/Screenshot_2025-12-12_140256_f9ckb7.png',
      github: 'https://github.com/vishurajputt07/EZ-work-Assignment',
      demo: 'https://vfilms-landing.netlify.app/',
      period: 'October 2025 - November 2025',
    },
    {
      id: 2,
      title: 'SkillSprint - E-Learning Platform',
      description:
        'SkillSprint E‑Learning is a responsive online learning platform built with React, featuring engaging UI and structured course presentation. It enables users to explore and access educational content through an intuitive interface designed for seamless learning experiences',
      technologies: ['React.js', 'JavaScript', 'CSS'],
      image: 'https://res.cloudinary.com/dqsphdxol/image/upload/v1765535372/Screenshot_2025-12-12_143209_skcmvi.png',
      github: 'https://github.com/vishurajputt07/SkillSprint-E-Learning',
      demo: 'https://skillsprint-elearning.netlify.app/',
      period: 'September 2025 - October 2025',
    },
    {
      id: 3,
      title: 'Forest Fire Prediction',
      description:
        'Built a machine learning-powered web application to predict forest fire occurrences, achieving 95% prediction accuracy. Programmed an interactive and intuitive Streamlit UI for real-time fire risk predictions. Accelerated data processing algorithms, reducing computation time by 30%.',
      technologies: ['Python', 'Streamlit', 'Scikit-Learn', 'Pandas'],
      image: 'https://res.cloudinary.com/dqsphdxol/image/upload/v1765535373/Screenshot_2025-02-07_015319_vn03fu.png',
      github: 'https://github.com/vishurajputt07/Forest-Fire-Prediction-App',
      demo: 'https://example.com',
      period: 'September 2024 - December 2024',
    },
    {
      id: 4,
      title: 'Ready Go',
      description:
        'Spearheaded front-end development for a responsive community-driven platform, enhancing accessibility and driving user engagement by 25%. Integrated custom animations using JavaScript, resulting in a 40% increase in user engagement metrics. Collaborated with back-end team, enhancing overall platform performance by 15%.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP'],
      image: 'https://res.cloudinary.com/dqsphdxol/image/upload/v1765535380/Screenshot_2025-12-12_141520_af7xpa.png',
      github: 'https://github.com/vishurajputt07/Ready-Go-Website',
      demo: 'https://vishurajputt07.github.io/Ready-Go-Website/',
      period: 'February 2024 - August 2024',
    },
  
  ]
//testing with a comment 
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <span className="section-tag">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <div className="title-underline"></div>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-img"
                />
                <div className="project-overlay">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label="Demo"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                {project.period && (
                  <p className="project-period">{project.period}</p>
                )}
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

