import React from "react";

const TopSection = () => {
  return (
    <section id="sec-top" className="top no-padding-b">
      <div className="container">
        <div className="top__inner">
          {/* Personal Information */}
          <div className="top__inner-person">
            <div className="top__inner-title">
              <span className="top__inner-hello">Hello</span>
              <div className="top__inner-name">
                <p>
                  I'm <span>SARA</span>,
                </p>
                <p>CEO Management</p>
              </div>
            </div>
            <div className="top__inner-img">
              <img src="./images/top-person.png" alt="Person" data-cursor="hover" />
            </div>
          </div>

          {/* Gimmick Image */}
          <img className="top__inner-gimmick" src="./images/top-gimmick.svg" alt="Gimmick" />

          {/* Content */}
          <div className="top__inner-content">
            <div className="top__inner-desc">
              <span>
                Jenny’s Exceptional product design ensure our website’s success. Highly Recommended
              </span>
            </div>
            <div className="top__inner-experience">
              <img src="./images/icon/star.svg" alt="Star" />
              <div className="top__inner-date">
                <p>0 Year</p>
                <p>Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
