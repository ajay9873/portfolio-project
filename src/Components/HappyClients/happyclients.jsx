import React from "react";
import "./happyclients.css";
import clientlogo from "../../assets/icons/google.svg";
import clientlogo2 from "../../assets/icons/dribbble.svg";
import clientlogo3 from "../../assets/icons/linkedin.svg";
import clientlogo4 from "../../assets/icons/amazon.svg";
import clientlogo5 from "../../assets/icons/medium.svg";
import clientlogo6 from "../../assets/icons/spotify.svg";


const clients = [
  { id: 1, name: "Google", logo: clientlogo},
  { id: 2, name: "Dribbble", logo: clientlogo2 },
  { id: 3, name: "LinkedIn", logo: clientlogo3},
  { id: 4, name: "Amazon", logo: clientlogo4 },
  { id: 5, name: "Medium", logo: clientlogo5 },
  { id: 6, name: "Spotify", logo: clientlogo6 }
];

const HappyClients = () => {
  return (
    <section className="happyclients-section">
      <div className="happyclients-container">
        <header className="happyclients-header">
          <h2 className="happyclients-title">Happy Clients</h2>
          <p className="happyclients-subtitle">There are many variations of passages of Lorem Ipsum available,<br/> but the majority have suffered alteration.</p>
        </header>

        <div className="happyclients-logos">
          {clients.map((c) => (
            <div key={c.id} className="client-item">
              <img src={c.logo} alt={c.name} className="client-logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HappyClients;
