import React from "react";
import arrow from '../assets/images/arrow.svg'
import Counter from "../components/counter";
import CarouselComponent from "../components/carousel";
import ServiceCards from "../components/service-cards";
import logo9 from '../assets/images/7-Eleven-Logo.png';
import logo1 from "../assets/images/first-republic-bank.png";
import logo8 from "../assets/images/Universal-Pictures.png";
import logo3 from "../assets/images/toyota.png";
import logo2 from "../assets/images/Ford-Logo.png";
import logo4 from "../assets/images/Gap-Logo.png";
import logo5 from "../assets/images/Infosys_logo.png";
import logo6 from "../assets/images/Bank-of-America.png";
import logo7 from "../assets/images/JP-Morgan-Chase-Logo.png";
import hero from '../assets/images/Hero-img.png'
import TeamCarousel from "../components/team-carousel";
import Testimonial from '../assets/images/testimonial.svg';
import Testimonial1 from '../assets/images/testimonial1.svg';
import Testimonial2 from '../assets/images/testimonial2.svg'


const Home = () => {
    return (
      <div className="home">
        <div className="hero_container">
          <div className="container left_container col-7">
            <label className="heading">
              Terabyte Innovations: Pioneering Software for a Connected Future
            </label>
            <div className="sub_heading">
              Terabyte Innovations is at the forefront of software solutions,
              particularly excelling in the development of smart hospital and
              school management systems, CRM, and laboratory management
              software.
            </div>
            <button className="demo_button">
              Book a Demo
              <img src={arrow} alt="arrow" />
            </button>
          </div>
          <div className="col-5">
            <img src={hero} alt="hero" width={600} height={400} />
          </div>
        </div>
        <div>
          <Counter />
        </div>
        <div>
          <CarouselComponent />
        </div>
        <div className="our_services_container">
          <div className="heading">OUR SERVICES</div>
          <ServiceCards />
        </div>
        <div className="client_container d-flex">
          <div className="col-4 left_container">
            Empowering Success Together: Partnering with Countless Clients to
            Achieve Remarkable Milestones
          </div>
          <div className="col-8 d-flex justify-content-between flex-wrap right_container">
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
          <div className="testimonial_container">
            <div>
              <img src={Testimonial} alt="" />
            </div>
            <div>
              <img src={Testimonial1} alt="" />
            </div>
            <div className="description">
              Lorem ipsum dolor sit amet consectetur. Massa sed dapibus
              adipiscing felis at. Integer at dictum ullamcorper magna nam eget.
              Elementum semper ultrices quam elementum dignissim etiam velit
              molestie diam. Netus arcu varius lectus dignissim mollis lorem
              pulvinar tortor arcu.
              <div className="heading">Carolyn Willms</div>
              <div className="designation">Global Accountability Officer</div>
            </div>
            <div>
              <img src={Testimonial2} alt="" />
            </div>
          </div>
          <div className="d-flex justify-content-between container px-5 col-8">
            <button className="testimonial_button">Previous</button>
            <button className="testimonial_button">Next</button>
          </div>
        </div>
        <div>
          <TeamCarousel />
        </div>
      </div>
    );
}

export default Home;