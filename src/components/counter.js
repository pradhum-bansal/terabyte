import React from "react";
import school from '../assets/images/school.svg';
import laboratory from '../assets/images/laboratory.svg';
import hospital from '../assets/images/hospital.svg';


const CARDS = [
  {
    image: school,
    heading: "School",
  },
  {
    image: hospital,
    heading: "Hospital",
  },
  {
    image: laboratory,
    heading: "laboratories",
  },
];

const Counter = () => {
    return (
      <div className="counter_cards_container">
        {CARDS.map((item, index) => (
          <div className="card">
            <div className="image">
              <img src={item.image} alt="abc" />
            </div>
            <div className="counter">0</div>
            <div className="heading">{item.heading}</div>
          </div>
        ))}
      </div>
    );
}

export default Counter;