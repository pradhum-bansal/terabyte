import React, { useState } from "react";
import arrow from '../assets/images/arrow.svg'
import Counter from "../components/counter";
import CarouselComponent from "../components/carousel";
import ServiceCards from "../components/service-cards";
import logo9 from '../assets/images/Logos-8.svg';
import logo1 from "../assets/images/Logos.svg";
import logo8 from "../assets/images/Logos-7.svg";
import logo3 from "../assets/images/Logos-2.svg";
import logo2 from "../assets/images/Logos-1.svg";
import logo4 from "../assets/images/Logos-3.svg";
import logo5 from "../assets/images/Logos-5.svg";
import logo6 from "../assets/images/Logos-4.svg";
import logo7 from "../assets/images/Logos-6.svg";
import hero from '../assets/images/Hero-img.svg';
import hero2 from '../assets/images/Hero-img-2.svg';
import hero1 from '../assets/images/Hero-img-1.svg';
import video from '../assets/images/video.mp4'
import TeamCarousel from "../components/team-carousel";
import testimonialbg from '../assets/images/testimonial_bg.svg';
import { useNavigate } from "react-router";
import { TestimonialCards } from "../const";
import styles from './home.module.scss';


const Home = () => {
  const navigate = useNavigate();
  const [testimonialCount, setTestimonialCount] = useState(0)
    return (
      <div className="home">
        <span className={styles.anchor} id="1"></span>
        <div className={styles.video_landing_container}>
          <div className={styles.hero_section}>
            <div className={styles.left_section}>
              <div className={styles.heading}>
                Terabyte Innovations: Pioneering Software for a Connected Future
              </div>
              <div className={styles.sub_heading}>
                Terabyte Innovations is at the forefront of software solutions,
                particularly excelling in the development of smart hospital and
                school management systems, CRM, and laboratory management
                software.
                <button
                  className={styles.demo_button}
                  onClick={() => navigate("/request-demo")}
                >
                  Book a Demo
                  <img src={arrow} alt="arrow" />
                </button>
              </div>
            </div>
          </div>
          <div className={styles.video_container}>
            <video autoPlay muted loop id="background-video">
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className={styles.video_container_overlay}></div>
        </div>
        <div>
          <Counter />
        </div>
        <div>
          <CarouselComponent />
        </div>
        <span className={styles.anchor} id="2"></span>
        <div className="our_services_container">
          <div className="heading">OUR SERVICES</div>
          <ServiceCards />
        </div>
        <span className={styles.anchor} id="3"></span>
        <div className="client_container d-flex">
          <div className="col-12 col-md-4 left_container">
            Empowering Success Together: Partnering with Countless Clients to
            Achieve Remarkable Milestones
          </div>
          <div className="col-12 col-md-8 d-flex justify-content-between flex-wrap right_container">
            <div className="col-4 py-5 m-auto">
              <img src={logo1} alt="logo1" />
            </div>
            <div className="col-4 py-5 m-auto">
              <img src={logo2} alt="logo1" />
            </div>
            <div className="col-4 py-5 m-auto">
              <img src={logo3} alt="logo1" />
            </div>
            <div className="col-4 py-5 m-auto">
              <img src={logo4} alt="logo1" />
            </div>
            <div className="col-4 py-5 m-auto">
              <img src={logo5} alt="logo1" />
            </div>
            <div className="col-4 py-5 m-auto">
              <img src={logo6} alt="logo1" />
            </div>
            <div className="col-4 py-5 m-auto">
              <img src={logo7} alt="logo1" />
            </div>
            <div className="col-4 py-5 m-auto">
              <img src={logo8} alt="logo1" />
            </div>
            <div className="col-4 py-5 m-auto">
              <img src={logo9} alt="logo1" />
            </div>
          </div>
        </div>
        <div className="container testimonial-wrapper">
          <div className="test_heading">
            <img src={testimonialbg} alt="..." />
            Testimonial
          </div>
          {TestimonialCards.map(
            (item, index) =>
              index === testimonialCount && (
                <>
                  <div className="testimonial_container">
                    <div>
                      <div
                        className="d-none d-md-block testImage1"
                        style={{
                          background: `linear-gradient(0deg, rgba(51, 124, 207, 0.50) 0%, rgba(51, 124, 207, 0.50) 100%), url(${item.image1}), lightgray 50% / cover no-repeat`,
                          backgroundSize: "200px 300px",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></div>
                    </div>
                    <div>
                      <img src={item.image2} alt="" className="testImage2" />
                    </div>
                    <div className="description">
                      {item.description}
                      <div className="heading">{item.author}</div>
                      <div className="designation">{item.designation}</div>
                    </div>
                    <div>
                      <div
                        style={{
                          background: `linear-gradient(0deg, rgba(51, 124, 207, 0.50) 0%, rgba(51, 124, 207, 0.50) 100%), url(${item.image3}), lightgray 50% / cover no-repeat`,
                          backgroundSize: "200px 300px",
                        }}
                        className="d-none d-md-block testImage3"
                      ></div>
                    </div>
                  </div>
                </>
              )
          )}

          <div className="d-flex justify-content-between container px-5 col-12 col-lg-8">
            <button
              className="testimonial_button"
              onClick={() =>
                setTestimonialCount(
                  testimonialCount > 0 ? testimonialCount - 1 : 0
                )
              }
            >
              Previous
            </button>
            <button
              className="testimonial_button"
              onClick={() =>
                setTestimonialCount(
                  testimonialCount < TestimonialCards.length - 1
                    ? testimonialCount + 1
                    : TestimonialCards.length - 1
                )
              }
            >
              Next
            </button>
          </div>
        </div>
        <span className={styles.anchor} id="4"></span>
        <div>
          <TeamCarousel />
        </div>
      </div>
    );
}

export default Home;