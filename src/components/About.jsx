import React from 'react'
import './About.css'
import BgVdo from '../assets/videos/bg-vdo4.mp4'


export default function About() {
  return (
    <div className='About-body' id="about">
    <h1 className='abt-Heading'>What We Offer</h1>
    
    <div className='AboutUs-Head'>

    <video autoPlay loop muted>
      <source src={BgVdo} type='video/mp4'/>
    </video>

      <div className="Abt-container">

    <div className="Abt-card">
      <div className="imgBx">
        <img src="../public/images/growth-icon.png" alt="Loading..." />
        <h3>Personal Growth</h3>

      </div>
      <div className="Abt-content">
        <p>Uncover your strengths, values, and career goals</p>
      </div>
      
    </div>
    
    <div className="Abt-card">
      <div className="imgBx">
        <img src="../public/images/skill-icon.png" alt="Loading..." />
        <h3>Skill Development</h3>

      </div>
      <div className="Abt-content">
        <p>Master indemand skills for your chosen path</p>
      </div>
      
    </div>
    
    <div className="Abt-card">
      <div className="imgBx">
        <img src="../public/images/job-icon.png" alt="Loading..." />
        <h3>Find Jobs</h3>

      </div>
      <div className="Abt-content">
        <p>Get matched with top companies seeking talent</p>
      </div>
      
    </div>
    </div>

    </div>
    </div>
  )
}
