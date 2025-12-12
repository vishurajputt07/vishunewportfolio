import React from 'react'
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaBootstrap,
  FaCode,
} from 'react-icons/fa'
import { SiMongodb, SiMysql } from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'C/C++', icon: <FaCode />, level: 85 },
        { name: 'JavaScript', icon: <FaJs />, level: 90 },
        { name: 'SQL', icon: <FaCode />, level: 80 },
      ],
    },
    {
      title: 'Front End Technologies',
      skills: [
        { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 95 },
        { name: 'JavaScript', icon: <FaJs />, level: 90 },
        { name: 'React.js', icon: <FaReact />, level: 85 },
      ],
    },
    {
      title: 'Back End Technologies',
      skills: [
        { name: 'MySQL', icon: <SiMysql />, level: 80 },
        { name: 'MongoDB', icon: <SiMongodb />, level: 75 },
      ],
    },
    {
      title: 'Developer Tools & Others',
      skills: [
        { name: 'VS Code', icon: <FaCode />, level: 95 },
        { name: 'Git', icon: <FaGitAlt />, level: 85 },
        { name: 'Bootstrap', icon: <FaBootstrap />, level: 85 },
        { name: 'Responsive Design', icon: <FaCode />, level: 90 },
        { name: 'API Integration', icon: <FaCode />, level: 85 },
      ],
    },
  ]

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="section-header">
          <span className="section-tag">My Skills</span>
          <h2 className="section-title">Technologies I Work With</h2>
          <div className="title-underline"></div>
        </div>
        <div className="skills-content">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-icon">{skill.icon}</div>
                    <div className="skill-info">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

