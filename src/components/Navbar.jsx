import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('hero')}>
          <span className="logo-text">Portfolio</span>
        </div>
        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero') }}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience') }}>
              Experience
            </a>
          </li>
          <li className="nav-item">
            <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills') }}>
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects') }}>
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>
              Contact
            </a>
          </li>
        </ul>
        <div className="nav-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  )
}

export default Navbar

