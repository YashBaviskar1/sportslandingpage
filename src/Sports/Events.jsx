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
            <Link to="/box-cricket">
              <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735146448/Sports%20Cards/r6oetkincye0kvrdangh.png" alt="Cricket" />
            </Link>
            
            <Link to="/box-cricket">
              <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735114391/OJUSPHOTOS/txhagfnx2aopmb6xmeod.png" alt="Tug of War" />
            </Link>
          </div>
        )}
        {selectedDay === 'day2' && (
          <div>
            <Link to="/box-cricket">
              <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735114393/OJUSPHOTOS/r00itn3tjc2xqe94egmd.png" alt="Football" />
            </Link>
            <Link to="/box-cricket">
              <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1734699286/OJUSPHOTOS/klwengfb45tuk7enfz85.png" alt="Dodgeball" />
            </Link>
            <Link to="/box-cricket">
              <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1734699286/OJUSPHOTOS/klwengfb45tuk7enfz85.png" alt="Volleyball" />
            </Link>
            <Link to="/box-cricket">
              <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735114391/OJUSPHOTOS/txhagfnx2aopmb6xmeod.png" alt="Tug of War(Girls)" />
            </Link>
          </div>
        )}
        {selectedDay === 'day3' && (
          <div>
            <Link to="/box-cricket">
              <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1734699263/OJUSPHOTOS/tv4uivtvvrr5ipzcc7nc.png" alt="Kabbadi" />
            </Link>
            <Link to="/box-cricket">
              <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1734699264/OJUSPHOTOS/rbhv5gcw8xyi2r5bmmmj.png" alt="Box-Cricket(Girls)" />
            </Link>
          </div>
        )}
        {selectedDay === 'day4' && (
          <div>
            <Link to="/box-cricket">
              <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1734699263/OJUSPHOTOS/tv4uivtvvrr5ipzcc7nc.png" alt="Badminton" />
            </Link>
            <Link to="/box-cricket">
              <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735114043/OJUSPHOTOS/gp0dmtn5dsddcllhedm9.png" alt="Table Tennis" />
            </Link>
            <Link to="/box-cricket">
              <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735114067/OJUSPHOTOS/ezhcy7gjx1kurg34lwj5.png" alt="Chess" />
            </Link>
          </div>
        )}
        {selectedDay === 'day5' && (
          <div>
            <Link to="/box-cricket">
              <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735114166/OJUSPHOTOS/a8sjee5xjohr0cetmdgq.png" alt="Carrom" />
            </Link>
            <Link to="/box-cricket">
              <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1734699264/OJUSPHOTOS/rbhv5gcw8xyi2r5bmmmj.png" alt="Box Cricket (boys)" />
            </Link>
            <Link to="/box-cricket">
              <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735114536/OJUSPHOTOS/qbgrh0cgoutdh7c3eokp.png" alt="Throwball (girls)" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
