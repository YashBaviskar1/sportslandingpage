import React, { useEffect, useState, useRef } from 'react';

import './Council.css'; // assuming heads.css is in your src folder
const Council = () => {
    
  const [tab, setTab] = useState(0); // Tracks the active tab

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };


  // Tab content for each year
  const tabsContent = [
    {
      year: '2024',
      members: [
        { name: 'Razzaq Shikalgar', role: 'President', image: 'https://res.cloudinary.com/dyhby7bo9/image/upload/v1735382340/Razzaq_cultural_secretary_-removebg-preview_qsxdxb.png' },
        { name: 'Ansh Chavan', role: 'General Secretary', image: 'https://res.cloudinary.com/dyhby7bo9/image/upload/v1735291246/COUNCIIL/nym4zo96a6e3nonik4za.png' },
        
      ],
      members1: [
        { name: 'Dravesh Jain', role: 'Cultural Secretary', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png' },
        { name: 'Richa Thanekar', role: 'Ladies Representative', image: 'https://res.cloudinary.com/dyhby7bo9/image/upload/v1735291246/COUNCIIL/iktqglo0g2dxrdklbek6.png' },
        { name: 'Dhurv Sawant', role: 'Sports Representative', image: 'https://res.cloudinary.com/dyhby7bo9/image/upload/v1735291245/COUNCIIL/f6myoq696fyjgnyao5wt.png' },
      ],
      members2: [
        { name: 'Harsh Borge', role: 'Joint Cultural Secretary', image: 'https://res.cloudinary.com/dyhby7bo9/image/upload/v1735291246/COUNCIIL/d4l8vbotxl6oo3nqtx7u.png' },
        { name: 'Ankit Chavan', role: 'Joint Cultural Secretary', image: 'https://res.cloudinary.com/dyhby7bo9/image/upload/v1735291245/COUNCIIL/adxsv86aq2i8a9i9rc8h.png' },
        { name: 'Shlok Kute', role: 'Joint Cultural Secretary', image: 'https://res.cloudinary.com/dyhby7bo9/image/upload/v1735292281/COUNCIIL/qgycgquemdjptj0ko1vx.png' },
        { name: 'Yogini Yadav', role: 'Joint Cultural Secretary', image: 'https://res.cloudinary.com/dyhby7bo9/image/upload/v1735291246/COUNCIIL/ycjjgqccrspctkm5ijxq.png' },
      ],
      members3: [
        { name: 'Aditya Dandavate', role: 'Joint Sports Secretary', image: 'https://res.cloudinary.com/dyhby7bo9/image/upload/v1735291247/COUNCIIL/izanqe8npnkgx30srdtl.png' },
        { name: 'Saniya Dopavkar', role: 'Joint Sports Secretary', image: 'https://res.cloudinary.com/dyhby7bo9/image/upload/v1735291245/COUNCIIL/yyfdm0mi6zauxgym7036.png' },
        { name: 'Nishigandha Sawant', role: 'Joint Sports Secretary', image: 'https://res.cloudinary.com/dyhby7bo9/image/upload/v1735291246/COUNCIIL/jabona1gumu7hrmis4a2.png' },
        { name: 'Hitesh Dubey', role: 'Joint Sports Secretary', image: 'https://res.cloudinary.com/dyhby7bo9/image/upload/v1735291246/COUNCIIL/xtywscn0iiw9cauc9mme.png' },
      ]
    },
    {
      year: '2023',
      members: [
        { name: 'Anuj Shinde', role: 'President', image: 'https://res.cloudinary.com/dyhby7bo9/image/upload/v1735379190/Anuj_shinde_president-removebg-preview_h8yhku.png' },
        { name: 'Anirudh Sawant', role: 'General Secretary', image: 'https://res.cloudinary.com/dyhby7bo9/image/upload/v1735379190/Anirudh_general_secretary_-removebg-preview_yqapzq.png' },
        
      ],
      members1: [
        { name: 'Razzaq Shikalgar', role: 'Cultural Secretary', image: 'https://res.cloudinary.com/dyhby7bo9/image/upload/v1735382340/Razzaq_cultural_secretary_-removebg-preview_qsxdxb.png' },
        { name: 'Ria Gawai', role: 'Ladies Representative', image: 'https://res.cloudinary.com/dyhby7bo9/image/upload/v1735379189/Riya_gawai_lr-removebg-preview_kyxymw.png' },
        { name: 'Soham Palav', role: 'Sports Representative', image: 'https://res.cloudinary.com/dyhby7bo9/image/upload/v1735379190/Soham_palav_sports_secretary_-removebg-preview_yrdosf.png' },
      ],
      members2: [
        { name: 'Ansh Chavan', role: 'Joint Cultural Secretary', image: 'https://res.cloudinary.com/dyhby7bo9/image/upload/v1735291246/COUNCIIL/nym4zo96a6e3nonik4za.png' },
        { name: 'Shravani Kulkarni', role: 'Joint Cultural Secretary', image: 'https://res.cloudinary.com/dyhby7bo9/image/upload/v1735379189/Shravani_kulkarni_joint_cultural_secretary_-removebg-preview_rtrjpk.png' },
        { name: 'Alisha Singhvi', role: 'Joint Cultural Secretary', image: 'https://res.cloudinary.com/dyhby7bo9/image/upload/v1735379189/Alisha_singhvi_joint_cultural_secretary_-removebg-preview_u71abc.png' },
        { name: 'Adrian Gilbert', role: 'Joint Cultural Secretary', image: 'https://res.cloudinary.com/dyhby7bo9/image/upload/v1735379190/Adrian_gilbert_joint_cultural_secretary_-removebg-preview_qpaefz.png' },
      ],
      members3: [
        { name: 'Sanket Sarode', role: 'Joint Sports Secretary', image: 'https://res.cloudinary.com/dyhby7bo9/image/upload/v1735379189/Sanket_sarode_joint_sports_secretary_-removebg-preview_bq0vxb.png' },
        { name: 'Sharayu Mahajan', role: 'Joint Sports Secretary', image: 'https://res.cloudinary.com/dyhby7bo9/image/upload/v1735379190/Sharayu_mahajan_joint_sports_secretary_-removebg-preview_entgoh.png' },
        { name: 'Amogh Dewanpelli', role: 'Joint Sports Secretary', image: 'https://res.cloudinary.com/dyhby7bo9/image/upload/v1735379189/Amogh_dewanpelli_joint_sports_secretary_-removebg-preview_maxpur.png' },
        { name: 'Om Kumbhar', role: 'Joint Sports Secretary', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/krish_vrpnwb.png' },
      ]
    },
    // {
    //   year: '2022',
    //   members: [
    //     { name: 'Samaira Khan', role: 'Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/krish_vrpnwb.png' },
    //     { name: 'Kabir Singh', role: 'Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/krish_vrpnwb.png' },
        
    //   ],
    //   members1: [
    //     { name: 'Dravesh Jain', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png' },
    //     { name: 'Ananya Verma', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/krish_vrpnwb.png' },
    //     { name: 'Ananya Verma', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/krish_vrpnwb.png' },
    //   ],
    //   members2: [
    //     { name: 'Dravesh Jain', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png' },
    //     { name: 'Dravesh Jain', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png' },
    //     { name: 'Dravesh Jain', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png' },
    //     { name: 'Ananya Verma', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/krish_vrpnwb.png' },
    //   ],
    //   members3: [
    //     { name: 'Dravesh Jain', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png' },
    //     { name: 'Dravesh Jain', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png' },
    //     { name: 'Dravesh Jain', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png' },
    //     { name: 'Ananya Verma', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/krish_vrpnwb.png' },
    //   ]
    // },
  ];

  return (
    <div>
      {/* Navigation */}
      
      {/* Tabs Navigation */}
      <div className="tabs">
        {tabsContent.map((tabItem, index) => (
          <button
            key={index}
            className={`tab-button ${tab === index ? 'active' : ''}`}
            onClick={() => setTab(index)}
          >
            {tabItem.year}
          </button>
        ))}
      </div>

      {/* Team Section */}
      <section id="team">
        {tabsContent[tab].members.map((member, index) => (
          <div className="team-box" key={index}>
            <div className="t-b-img">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="t-b-text">
              <strong>{member.name}</strong>
              <strong>{member.role}</strong>
            </div>
          </div>
        ))}
      </section>

      
      <section id="team">
        {tabsContent[tab].members1.map((member, index) => (
          <div className="team-box" key={index}>
            <div className="t-b-img">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="t-b-text">
              <strong>{member.name}</strong>
              <strong>{member.role}</strong>
            </div>
          </div>
        ))}
      </section>

      <section id="team">
        {tabsContent[tab].members2.map((member, index) => (
          <div className="team-box" key={index}>
            <div className="t-b-img">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="t-b-text">
              <strong>{member.name}</strong>
              <strong>{member.role}</strong>
            </div>
          </div>
        ))}
      </section>

      <section id="team">
        {tabsContent[tab].members3.map((member, index) => (
          <div className="team-box" key={index}>
            <div className="t-b-img">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="t-b-text">
              <strong>{member.name}</strong>
              <strong>{member.role}</strong>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <section className="madeWithLove">
        <h5>
          Made with ❤️ by <a href="https://ojus-web-dev.vercel.app/">Ojus Webdev</a>
        </h5>
      </section>

      {/* Scroll to top button */}
      <div onClick={scrollToTop} className="scrollTop">
        <i className="fa-solid fa-arrow-up"></i>
      </div>
      
    </div>
    
  );
};

export default Council;
