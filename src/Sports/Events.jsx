import React, { useState } from 'react';
import './Events.css';
import sport1 from "../assets/BADMINTON.png";
import sport2 from "../assets/FOOTBALL.png";
import sport3 from "../assets/VOLLEYBALL.png";
import sport5 from "../assets/BOXCRICKET.png";
import sport6 from "../assets/CARROM2.png";
import sport7 from "../assets/CARROM.png";
import sport8 from "../assets/TABLETENNIS.png";
import sport9 from "../assets/TABLETENNIS2.png";
import sport10 from "../assets/CHESS.png";
import sport11 from "../assets/BADMINTON2.png";
import sport12 from "../assets/THROWBALL.png";


const Events = () => {
  const [selectedDay, setSelectedDay] = useState('day1');

  const eventImages = {
    day1: [
      sport5,
      sport2,
    ],
    day2: [
   sport2,
   sport12,
   sport3,
   sport1,
    ],
    day3: [
      sport1,
      sport5,
    ],
    day4: [
     sport11,
     sport9,
     sport10
    ],
    day5: [
   sport6,
   sport5,
   sport3,
    ],
  };

  return (
    <div className="event-tabs">
      <div className="tabs">
        {['day1', 'day2', 'day3', 'day4', 'day5'].map((day) => (
          <button
            key={day}
            className={`tab ${selectedDay === day ? 'active' : ''}`}
            onClick={() => setSelectedDay(day)}
          >
            {day}
          </button>
        ))}
      </div>
      <div className="image-container">
        {eventImages[selectedDay].map((img, index) => (
          <img key={index} src={img} alt={`Event for ${selectedDay}`} />
        ))}
      </div>
    </div>
  );
};

export default Events;
