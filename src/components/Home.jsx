import React from 'react'
import Navbar from './Navbar'
import Slider from './Slider'
import About from './About'
import './Home.css'
import Training from './Training'
import BestCourses from './BestCourses'
import ContactUs from './ContactUs'
import Testimonials from './Testimonials'
import Footer from './Footer'

export default function Home() {
  
  return (
    <>
      <Navbar/>
  
      <Slider/>
      <div className='check'>
      </div>
      
      <About/>
      <Training/>
      <BestCourses/>
      <Testimonials/>
      <ContactUs/>
      <Footer/>
    </>
  )
}
