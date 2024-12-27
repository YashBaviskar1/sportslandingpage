import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'; // Import Cookies for user data management
import './box_cricket.css';

function UnifiedContainer() {
  const { sport, section } = useParams(); // Get 'sport' and 'section' from URL
  const [content, setContent] = useState({});
  const [error, setError] = useState(null);
  const [logo, setLogo] = useState('');
  const [user, setUser] = useState(null); // User state for authentication


  const [genderToggle, setGenderToggle] = useState(true); // State for Girls/Boys toggle
  const [typeToggle, setTypeToggle] = useState(true); // State for Singles/Doubles toggle
  const navigate = useNavigate();

  const handleGenderToggle = () => {
    setGenderToggle((prev) => !prev);
  };

  const handleTypeToggle = () => {
    setTypeToggle((prev) => !prev);
  };

  // Fetch User Data from Cookies
  useEffect(() => {
    const userData = Cookies.get("userData");
    if (userData) {
      setUser(JSON.parse(userData)); 
    }
  }, []);

  // Fetch Sports Data
  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(`http:///localhost:5000/sports/${sport}/${section}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log("data : ", data)
        console.log("data : ", data);
  
        // Access the specific sport details for overarm-cricket(boys)
        const sportDetails = data.data[`${sport}`];
  
        // Log specific details (head, head_mobile_no, volunteer, etc.)
        console.log("Head:", sportDetails.head);
        console.log("Head Mobile No:", sportDetails.head_mobile_no);
        console.log("Volunteer:", sportDetails.volunteer);
        console.log("Volunteer Mobile No:", sportDetails.volunteer_mobile_no);



        setLogo(data.logo); 
        setContent(sportDetails);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchContent();
  }, [sport, section]);

  // Submit Registration Form
  const submitForm = async () => {
    const data = {
      user,
      sport,
    };
    console.log(data)
    try {
      const response = await fetch('http://127.0.0.1:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'include',
      });

      const responseData = await response.json();

      if (!response.ok) {
        alert(responseData.message || 'Failed to register');
      } else {
        console.log(data)
        alert(`Registered successfully for ${sport}`);
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('An error occurred during registration');
    }
  };

  // Participate Button Handler
  const participate = () => {
    if (!user) {
      alert('You need to be logged in first');
    } else {
      submitForm();
    }
  };

  // Render Dynamic Content
  const RenderContent = () => {
    if (error) {
      return <p>Error: {error}</p>;
    }
  
    if (section === 'details') {
      return (
        <>
          <p><strong>Date:</strong> {content?.date}</p>
          <p><strong>Venue:</strong> {content?.venue}</p>
          <p><strong>Duration:</strong> {content?.duration}</p>
          <p>
            <strong>Glimpses:</strong>
            <a href={content?.glimpses} target="_blank" rel="noopener noreferrer">
              YouTube Link
            </a>
          </p>
        </>
      );
    } else if (section === 'rules') {
      const rulesList = content?.rules ? content.rules.split('.').filter(rule => rule.trim() !== '') : [];
      return (
        <>
          <p><strong>Team:</strong> {content?.team}</p>
          <p><strong>Rules:</strong></p>
          <ul>
            {rulesList.length > 0 ? (
              rulesList.map((rule, index) => <li key={index}>{rule.trim()}</li>)
            ) : (
              <li>No rules available</li>
            )}
          </ul>
        </>
      );
    } else if (section === 'contact') {
      return (
        <>
          <p><strong>Head:</strong> {content?.head}</p>
          <p><strong>Mobile:</strong> {content?.head_mobile_no}</p>
          <p><strong>Volunteers:</strong> {content?.volunteer}</p>
          <p><strong>Volunteer Mobile-No:</strong> {content?.volunteer_mobile_no}</p>
        </>
      );
    } else {
      return <p>No content available.</p>;
    }
  };
  
  return (
    <div className="single-container">
      {/* Navbar */}
      <nav className="navbar">
        <button className="navbar-button" onClick={() => navigate('/sports')}>Back</button>
      </nav>
  
      {/* Header Section */}
      <div className="header-section">
        <h1 className="title">{sport.toUpperCase()}</h1>
        <p className="description">
          Experience the thrill of {sport} in a compact and exciting format.
        </p>
      </div>
  
      {/* Main Content */}
      <div className="main-content">
        {/* Left Section */}
        <div className="left-section">
          <img src={logo} alt={`${sport} Logo`} className="logo" />
          <button className="register-btn" onClick={participate}>
            {user ? 'Register' : 'Login to Register'}
          </button>
  
          {/* Toggle Buttons */}
          <div className="toggle-buttons">
            {/* Gender Toggle Switch */}
            <div
              className={`toggle-switch ${genderToggle ? 'on' : 'off'}`}
              onClick={handleGenderToggle}
            >
              <div className="toggle-handle"></div>
              <div className="toggle-text">
                {genderToggle ? 'Girls' : 'Boys'}
              </div>
            </div>
  
            {/* Type Toggle Switch */}
            <div
              className={`toggle-switch ${typeToggle ? 'on' : 'off'}`}
              onClick={handleTypeToggle}
            >
              <div className="toggle-handle"></div>
              <div className="toggle-text">
                {typeToggle ? 'Singles' : 'Doubles'}
              </div>
            </div>
          </div>
        </div>
  
        {/* Right Section */}
        <div className="right-section">
          {/* Navigation Links */}
          <div className="navigation">
            <Link
              to={`/${sport}/details`}
              onClick={() => handleLinkClick('details')}
              className={section === 'details' ? 'active' : ''}
            >
              Details
            </Link>
            <Link
              to={`/${sport}/rules`}
              onClick={() => handleLinkClick('rules')}
              className={section === 'rules' ? 'active' : ''}
            >
              Rules
            </Link>
            <Link
              to={`/${sport}/contact`}
              onClick={() => handleLinkClick('contact')}
              className={section === 'contact' ? 'active' : ''}
            >
              Contact Us
            </Link>
          </div>
  
          {/* Content Box */}
          <div className="content-box">
            <div className="content-details">
              {RenderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
  export default UnifiedContainer;
  
