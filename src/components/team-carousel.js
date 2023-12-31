
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Ceo from '../assets/images/CEO.png';
import Dp from '../assets/images/Dp.svg'
import left from "../assets/images/carousel-left.svg";
import right from "../assets/images/carousel-right.svg";

const TeamCarousel = () => {
    return (
      <div className="carousel-container-team">
        <Carousel
          data-bs-theme="dark"
          variant="dark"
          controls={true}
          indicators={false}
          prevIcon={<img src={left} className="indicator_img" alt="left" />}
          nextIcon={<img src={right} className="indicator_img" alt="left" />}
        >
          <Carousel.Item>
            <div className="d-flex row">
              <div className="col-12 col-lg-6 px-0 blue_bg">
                <div className="team_heading">Meet our Team</div>
                <div className="image">
                  <img src={Ceo} width={320} height={450} alt="." />
                </div>
              </div>
              <div className="col-12 col-lg-6 right_container">
                <div className="team_name">David Bell</div>
                <div className="team_designation">CEO</div>
                <div className="team_description">
                  Lorem ipsum dolor sit amet consectetur. Vivamus et massa
                  aliquet venenatis eget lobortis. Quisque proin aliquam mi
                  proin augue vivamus quam. Sed morbi sit amet nunc duis massa.
                  Sit morbi aliquam urna cursus nec in purus. Diam gravida
                  blandit sed pellentesque orci varius nunc consequat. At
                  facilisis eget sit curabitur amet urna odio hendrerit
                  bibendum. Eget aenean sed molestie mauris pretium faucibus
                  accumsan fringilla.
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex row">
              <div className="col-12 col-lg-6 px-0 blue_bg">
                <div className="team_heading">Meet our Team</div>
                <div className="image">
                  <img src={Dp} width={320} height={450} alt="." />
                </div>
              </div>
              <div className="col-12 col-lg-6 right_container">
                <div className="team_name">John Casey</div>
                <div className="team_designation">Designer</div>
                <div className="team_description">
                  Lorem ipsum dolor sit amet consectetur. Vivamus et massa
                  aliquet venenatis eget lobortis. Quisque proin aliquam mi
                  proin augue vivamus quam. Sed morbi sit amet nunc duis massa.
                  Sit morbi aliquam urna cursus nec in purus. Diam gravida
                  blandit sed pellentesque orci varius nunc consequat. At
                  facilisis eget sit curabitur amet urna odio hendrerit
                  bibendum. Eget aenean sed molestie mauris pretium faucibus
                  accumsan fringilla.
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    );
}

export default TeamCarousel;