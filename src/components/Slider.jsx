import React, { useState } from 'react'
import './Slider.css'
import Typewriter from "typewriter-effect";

export default function Slider() {

  const [checked, setChecked] = useState(true)

  function handleChange(e) {
    setChecked(e.target.checked);
  }

  return (
    <>
    <div className='Slider-Head'>

      <input type="radio" id="slide1" name="group" onChange = {handleChange} defaultChecked={checked} />
      <input type="radio" id="slide2" name="group" onChange = {handleChange}/>
      <input type="radio" id="slide3" name="group" onChange = {handleChange}/>
      <input type="radio" id="slide4" name="group" onChange = {handleChange}/>
      <input type="radio" id="slide5" name="group" onChange = {handleChange}/>

      <div className='dots'>

        <label htmlFor="slide1"></label>
        <label htmlFor="slide2"></label>
        <label htmlFor="slide3"></label>
        <label htmlFor="slide4"></label>
        <label htmlFor="slide5"></label>

      </div>
      <div className='slider'>
          <div className='slide' htmlFor="slide1" style= {{'--img': 'url("../public/images/slider-img-1.jpg")'}}>
            <div className='content'>
              <h2>
                Get Best Courses
              </h2>
              <p>
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  strings: [
                    `"Exploring new courses broadens horizons and enriches life's journey."`,
                  ],
                }}
              />
              </p>
            </div>
          </div>
          <div className='slide' htmlFor="slide2" style={{'--img': "url('../public/images/slider-img-2.jpg')"}}>
            <div className='content'>
              <h2>
                Skill Development
              </h2>
              <p>
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  strings: [
                    `"Unlocking doors to promising careers through valuable placement opportunities."`,
                  ],
                }}
              />
              </p>
              
            </div>
          </div>
          <div className='slide' htmlFor="slide3" style={{'--img': "url('../public/images/slider-img-3.jpg')"}}>
            <div className='content'>
              <h2>
                Placement Opportunities
              </h2>
              <p>
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  strings: [
                    `"Unlocking doors to promising careers through valuable placement opportunities."`,
                  ],
                }}
              />
              </p>
            </div>
          </div>
          <div className='slide' htmlFor="slide4" style={{'--img': "url('../public/images/slider-img-4.jpg')"}}>
            <div className='content'>
              <h2>
                Know More!
              </h2>
              <p>
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  strings: [
                    `"Unlocking doors to promising careers through valuable placement opportunities."`,
                  ],
                }}
              />
              </p>
            </div>
          </div>
          <div className='slide' htmlFor="slide5" style={{'--img': "url('../public/images/slider-img-5.jpg')"}}>
            <div className='content'>
              <h2>
                Slide 05
              </h2>
              <p>
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  strings: [
                    `"Unlocking doors to promising careers through valuable placement opportunities."`,
                  ],
                }}
              />
              </p>
            </div>
          </div>
      </div>
    </div>
    </>
  )
}
