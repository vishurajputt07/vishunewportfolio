import React from 'react'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'Prodesk IT',
      position: 'Front End Development Intern',
      period: 'June 2025 - July 2025',
      location: 'Virtual',
      type: 'Internship',
      achievements: [
        'Contributed to multiple responsive web interfaces (Payment Landing Page, OTP Verification Component, News Home Page, Multi-Page Entertainment Web App), focusing on user-friendly layouts and clean UI.',
        'Applied core front-end technologies: HTML, CSS, JavaScript, ensuring cross-browser compatibility and smooth responsiveness.',
        'Collaborated with the team to refine UI/UX designs, focusing on enhancing user retention by improving navigation flow and optimizing layouts.',
      ],
    },
    {
      id: 2,
      company: 'Bharat Intern',
      position: 'Web Developer Intern',
      period: 'August 2023 - September 2023',
      location: 'Virtual',
      type: 'Internship',
      achievements: [
        'Designed innovative E-commerce Product Page using advanced HTML and CSS techniques; incorporated interactive features leading to heightened user interaction levels by 15%, positively impacting overall customer experience.',
        'Boosted page performance, improving speed by 25% and reducing bounce rates by 10%.',
        'Optimized back-end data retrieval to improve back-end efficiency, reducing server requests and enhancing overall site responsiveness by 20%.',
      ],
    },
  ]

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <div className="section-header">
          <span className="section-tag">Experience</span>
          <h2 className="section-title">Work Experience</h2>
          <div className="title-underline"></div>
        </div>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="experience-item">
              <div className="experience-marker"></div>
              <div className="experience-content">
                <div className="experience-header">
                  <h3 className="experience-position">{exp.position}</h3>
                  <span className="experience-type">{exp.type}</span>
                </div>
                <div className="experience-company">
                  <FaBriefcase className="experience-icon" />
                  <span>{exp.company}</span>
                </div>
                <div className="experience-details">
                  <div className="experience-detail-item">
                    <FaCalendarAlt className="experience-icon" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="experience-detail-item">
                    <FaMapMarkerAlt className="experience-icon" />
                    <span>{exp.location}</span>
                  </div>
                </div>
                <ul className="experience-achievements">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

