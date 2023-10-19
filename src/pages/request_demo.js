import React from "react";
import '../assets/scss/request_demo.scss';
import arrow from '../assets/images/submit-arrow.svg';
import Select from 'react-select';
import { SelectCustomStyles } from "../const";
import styles from '../pages/home.module.scss';
import video from '../assets/images/video.mp4';
const RequestDemo = () => {
    return (
      <div className="home">
        <div className={styles.video_landing_container}>
          <div className={styles.hero_section}>
            <div className={styles.left_section}>
              <div className={styles.heading}>
                Unleash Possibilities: Demo Delights Await
              </div>
              <div className={styles.sub_heading}>
                Unlock the full potential of our offerings by requesting a
                personalized demo tailored to your needs. Witness firsthand how
                our solutions can elevate your business and drive success.
                Request your demo now and embark on a journey of innovation and
                efficiency.
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
                <Select
                  placeholder=""
                  options={[]}
                  components={{
                    IndicatorSeparator() {
                      return <></>;
                    },
                  }}
                  styles={SelectCustomStyles}
                />
              </div>
              <div className="col-6">
                <div className="label">Industry Type*</div>
                <Select
                  placeholder=""
                  options={[]}
                  components={{
                    IndicatorSeparator() {
                      return <></>;
                    },
                  }}
                  styles={SelectCustomStyles}
                />
              </div>
            </div>
            <div className="col-12 row px-5">
              <div className="label">Message</div>
              <input type="text" className="w-100" />
            </div>
            <div className="submit_button_container">
              <button className="submit_button">
                Submit
                <img src={arrow} width={24} height={24} alt="icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default RequestDemo;