import React, { useState} from 'react'
import './Navbar.css'
import { Link, useLocation } from "react-router-dom";


export default function Navbar() {

    let location = useLocation();

    const [color, setColor] = useState(false);

    const changeColor = () =>{
      if (window.scrollY >= 95){
        setColor(true);
      }
      else{
        setColor(false);
      }
    }
    window.addEventListener("scroll", changeColor);

  return (
    <nav className = "Navbar-Head">

        <ul className={color ? "Navbar-Ul Navbar-Ul-BackgroundChng" : "Navbar-Ul"}>
        

            <li className='img-logo'><Link to="/"><img className="Logo-Img" src="../public/images/BlackLogo-bg-rm.png" alt="Loading..." /></Link></li>
            <li className='Navbar-Li'><Link className={location.pathname === "/"?"Nav-Link Active-Link":"Nav-Link"} to="/"><span>Home</span><div className='wave'></div></Link></li>
            <li className='Navbar-Li'><Link className={location.pathname === "/about"?"Nav-Link Active-Link":"Nav-Link"} to="/about"><span>Training</span><div className='wave'></div></Link></li>
            <li className='Navbar-Li'><Link className={location.pathname === "/courses"?"Nav-Link Active-Link":"Nav-Link"} to="/courses"><span>Placements</span><div className='wave'></div></Link></li>
            <li className='Navbar-Li'><Link className={location.pathname === "/placements"?"Nav-Link Active-Link":"Nav-Link"} to="/placements"><span>LogIn</span><div className='wave'></div></Link></li>

        </ul>
        
    </nav>
  )
}
