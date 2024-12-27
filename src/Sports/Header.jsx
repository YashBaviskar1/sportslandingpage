import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import logo from "../assets/logo.ico"
import "./Header.css";
import DropdownMenu from "./Profile";
import Cookies from "js-cookie";

import { Link } from "react-router-dom";

const images = [
  { src: "https://res.cloudinary.com/dyhby7bo9/image/upload/v1734699274/OJUSPHOTOS/gftwej7iyf5d5eq64oqj.jpg", title: "Cricket", subtitle: "Sportsmanship" },
  { src: "https://res.cloudinary.com/dyhby7bo9/image/upload/v1734699275/OJUSPHOTOS/qirhfbnkzjxfzaktkqf8.jpg", title: "Volleyball", subtitle: "Design" },
  { src: "https://res.cloudinary.com/dyhby7bo9/image/upload/v1735207250/rt4qm7zeahzz0slcomzj.jpg", title: "Football", subtitle: "Design" },
  { src: "https://res.cloudinary.com/dyhby7bo9/image/upload/v1735207250/zpwgjufcyf1j1wzrhuu6.jpg", title: "Football", subtitle: "Design" },
  { src: "https://res.cloudinary.com/dyhby7bo9/image/upload/v1735207248/rti6jt2muxixfubevlhn.jpg", title: "Football", subtitle: "Design" },
  { src: "https://res.cloudinary.com/dyhby7bo9/image/upload/v1735207250/puj356zzb428qvslvizs.jpg", title: "Football", subtitle: "Design" },
  
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const userData = Cookies.get("userData");
    if (userData) {
      setUser(JSON.parse(userData)); 
    }
  }, []);
  // Auto-advance slider
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Handlers for navigation
  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const currentSlide = (index) => {
    setActiveIndex(index);
  };

  const handleLogout = () => {
    // Clear cookies (assuming you're using cookies for user storage)
    document.cookie = 'user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  
    // Clear user from state
    setUser(null);
  
    // Optionally navigate to the login page
    navigate('/login');
  };

  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <>
    <div id="home">
         <header>
        <Image src={logo} width={90} height={90} style={{ marginTop: "50px" }} />

        {!user ? (
    <Link 
      to="/login" 
      style={{
        backgroundColor: "white", 
        padding: '10px 20px', 
        borderRadius: '50px', 
        color: 'black', 
        marginTop: "50px", 
        textDecoration: 'none'
      }}
    >
      Login
    </Link>
  ) : (
    <span 
      id="name" 
      style={{
        fontWeight: 'bold',
        marginTop: "20px",
        display: 'block'
      }}
    >
      Hello, {user.name}
    </span>
  )}

       <button onClick={handleLogout} >Log out</button>
        <div
        className={`hamburger1 ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        style={{marginTop:"30px"}}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Full-Screen Sliding Menu */}
      <ul className={`menu1 ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/schedule">Schedule</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      </header>

      {/* Slider Section */}
      <div className="slider">
        <div className="list">
          {images.map((image, index) => (
            <div
              key={index}
              className={`item ${index === activeIndex ? "active" : ""}`}
            >
              <img src={image.src} alt={image.title} />
             
            </div>
          ))}
        </div>
<div className="Trophy">
  <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1734699280/OJUSPHOTOS/plsv5rvxqvjltqtslsvl.png"></img>
</div>
        <div className="arrows">
          <button onClick={handlePrev} className="prev">
            {"<"}
          </button>
          <button onClick={handleNext} className="next">
            {">"}
          </button>
        </div>

        <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => currentSlide(index)}
          ></span>
        ))}
      </div>

        
      </div>
      </div>
    </>
  );
};

export default HeroSection;
