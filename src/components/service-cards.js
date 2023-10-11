import React from 'react';
import bgimg from '../assets/images/background-image.svg';
const ServiceCards = () => {
    return (
      <div className="service_cards_container">
        <div className="cards">
          <div
            className="card_header"
            style={{ backgroundImage: `url(${bgimg})` }}
          >
            Custom Development Software
          </div>
          <div className="card_footer">
            Discover the power of our Custom Development Software, meticulously
            crafted to suit your specific requirements, enabling you to
            streamline operations and drive innovation
          </div>
          <button className="card_button"></button>
        </div>
        <div className="cards">
          <div
            className="card_header"
            style={{ backgroundImage: `url(${bgimg})` }}
          >
            Custom Development Software
          </div>
          <div className="card_footer">
            Discover the power of our Custom Development Software, meticulously
            crafted to suit your specific requirements, enabling you to
            streamline operations and drive innovation
          </div>
          <button className="card_button"></button>
        </div>
        <div className="cards">
          <div
            className="card_header"
            style={{ backgroundImage: `url(${bgimg})` }}
          >
            Custom Development Software
          </div>
          <div className="card_footer">
            Discover the power of our Custom Development Software, meticulously
            crafted to suit your specific requirements, enabling you to
            streamline operations and drive innovation
          </div>
          <button className="card_button"></button>
        </div>
        <div className="cards">
          <div
            className="card_header"
            style={{ backgroundImage: `url(${bgimg})` }}
          >
            Custom Development Software
          </div>
          <div className="card_footer">
            Discover the power of our Custom Development Software, meticulously
            crafted to suit your specific requirements, enabling you to
            streamline operations and drive innovation
          </div>
          <button className="card_button"></button>
        </div>
      </div>
    );
}
export default ServiceCards;