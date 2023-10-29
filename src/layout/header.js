import React, { useState } from "react";
import Logo from '../assets/images/logo.svg';
import './header.scss';

const Header = () => {
    const [show, setShow] = useState(false);
    return (
      <nav className="navbar navbar-expand-lg navbar-dark header sticky-top">
        <div>
          <a className="navbar-brand px-md-5" href="/">
            <img src={Logo} alt="logo" />
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle={show ? "collapse show" : "collapse"}
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={()=> setShow(!show)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={
            show
              ? "collapse show navbar-collapse justify-content-end px-5"
              : "collapse navbar-collapse justify-content-end px-5"
          }
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a className="link_container" href="/">
              <div>Home</div>
            </a>
            <a className="link_container" href="#2">
              <div>Our Services</div>
            </a>
            <a className="link_container" href="#3">
              <div>Clients</div>
            </a>
            <a className="link_container" href="#4">
              <div>Our Team</div>
            </a>
          </div>
        </div>
      </nav>
    );
}
export default Header;