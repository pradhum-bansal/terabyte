import React from 'react';
import bgimg from '../assets/images/background-image.svg';
import { Carousel } from 'react-bootstrap';
const ServiceCards = () => {
    return (
      <Carousel data-bs-theme="dark" variant="dark" controls={false}>
        <Carousel.Item>
          <div className="service_cards_container">
            <div className="cards">
              <div
                className="card_header"
                style={{ backgroundImage: `url(${bgimg})` }}
              >
                Custom Development Software
              </div>
              <div className="card_footer">
                Discover the power of our Custom Development Software,
                meticulously crafted to suit your specific requirements,
                enabling you to streamline operations and drive innovation
              </div>
              <button className="card_button">Book a demo</button>
            </div>
            <div className="cards">
              <div
                className="card_header"
                style={{ backgroundImage: `url(${bgimg})` }}
              >
                Custom Development Software
              </div>
              <div className="card_footer">
                Discover the power of our Custom Development Software,
                meticulously crafted to suit your specific requirements,
                enabling you to streamline operations and drive innovation
              </div>
              <button className="card_button">Book a demo</button>
            </div>
            <div className="cards">
              <div
                className="card_header"
                style={{ backgroundImage: `url(${bgimg})` }}
              >
                Custom Development Software
              </div>
              <div className="card_footer">
                Discover the power of our Custom Development Software,
                meticulously crafted to suit your specific requirements,
                enabling you to streamline operations and drive innovation
              </div>
              <button className="card_button">Book a demo</button>
            </div>
            <div className="cards">
              <div
                className="card_header"
                style={{ backgroundImage: `url(${bgimg})` }}
              >
                Custom Development Software
              </div>
              <div className="card_footer">
                Discover the power of our Custom Development Software,
                meticulously crafted to suit your specific requirements,
                enabling you to streamline operations and drive innovation
              </div>
              <button className="card_button">Book a demo</button>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="service_cards_container">
            <div className="cards">
              <div
                className="card_header"
                style={{ backgroundImage: `url(${bgimg})` }}
              >
                Custom Development Software
              </div>
              <div className="card_footer">
                Discover the power of our Custom Development Software,
                meticulously crafted to suit your specific requirements,
                enabling you to streamline operations and drive innovation
              </div>
              <button className="card_button">Book a demo</button>
            </div>
            <div className="cards">
              <div
                className="card_header"
                style={{ backgroundImage: `url(${bgimg})` }}
              >
                Custom Development Software
              </div>
              <div className="card_footer">
                Discover the power of our Custom Development Software,
                meticulously crafted to suit your specific requirements,
                enabling you to streamline operations and drive innovation
              </div>
              <button className="card_button">Book a demo</button>
            </div>
            <div className="cards">
              <div
                className="card_header"
                style={{ backgroundImage: `url(${bgimg})` }}
              >
                Custom Development Software
              </div>
              <div className="card_footer">
                Discover the power of our Custom Development Software,
                meticulously crafted to suit your specific requirements,
                enabling you to streamline operations and drive innovation
              </div>
              <button className="card_button">Book a demo</button>
            </div>
            <div className="cards">
              <div
                className="card_header"
                style={{ backgroundImage: `url(${bgimg})` }}
              >
                Custom Development Software
              </div>
              <div className="card_footer">
                Discover the power of our Custom Development Software,
                meticulously crafted to suit your specific requirements,
                enabling you to streamline operations and drive innovation
              </div>
              <button className="card_button">Book a demo</button>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="service_cards_container">
            <div className="cards">
              <div
                className="card_header"
                style={{ backgroundImage: `url(${bgimg})` }}
              >
                Custom Development Software
              </div>
              <div className="card_footer">
                Discover the power of our Custom Development Software,
                meticulously crafted to suit your specific requirements,
                enabling you to streamline operations and drive innovation
              </div>
              <button className="card_button">Book a demo</button>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    );
}
export default ServiceCards;