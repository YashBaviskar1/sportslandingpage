import React, { useState } from 'react';
import './Events.css';
import sport1 from "../assets/FOOTBALL.png";
import sport2 from "../assets/FOOTBALL.png";
import sport3 from "../assets/FOOTBALL.png";


const Events = () => {
  const [selectedDay, setSelectedDay] = useState('day1');

  const eventImages = {
    day1: [
      sport1,
      sport2,
      sport3,
    ],
    day2: [
   sport1,
   sport2,
   sport3,
    ],
    day3: [
      sport1,
      sport2,
      sport3,
      sport1,
    ],
    day4: [
     sport1,
     sport2,
     sport3,
    ],
    day5: [
   sport1,
   sport2,
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

