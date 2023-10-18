import React from "react";
import Logo from '../assets/images/logo.svg';
import './header.scss';

const Header = () => {
    return (
      <div className="header">
        <div className="d-flex justify-content-between">
          <div>
            <img
              src={Logo}
              alt="logo"
              onClick={() => (window.location.href = "/")}
            />
          </div>
          <div className="right-menu">
            <a className='link_container' href="/">
              <div>Home</div>
            </a>
            <a className='link_container' href="#2">
              <div>Our Services</div>
            </a>
            <a className='link_container' href="#3">
              <div>Clients</div>
            </a>
            <a className='link_container' href="#4">
              <div>Our Team</div>
            </a>
          </div>
        </div>
      </div>
    );
}
export default Header;