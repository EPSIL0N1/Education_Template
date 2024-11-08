import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

export default function Footer() {
  return (
    <div className='Footer-Body'>
        <footer className="footer-distributed">
            <div className="footer-left">
                <h3>Wittig <span>WorldWide</span></h3>

                <p className="footer-links">
                    <Link to="">Home</Link>
                    |
                    <Link to="">Training</Link>
                    |
                    <Link to="">Placement</Link>
                </p>

                <p className="footer-company-name">
                    Copyright &#169; 2024<strong>WittingWorldWide</strong> All rights reserved
                </p>
            </div>
                <div className='footer-center'>
                    <div>
                        <FontAwesomeIcon  className='fot-i'  icon={faLocationDot}/>
                        <p>
                            <span>
                                Sliguri
                            </span>
                            West Bengal
                        </p>
                    </div>
                    <div>
                    <FontAwesomeIcon  className='fot-i' icon={faPhone}/>
                    <p>+91 86170 29343</p>
                    </div>
                    <div>
                    <FontAwesomeIcon  className='fot-i' id="f-i-env" icon={faEnvelope}/>
                        <p>
                            <Link to="">wittigworldwide@gmail.com</Link>
                        </p>
                    </div>
                </div>
                <div className="footer-right">
                    <p className="footer-company-about">
                        <span>
                            About the Company
                        </span>
                        <strong>
                            Wittig WorldWide

                        </strong>
                        is a one stop solution for candidates looking for job and training.

                    </p>

                    <div className="footer-icons">
                        <Link><FontAwesomeIcon icon={faFacebook}/></Link>
                        <Link><FontAwesomeIcon icon={faLinkedin}/></Link>
                        <Link><FontAwesomeIcon icon={faWhatsapp}/></Link>
                        <Link><FontAwesomeIcon icon={faInstagram}/></Link>
                    </div>
                </div>
        </footer>
      
    </div>
  )
}
