import React from 'react';
import { Link } from "react-router-dom";
import './Training.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CenterMode() {

    const settings = {
      dots: true,
      // lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 2000,
      initialSlide: 2,
      pauseOnHover: true
    };

    return (
        <div className='Train-body'>
        <h3 id='train-h3'>Top Courses To Elevate Your Skills</h3>

        {/* <div className="train-container"> */}
        {/* <section className="articles"> */}
        <div className="slider-container">
        
        <Slider {...settings}>
        
        

  <article>
    <div className="article-wrapper">
      <figure>
      <img src="./public/images/tran_card-img-1.jpg" alt="" />
      </figure>
      <div className="article-body">
        <h3>Personality Development and Soft Skills</h3>
        <p>
        Elevate your potential: Mastering personal development and soft skills opens doors to limitless opportunities.
        </p>
        <Link to="#" className="read-more">
          Explore Now <span className="sr-only">about this is some title</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  </article>
  <article>

    <div className="article-wrapper">
      <figure>
      <img src="./public/images/tran_card-img-2.jpg" alt="" />
      </figure>
      <div className="article-body">
        <h3>Customer Service, Sales and Marketing</h3>
        <p>
        Unlock success: Embrace customer service, sales, and marketing expertise for thriving in dynamic business environments.
        </p>
        <Link to="#" className="read-more">
          Explore Now <span className="sr-only">about this is some title</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  </article>
  <article>

    <div className="article-wrapper">
      <figure>
      <img src="./public/images/tran_card-img-3.jpg" alt="" />
      </figure>
      <div className="article-body">
        <h3>BFSI Training and Workshops</h3>
        <p>
            Harness BFSI training: Empower with financial acumen and industry insights for navigating today's complex financial landscape effectively.
        </p>
        <Link to="#" className="read-more">
          Explore Now <span className="sr-only">about this is some title</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  </article>
  <article>

    <div className="article-wrapper">
      <figure>
      <img src="./public/images/tran_card-img-4.jpg" alt="" />
      </figure>
      <div className="article-body">
        <h3>Human Resources Enhancement Programs</h3>
        <p>Boost HR capabilities: Dive into enhancement programs for fostering talent, cultivating leadership, and optimizing organizational performance.</p>
        <Link to="#" className="read-more">
          Explore Now <span className="sr-only">about this is some title</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  </article>
  <article>

    <div className="article-wrapper">
      <figure>
      <img src="./public/images/tran_card-img-5.jpg" alt="" />
      </figure>
      <div className="article-body">
        <h3>Supervisors, Managers and Leaders Skill Development</h3>
        <p>Empower supervisors, managers, and leaders through skill development for effective team management and organizational success.</p>
        <Link to="#" className="read-more">
          Explore Now <span className="sr-only">about this is some title</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  </article>
  <article>

    <div className="article-wrapper">
      <figure>
      <img src="./public/images/tran_card-img-6.jpg" alt="" />
      </figure>
      <div className="article-body">
        <h3>Administrative Skills</h3>
        <p>Sharpen administrative skills for streamlined operations and enhanced productivity in diverse professional settings.</p>
        <Link to="#" className="read-more">
          Explore Now <span className="sr-only">about this is some title</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  </article>
            </Slider>
        </div>

        
        </div>
    );
}