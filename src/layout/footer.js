import React from "react";
import './footer.scss';
import arrow from '../assets/images/arrow-footer.svg';
import logo from '../assets/images/logo_dark.svg';
import linkedin from '../assets/images/Linkedin.svg';
import fb from '../assets/images/Facebook.svg';
import twitter from '../assets/images/Twitter.svg'

const Footer = () => {
    return (
      <div className="footer_container container">
        <div className="footer_route_list">
          <div className="route_list">
            <div className="route_heading">Product</div>
            <div className="route">Employee database</div>
            <div className="route">Payroll</div>
            <div className="route">Absences</div>
            <div className="route">Time tracking</div>
            <div className="route">Shift planner</div>
            <div className="route">Recruiting</div>
          </div>
          <div className="route_list">
            <div className="route_heading">Product</div>
            <div className="route">Employee database</div>
            <div className="route">Payroll</div>
            <div className="route">Absences</div>
            <div className="route">Time tracking</div>
            <div className="route">Shift planner</div>
            <div className="route">Recruiting</div>
          </div>
          <div className="route_list">
            <div className="route_heading">Product</div>
            <div className="route">Employee database</div>
            <div className="route">Payroll</div>
            <div className="route">Absences</div>
            <div className="route">Time tracking</div>
            <div className="route">Shift planner</div>
            <div className="route">Recruiting</div>
          </div>
          <div className="subscribe_card">
            <div className="card_heading">Subscribe</div>

            <div className="d-flex justify-content-start">
              <input type="text" placeholder="Email Address" />
              <button className="input_button">
                <img src={arrow} alt="'" />
              </button>
            </div>
            <div className="card_description">
              Hello, we are Lift Media. Our goal is to translate the positive
              effects from revolutionizing how companies engage with their
              clients & their team.
            </div>
          </div>
        </div>
        <hr className="divider"/>
        <div className='social_cta_container'>
          <div>
            <img src={logo} alt="logo" />
          </div>

          <div className='links_conteiner'>
            <div className='link'>Privacy Policy</div>

            <div className='link'>Terms and Conditions</div>

            <div className='link'>Cookies</div>
          </div>

          <div className='links_conteiner'>
            <div className='social_link'>
              <img
                src={linkedin}
                alt="linkedin"
              />
            </div>
            <div className='social_link'>
              <img
                src={fb}
                alt="facebook"
              />
            </div>
            <div className='social_link'>
              <img
                src={twitter}
                alt="twitter"
              />
            </div>
          </div>
        </div>
      </div>
    );
}
export default Footer