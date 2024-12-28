import React, { useState } from 'react';
import './Events.css';
import { Link } from 'react-router-dom';

const Events = () => {
  const [selectedDay, setSelectedDay] = useState('day1');

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
        {selectedDay === 'day1' && (
          <div>
            <Link to="/overarm-cricket(boys)/details">
              <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735395931/CRICKET_cwnhb7.png" alt="Cricket" />
            </Link>
            
            <Link to="/tug-of-war(boys)/details">
              <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735395938/16_tl1olq.png" alt="Tug of War" />
            </Link>
          </div>
        )}
        {selectedDay === 'day2' && (
          <div>
            <Link to="/football(boys)/details">
              <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735395937/FOOTBALL_bttcsu.png" alt="Football(Boys)" />
            </Link>
            <Link to="/throwball(girls)/details">
              <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735395942/THROWBALL_ohm9lb.png" alt="Throwball(Girls)" />
            </Link>
            <Link to="/volleyball(boys)/details">
              <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735395945/VOLLEYBALL_xyhitw.png" alt="Volleyball(Boys)" />
            </Link>
            <Link to="/tug-of-war(girls)/details">
              <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735395919/17_e8xti1.png" alt="Tug of War(Girls)" />
            </Link>
          </div>
        )}
        {selectedDay === 'day3' && (
          <div>
            <Link to="/kabbadi(boys)/details">
              <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735322455/New%20Sports%20Card/rpdabafu34vlkdqjdbbv.png" alt="Kabbadi" />
            </Link>
            <Link to="/box-cricket(girls)/details">
              <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735395931/BOX_CRICKET_2_pfr0p9.png.png" alt="Box-Cricket(Girls)" />
            </Link>
          </div>
        )}
        {selectedDay === 'day4' && (
          <div>
            <Link to="/badminton_singles(boys)/details">
              <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735395931/BOX_CRICKET_2_pfr0p9.png" alt="Badminton" />
            </Link>
            <Link to="/table-tennis-singles(boys)/details">
              <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735146430/Sports%20Cards/ha7skdj9mrrfh1gujwei.png" alt="Table Tennis" />
            </Link>
            <Link to="/chess(boys)/details">
              <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735146427/Sports%20Cards/drwfi7s3dmhjwyypgz3w.png" alt="Chess" />
            </Link>
          </div>
        )}
        {selectedDay === 'day5' && (
          <div>
            <Link to="/carrom_singles(boys)/details">
              <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735146430/Sports%20Cards/duztbixbj8tgdmnhxfw8.png" alt="Carrom" />
            </Link>
            <Link to="/box-cricket(boys)/details">
              <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735395930/BOX_CRICKET_je5j6b.png" alt="Box Cricket (boys)" />
            </Link>
            <Link to="/dodgeball(girls)/details">
              <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735395935/DODGE_BALL_uxorl7.png" alt="dodgeball(girls)" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
