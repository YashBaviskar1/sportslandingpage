import React, { useState } from 'react';
import './box_cricket.css';
import { Link } from 'react-router-dom'; // Import Link to create navigation links

function UnifiedContainer() {
  const [selectedContent, setSelectedContent] = useState('details'); // Default content is "Details"
  const [activeLink, setActiveLink] = useState('details'); // To track the active link

  const content = {
    details: {
      date: "30th December",
      venue: "Ground",
      duration: "12-14 hours",
      glimpses: "YouTube Link",
    },
    rules: {
      Team: "6-8 players per side.",
      Misconduct: "Penalties for time delays or unsporting behavior.",
      Umpire_Decision: "Umpire’s decision is final. Arguing with the umpire is prohibited and may result in penalties.",
    },
    contact: {
      Head: "Lucky",
      Mobile: "9670240625",
      CoHead: "abc",
      CoHeadMobile: "9670240625",
    },
  };

  const renderContent = () => {
    const selectedData = content[selectedContent];
    const contentElements = [];

    if (selectedContent === 'details') {
      contentElements.push(
        React.createElement('p', {}, React.createElement('strong', {}, 'Date: '), selectedData.date),
        React.createElement('p', {}, React.createElement('strong', {}, 'Duration: '), selectedData.duration),
        React.createElement('p', {}, React.createElement('strong', {}, 'Venue: '), selectedData.venue),
        React.createElement(
          'p',
          {},
          React.createElement('strong', {}, 'Glimpses: '),
          React.createElement('a', { href: 'https://www.youtube.com/', target: '_blank', rel: 'noopener noreferrer' }, selectedData.glimpses)
        )
      );
    } else if (selectedContent === 'rules') {
      Object.entries(selectedData).forEach(([key, value]) => {
        contentElements.push(
          React.createElement('p', { key }, React.createElement('strong', {}, key.replace(/_/g, ' ') + ': '), value)
        );
      });
    } else if (selectedContent === 'contact') {
      contentElements.push(
        React.createElement('p', {}, React.createElement('strong', {}, 'Head: '), selectedData.Head),
        React.createElement('p', {}, React.createElement('strong', {}, 'Mobile: '), selectedData.Mobile),
        React.createElement('p', {}, React.createElement('strong', {}, 'Volunteer: '), selectedData.CoHead),
        React.createElement('p', {}, React.createElement('strong', {}, 'Volunteer: '), selectedData.CoHeadMobile)
      );
    }

    return contentElements;
  };

  const handleLinkClick = (contentType) => {
    setSelectedContent(contentType);
    setActiveLink(contentType);
  };

  return React.createElement(
    'div',
    { className: 'single-container' },
    React.createElement(
      'div',
      { className: 'header-section' },
      React.createElement('h1', { className: 'title' }, 'Box Cricket'),
      React.createElement(
        'p',
        { className: 'description' },
        'Experience the thrill of cricket in a compact and exciting format. Box Cricket combines strategy and fun for an unforgettable sporting event.'
      )
    ),
    React.createElement(
      'div',
      { className: 'main-content' },
      React.createElement(
        'div',
        { className: 'left-section' },
        React.createElement('img', { src: "https://res.cloudinary.com/dyhby7bo9/image/upload/v1734699264/OJUSPHOTOS/rbhv5gcw8xyi2r5bmmmj.png", alt: 'Logo', className: 'logo' }),
        React.createElement('button', { className: 'register-btn' }, 'Register')
      ),
      React.createElement(
        'div',
        { className: 'right-section' },
        React.createElement(
          'div',
          { className: 'navigation' },
          React.createElement(Link, {
            to: '/',
            onClick: () => handleLinkClick('details'),
            className: activeLink === 'details' ? 'active' : ''
          }, 'Details'),
          React.createElement(Link, {
            to: '/rules',
            onClick: () => handleLinkClick('rules'),
            className: activeLink === 'rules' ? 'active' : ''
          }, 'Rules'),
          React.createElement(Link, {
            to: '/contact-us',
            onClick: () => handleLinkClick('contact'),
            className: activeLink === 'contact' ? 'active' : ''
          }, 'Contact Us')
        ),
        React.createElement(
          'div',
          { className: 'content-box' },
          React.createElement(
            'div',
            { className: 'content-details' },
            renderContent()
          )
        )
      )
    )
  );
}

export default UnifiedContainer;
