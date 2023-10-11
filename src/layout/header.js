import React from "react";
import Logo from '../assets/images/logo.svg';
import './header.scss';

const Header = () => {
    return (
      <div className="header">
        <div className="d-flex justify-content-between">
          <div>
            <img src={Logo} alt="logo" onClick={()=> window.location.href = '/'} />
          </div>
          <div className="right-menu">
            <div>Home</div>
            <div>About</div>
            <div>Careers</div>
            <div>Services</div>
            <div>Contact</div>
          </div>
        </div>
      </div>
    );
}
export default Header;