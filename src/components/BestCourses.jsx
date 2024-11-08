import React from 'react'
import './BestCourses.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'


// import { fabolt } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'

export default function BestCourses() {
  return (
    
      <div className='best-courses-body'>

        <h3 className='bc-header'> Trending Topics
        <FontAwesomeIcon icon={faBolt} />
        </h3>

        <div className="best-courses-container-main">
            
        <div className="bc-container">
            <div className="bc-card ">
                <div className="bc-card-front bc-bg-added"><p>2 Months | 5 <span class="fa fa-star"></span></p>
                <h3 className='bc-front-h3'>Cybersecurity: Heightening Awareness, Bolstering Defense</h3></div>
                <div className="bc-card-back">
                    <h3>LEVEL</h3> <p>Advanced</p>
                    <h3>DURATION</h3> <p>5h 30min</p>
                    <h3>VIDEOS</h3> <p>21</p>
                    <hr />
                    <h2 id="bc-price">Price:  &#8377;200</h2>
                </div>
            </div>
        </div>
        <div className="bc-container">
            <div className="bc-card">
                <div className="bc-card-front">
                    <img src="./public/images/bc-campus-img.jpg" alt="" />
                    <div className="bc-content">Unlock Your Career: Seamless Campus to Corporate Transition Program</div>
                    <p className='bc-second-front-para'>3 Months | 5 <span class="fa fa-star"></span></p>
                </div>

                <div className="bc-card-back">
                <h3>LEVEL</h3> <p>Beginner</p>
                    <h3>DURATION</h3> <p>6h 45min</p>
                    <h3>VIDEOS</h3> <p>30</p>
                    <hr />
                    <h2 id="bc-price">Price:  &#8377;500</h2>
                </div>
            </div>
        </div>
        <div className="bc-container">
            <div className="bc-card">
                <div className="bc-card-front">
                <img src="./public/images/bc-investment-img.jpg" alt="" />
                    <div className="bc-content">Maximizing Returns: Mutual Fund Mastery Program</div>
                    <p className='bc-second-front-para'>2 Months | 5 <span class="fa fa-star"></span></p>
                </div>
                <div className="bc-card-back">
                <h3>LEVEL</h3> <p>Intermediate</p>
                    <h3>DURATION</h3> <p>3h 20min</p>
                    <h3>VIDEOS</h3> <p>12</p>
                    <hr />
                    <h2 id="bc-price">Price:  &#8377;300</h2>
                </div>
            </div>
        </div>
      
        </div>


    </div>
  )
}
