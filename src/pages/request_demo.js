import React from "react";
import hero from '../assets/images/requestbanner.svg';
import '../assets/scss/request_demo.scss';
import arrow from '../assets/images/submit-arrow.svg';
const RequestDemo = () => {
    return (
      <div className="home">
        <div className="hero_container">
          <div className="container d-flex justify-content-center">
            <img src={hero} alt="hero" width={500} height={300} />
          </div>
        </div>
        <div className="container py-5">
          <div className="heading">Request a demo</div>
          <div className="form">
            <div className="col-12 row px-5">
              <div className="col-6">
                <div className="label">Full Name*</div>
                <input type="text" className="w-100" />
              </div>
              <div className="col-6">
                <div className="label">Email*</div>
                <input type="text" className="w-100" />
              </div>
            </div>
            <div className="col-12 row px-5">
              <div className="col-6">
                <div className="label">Organization*</div>
                <input type="text" className="w-100" />
              </div>
              <div className="col-6">
                <div className="label">Contact Number</div>
                <input type="text" className="w-100" />
              </div>
            </div>
            <div className="col-12 row px-5">
              <div className="col-6">
                <div className="label">Region*</div>
                <select className="w-100" />
              </div>
              <div className="col-6">
                <div className="label">Industry Type*</div>
                <select className="w-100" />
              </div>
            </div>
            <div className="col-12 row px-5">
              <div className="label">Message</div>
              <input type="text" className="w-100" />
            </div>
            <div>
                <button className="submit_button">Submit
                <img src={arrow} width={24} height={24} alt="icon"/></button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default RequestDemo;