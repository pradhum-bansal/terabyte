
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Ceo from '../assets/images/CEO.png'
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
          prevIcon={<img src={left} alt="left" />}
          nextIcon={<img src={right} alt="left" />}
        >
          <Carousel.Item>
            <div className="d-flex row">
              <div className="col-6 px-0" style={{ background: "#4C94FF" }}>
                <div className="team_heading">Meet our Team</div>
                <div className="image">
                  <img src={Ceo} width={320} height={500} alt="." />
                </div>
              </div>
              <div className="col-6 right_container">
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
        </Carousel>
      </div>
    );
}

export default TeamCarousel;