import React from "react";
import "./Header.css";
import heroImg from "../../assets/image/img.png";

const Header = () => {

  return (
    <header className="portfolio10-hero">
      <div className="portfolio10-hero-container">

        {/* LEFT CONTENT */}
        <div className="portfolio10-hero-left">

          <h1 className="portfolio10-hero-title">
                   Hello, I’m
            <br /> Brooklyn Gilbert
          </h1>


          <p className="portfolio10-hero-desc">
            I’m a Freelance UI/UX Designer and Developer based in London, England. I
            strive to build immersive and beautiful web applications through
            carefully crafted code and user-centric design.
          </p>

          <button className="portfolio10-hero-btn">Say Hello!</button>

          {/* STATS */}
          <div className="portfolio10-hero-stats">
            <div className="stat-box">
              <div className="stat-value">15 Y.</div>
              <div className="stat-label">Experience</div>
            </div>
            <div className="stat-box">
              <div className="stat-value">250+</div>
              <div className="stat-label">Project Completed</div>
            </div>
            <div className="stat-box">
              <div className="stat-value">58</div>
              <div className="stat-label">Happy Client</div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="portfolio10-hero-right">
          <div className="portfolio10-hero-image-card">
            <img src={heroImg} alt="Brooklyn Gilbert" className="portfolio10-hero-image" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
