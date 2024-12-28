import React, { useEffect, useRef, useState } from 'react';
import './index.css'; // Add your styles in this file
import { Link } from "react-router-dom";
import OjusLogo from '../assets/logo.ico';
import drc from '../assets/dark_rider-character.webp';
import drtitle from '../assets/dark_rider-title.png';
import frcover from '../assets/force_mage-cover.jpg';
import frc from '../assets/force_mage-character.webp';
import frtitle from '../assets/force_mage-title.png';
import img from '../assets/img.jpg';
import video from '../assets/sports1.mp4';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';


const Index = () => {
  const [activeSlider, setActiveSlider] = useState(3);
  const page2Ref = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

useEffect(() => {
    const elems = document.querySelectorAll('.elem');
    const firstElem = elems[0];
    const bgVideo = firstElem.getAttribute('data-video');
  
    if (bgVideo && page2Ref.current) {
      const existingVideo = page2Ref.current.querySelector('video');
      if (existingVideo) {
        existingVideo.pause();
        existingVideo.remove();
      }
  
      const videoElement = document.createElement('video');
      videoElement.src = ${bgVideo}?v=${new Date().getTime()}; // Cache-busting
      videoElement.autoplay = true;
      videoElement.loop = true;
      videoElement.muted = true;
      videoElement.setAttribute('playsinline', true);
      videoElement.setAttribute('preload', 'auto');
      videoElement.style.position = 'absolute';
      videoElement.style.top = '0';
      videoElement.style.left = '0';
      videoElement.style.width = '100%';
      videoElement.style.height = '100%';
      videoElement.style.objectFit = 'cover';
      videoElement.style.zIndex = '-1';
  
      videoElement.addEventListener('canplay', () => {
        videoElement.play().catch(() => {
          console.error('Autoplay blocked');
        });
      });
  
      page2Ref.current.appendChild(videoElement);
    }
  }, []);

  const handleSliderClick = (index) => {
    setActiveSlider(index);
  };

  const sliderData = [
    { name: 'Mike', title: 'web3 Developer', img:  img  },
    { name: 'Samite', title: 'WordPress Developer', img: img },
    { name: 'Hashi', title: 'Java Developer', img: img },
    { name: 'Kaity', title: 'Web Developer', img: img },
    { name: 'Lauren', title: 'PHP Developer', img: img },
    { name: 'Ryan', title: 'SEO Developer', img: img },
    { name: 'Dakes', title: 'SQL Developer', img: img },
  ];

  return (
    <div id="main">
      <div id="nav1">
      <img src={OjusLogo} width="90" height="90" alt="Ojus Logo" />

      {/* Buttons for Larger Screens */}
      <div className="nav-buttons">
        <button className="button">
          <div className="dots_border" />
          <Link to="/council">
            <span className="text_button">Council</span>
          </Link>
        </button>
        <button className="button">
          <div className="dots_border" />
          <Link to="/heads">
            <span className="text_button">Heads</span>
          </Link>
        </button>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Full-Screen Sliding Menu for Mobile */}
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <button className="button">
          <div className="dots_border" />
          <Link to="/council">
            <span className="text_button">Council</span>
          </Link>
        </button>
        <button className="button">
          <div className="dots_border" />
          <Link to="/heads">
            <span className="text_button">Heads</span>
          </Link>
        </button>
      </div>
    </div>

      <div id="page1">
        <div className="container">
          {/* <div className="left">
            <p>OJUS - 2k25</p>
          </div> */}
          {/* <div className="bottom">
            <p>OJUS 2K25 OJUS 2K25 OJUS 2K25 OJUS 2K25</p>
          </div> */}
          <div className="image">

            <a href="/sports">
              <div className="card">
                <div className="wrapper">
                  <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735326121/New%20Sports%20Card/lxftae2qetdufx20sxch.png" className="cover-image" alt="Dark Rider Cover" />
                </div>
              </div>
            </a>
            <a>
              <div className="card">
                <div className="wrapper">
                  <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735326864/New%20Sports%20Card/n35lti0pf4q82rdece7x.png" className="cover-image" alt="Dark Rider Cover" />
                </div>
              </div>
            </a>
          </div>
          {/* <div className="right">
            <p>OJUS - 2k25</p>
          </div> */}
          {/* <div className="top">
            <p>OJUS 2K25 OJUS 2K25 OJUS 2K25 OJUS 2K25</p>
          </div> */}
        </div>
      </div>

<div id="page2" ref={page2Ref}>
{/*         <div className="elem">
          <h2>Festivals</h2>
          <div className="moving">
            <div className="blur" />
            <div className="moving-in">
              <h5>Click Me</h5>
            </div>
          </div>
        </div> */}

        <div className="elem" data-video="https://res.cloudinary.com/dyhby7bo9/video/upload/v1735339641/u5sbqiadvdhqs4u34tey.mp4">
          <h2>Sports</h2>
        </div>
        <div className="elem">
          <h2>Culturals</h2>
          <h6>Coming Soon</h6>
        </div>

{/*         <div className="elem" data-video={video}>
          <h2>Cultural</h2>
          <div className="moving">
            <div className="blur" />
            <div className="moving-in">
              <h5>Demo text</h5>
            </div>
          </div>
        </div> */}
{/* 
        <div className="elem" data-video="./val.mp4">
          <h2>Ghanekar</h2>
          <div className="moving">
            <div className="blur" />
            <div className="moving-in">
              <h5>Demo text</h5>
            </div>
          </div>
        </div> */}
      </div>

      <div id="page3">
     <MDBContainer fluid style={{ padding: '80px' }}>
      <MDBRow>
        {/* Column 1 */}
        <MDBCol lg={4} md={12} className="mb-4 mb-lg-0">
          <img
            src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735046560/OJUSPHOTOS/og0pjwvdvxyexv1i7d6s.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />
          <img
            src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735046558/OJUSPHOTOS/xlnaenmf6qjww2kbekz8.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Wintry Mountain Landscape"
          />
        </MDBCol>

        {/* Column 2 */}
        <MDBCol lg={4} md={12} className="mb-4 mb-lg-0">
          <img
            src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735046553/OJUSPHOTOS/mi3xvd1i9frvbna10rsk.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Mountains in the Clouds"
          />
          <img
            src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735043375/OJUSPHOTOS/wp6ctwtgewbvwa3ntozw.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />
        </MDBCol>

        {/* Column 3 */}
        <MDBCol lg={4} md={12} className="mb-4 mb-lg-0">
          <img
            src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735046549/OJUSPHOTOS/djwmsxqi2syeykafoq8o.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Waves at Sea"
          />
          <img
            src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735046740/OJUSPHOTOS/o23zbmisbgyq92puzmj1.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Yosemite National Park"
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
      </div>

      <footer className="footer">
        <div className="text-center p-3">
          <h7 className="text-body">
           <a href="https://ojus-web-dev.vercel.app/" style={{textDecoration:'none', color:'white'}} >OJUS WebDev 2k25❤️</a>
          </h7>
        </div>
      </footer>
    </div>
  );
};

export default Index;
