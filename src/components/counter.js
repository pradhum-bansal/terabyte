import React, { useEffect, useState } from "react";
import school from '../assets/images/school.svg';
import laboratory from '../assets/images/laboratory.svg';
import hospital from '../assets/images/hospital.svg';


const CARDS = [
  {
    image: school,
    heading: "School",
    counter: 20,
  },
  {
    image: hospital,
    heading: "Hospital",
    counter: 40,
  },
  {
    image: laboratory,
    heading: "laboratories",
    counter: 60,
  },
];

function CounterApp({ fixedValue }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < fixedValue) {
        setCount(count + 1);
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [count, fixedValue]);

  return (
    <div>
      <span>{count}+</span>
    </div>
  );
}

const Counter = () => {
    return (
      <div className="counter_cards_container">
        {CARDS.map((item, index) => (
          <div className="card">
            <div className="image">
              <img src={item.image} alt="abc" className="counter_image" />
            </div>
            <div className="counter"><CounterApp fixedValue={item.counter}/></div>
            <div className="heading">{item.heading}</div>
          </div>
        ))}
      </div>
    );
}
export default Counter;