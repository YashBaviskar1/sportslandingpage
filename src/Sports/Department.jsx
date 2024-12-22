import React from 'react';
import aimlsa from "../assets/aimlsa.png";
import csa from "../assets/csa.png";
import dsa from "../assets/dsa.png";
import itsa from "../assets/itsa.png";
import MECH from "../assets/MESA logo.png";
import './Department.css';
const LogoFlexbox = () => {
  return (
    <div className="department" style={{ 
      display: 'flex', 
      justifyContent: 'space-around',
      width:"100%",
      height:"300px",
      flexWrap:"wrap",
      alignItems: 'center', 
      backgroundColor: 'black', 
      borderRadius:"45px",
      margin:"auto",
    }}>
      <img src={aimlsa} alt="Logo 1" style={{ width: '130px', height: 'auto' }} />
      <img src={csa} alt="Logo 2" style={{ width: '130px', height: 'auto' }} />
      <img src={dsa} alt="Logo 3" style={{ width: '130px', height: 'auto' }} />
      <img src={itsa} alt="Logo 4" style={{ width: '130px', height: 'auto' }} />
      <img src={MECH} alt="Logo 5" style={{ width: '130px', height: 'auto' }} />
    </div>
  );
};

export default LogoFlexbox;
