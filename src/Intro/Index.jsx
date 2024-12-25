import React, { useEffect, useRef, useState } from 'react';
import './index.css'; // Add your styles in this file
import { Link } from "react-router-dom";
import OjusLogo from '../assets/logo.ico';
import drc from '../assets/dark_rider-character.webp';
import drcover from '../assets/sportsojus.png';
import drtitle from '../assets/dark_rider-title.png';
import frcover from '../assets/force_mage-cover.jpg';
import frc from '../assets/force_mage-character.webp';
import frtitle from '../assets/force_mage-title.png';
import img from '../assets/img.jpg';
import video from '../assets/nfs2.mp4';
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
    elems.forEach((ele) => {
      ele.addEventListener('click', () => {
        const bgVideo = ele.getAttribute('data-video');
        const existingVideo = page2Ref.current.querySelector('video');

        // Remove existing video if present
        if (existingVideo) {
          existingVideo.remove();
        }

        if (bgVideo) {
          // Create a video element and set attributes
          const videoElement = document.createElement('video');
          videoElement.src = bgVideo;
          videoElement.autoplay = true;
          videoElement.loop = true;
          videoElement.muted = true;
          videoElement.style.position = 'absolute';
          videoElement.style.top = '0';
          videoElement.style.left = '0';
          videoElement.style.width = '100%';
          videoElement.style.height = '100%';
          videoElement.style.objectFit = 'cover';
          videoElement.style.zIndex = '-1';

          page2Ref.current.appendChild(videoElement);
        }
      });
    });
  }, []);

  const handleSliderClick = (index) => {
    setActiveSlider(index);
  };

  const sliderData = [
    { name: 'Mike', title: 'web3 Developer', img: { drcover } },
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
            <span className="text_button">Cultural</span>
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
            <span className="text_button">Cultural</span>
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
                  <img src={drcover} className="cover-image" alt="Dark Rider Cover" />
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
        <div className="elem">
          <h2>Festivals</h2>
          <div className="moving">
            <div className="blur" />
            <div className="moving-in">
              <h5>Click Me</h5>
            </div>
          </div>
        </div>

        <div className="elem" data-video={video}>
          <h2>Sports</h2>
          <div className="moving">
            <div className="blur" />
            <div className="moving-in">
              <h5>Demo text</h5>
            </div>
          </div>
        </div>

        <div className="elem" data-video={video}>
          <h2>Cultural</h2>
          <div className="moving">
            <div className="blur" />
            <div className="moving-in">
              <h5>Demo text</h5>
            </div>
          </div>
        </div>

        <div className="elem" data-video="./val.mp4">
          <h2>Ghanekar</h2>
          <div className="moving">
            <div className="blur" />
            <div className="moving-in">
              <h5>Demo text</h5>
            </div>
          </div>
        </div>
      </div>

      <div id="page3">
      <MDBRow style={{ padding:'80px'}}>
      <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
        <img
          src='https://mdbcdn.b-cdn.netha/img/Photos/Horizontal/Nature/4-col/img%20(73).webp'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Boat on Calm Water'
        />
        <img
          src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Wintry Mountain Landscape'
        />
      </MDBCol>

      <MDBCol lg={4} className='mb-4 mb-lg-0'>
        <img
          src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Mountains in the Clouds'
        />

        <img
          src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Boat on Calm Water'
        />
      </MDBCol>

      <MDBCol lg={4} className='mb-4 mb-lg-0'>
        <img
          src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Waves at Sea'
        />

        <img
          src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Yosemite National Park'
        />
      </MDBCol>
    </MDBRow>
      </div>

      <footer className="footer">
        <div className="text-center p-3">
          <h7 className="text-body">
            OJUS WebDev 2k25❤️
          </h7>
        </div>
      </footer>
    </div>
  );
};

export default Index;
