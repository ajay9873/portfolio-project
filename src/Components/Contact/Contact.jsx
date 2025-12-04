import React from "react";
import "./Contact.css";
import addresslogo from "../../assets/icons/address.svg";
import address2logo from "../../assets/icons/address2.svg";
import facebookicon from "../../assets/icons/Social Media.svg";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-wrapper">
        <div className="contact-card">
          <div className="contact-left">
            <h2 className="contact-title">Let’s discuss your Project</h2>
            <p className="contact-desc">There are many variations of passages of Lorem Ipsum <br/> available, but the majority have suffered alteration.</p>

            <div className="contact-info">
              <div className="info-item highlight">
                <div className="info-icon"><img src={addresslogo} alt="Address Icon" /></div>
                <div>
                  <p className="info-label">Address:</p>
                  <p className="info-value">New Mexico 31134</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon small"><img src={address2logo} alt="Email Icon" /></div>
                <div>
                  <p className="info-label">My Email:</p>
                  <p className="info-value">mymail@mail.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon small"><img src={address2logo} alt="Call Icon" /></div>
                <div>
                  <p className="info-label">Call Me Now:</p>
                  <p className="info-value">00-1234 00000</p>
                </div>
              </div>

              <div className="socials">
                <img src={facebookicon} alt="Facebook Icon" className="contact-facebookicon" /> 
              </div>
            </div>
          </div>

          <div className="contact-right">
            <div className="form-intro">
              <p className="form-intro-sub">There are many variations of passages of Lorem Ipsu available, <br/> but the majority have suffered alte.</p>
            </div>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="row">
                <div className="field">
                  <input type="text" placeholder="Name*" required />
                </div>
               
              </div>
               <div className="field">
                  <input type="email" placeholder="Email*" required />
                </div>

              <div className="row">
                <div className="field">
                  <input type="text" placeholder="Location" />
                </div>
           
              </div>

              <div className="row">
                <div className="field">
                  <input type="text" placeholder="Budget*" required />
                </div>
                <div className="field full">
                  <input type="text" placeholder="Subject*" required />
                </div>
              </div>

              <div className="row">
                <div className="field full">
                  <textarea placeholder="Message*" required></textarea>
                </div>
              </div>

              <button className="submit-btn" type="submit">Submit <span className="arrow">→</span></button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
