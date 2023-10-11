import React from "react";
import Carousel from "react-bootstrap/Carousel";
import carouselImg from '../assets/images/Stock.png';
// import ExampleCarouselImage from "components/ExampleCarouselImage";


const CarouselComponent = () => {
    return (
      <div className="carousel-container">
        <Carousel data-bs-theme="dark" variant="dark" controls={false}>
          <Carousel.Item>
            <div className="d-flex row">
              <div className="col-6">
                <img src={carouselImg} width={500} height={500} alt="." />
              </div>
              <div className="col-6 m-auto">
                <div className="carousel_item_heading">
                  Lorem ipsum dolor sit amet consectetur.
                </div>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet consectetur. Ut orci nulla nisl
                    rhoncus pellentesque.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur. Ut orci nulla nisl
                    rhoncus pellentesque. Lorem ipsum dolor sit amet
                    consectetur. Ut orci nulla nisl rhoncus pellentesque.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur. Ut orci nulla nisl
                    rhoncus pellentesque. Lorem ipsum dolor sit amet
                    consectetur. Ut orci nulla nisl rhoncus pellentesque. Lorem
                    ipsum dolor sit amet consectetur. Ut orci nulla nisl rhoncus
                    pellentesque.
                  </li>
                </ul>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex row">
              <div className="col-6">
                <img src={carouselImg} width={500} height={500} alt="." />
              </div>
              <div className="col-6 m-auto">
                <div className="carousel_item_heading">
                  Lorem ipsum dolor sit amet consectetur.
                </div>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet consectetur. Ut orci nulla nisl
                    rhoncus pellentesque.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur. Ut orci nulla nisl
                    rhoncus pellentesque. Lorem ipsum dolor sit amet
                    consectetur. Ut orci nulla nisl rhoncus pellentesque.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur. Ut orci nulla nisl
                    rhoncus pellentesque. Lorem ipsum dolor sit amet
                    consectetur. Ut orci nulla nisl rhoncus pellentesque. Lorem
                    ipsum dolor sit amet consectetur. Ut orci nulla nisl rhoncus
                    pellentesque.
                  </li>
                </ul>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex row">
              <div className="col-6">
                <img src={carouselImg} width={500} height={500} alt="." />
              </div>
              <div className="col-6 m-auto">
                <div className="carousel_item_heading">
                  Lorem ipsum dolor sit amet consectetur.
                </div>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet consectetur. Ut orci nulla nisl
                    rhoncus pellentesque.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur. Ut orci nulla nisl
                    rhoncus pellentesque. Lorem ipsum dolor sit amet
                    consectetur. Ut orci nulla nisl rhoncus pellentesque.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur. Ut orci nulla nisl
                    rhoncus pellentesque. Lorem ipsum dolor sit amet
                    consectetur. Ut orci nulla nisl rhoncus pellentesque. Lorem
                    ipsum dolor sit amet consectetur. Ut orci nulla nisl rhoncus
                    pellentesque.
                  </li>
                </ul>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    );
}

export default CarouselComponent;