import React from 'react';
import aimlsa from "../assets/aimlsa.png";
import csa from "../assets/csa.png";
import dsa from "../assets/dsa.png";
import itsa from "../assets/itsa.png";
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
      <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1734699277/OJUSPHOTOS/gvuiwwildkcuc36sdtnz.png" alt="Logo 5" style={{ width: '130px', height: 'auto' }} />
      <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735038785/cu8hlpt8rqt5o4iviahc.png" alt="Logo 5" style={{ width: '130px', height: 'auto' }} />
    </div>
  );
};

export default LogoFlexbox;
