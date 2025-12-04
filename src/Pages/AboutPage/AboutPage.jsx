import React from "react";
import "./AboutPage.css";
import aboutImg from "../../assets/image/img.png";
import aboutsocialicon from "../../assets/icons/Social Media card2.png"
import downloadicon from "../../assets/icons/download.svg"

const About = () => {


  return (
    <section className="portfolio10-about">
      <div className="portfolio10-about-wrapper">
        <div className="portfolio10-about-container">

          {/* LEFT IMAGE WITH SOCIALS */}
          <div className="portfolio10-about-left">
            <div className="about-image-card">
              <img src={aboutImg} alt="About" className="portfolio10-about-img" />
            </div>

            {/* SOCIAL ICONS */}
            <div className="portfolio10-about-socials">
              <img src={aboutsocialicon} className="about-socialicon" alt="About Social Media Icons" />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="portfolio10-about-right">
            <h2 className="portfolio10-about-title">I am Professional User <br /> Experience Designer</h2>

            <p className="portfolio10-about-desc">
              I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences.
            </p>
            <p className="portfolio10-about-desc">
              I design and develop services for customers specializing creating stylish, modern websites, web services.
            </p>

            <div className="portfolio10-about-btns">
              <button className="portfolio10-about-btn-primary">My Project</button>
              <button className="portfolio10-about-btn-secondary">
                <img src={downloadicon} alt="Download Icon" className="about-downloadicon" />
                Download CV</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
