import React from "react";
import "./Whatido.css";

const WhatIDo = () => {
    const services = [
        {
            id: 1,
            title: "User Experience (UX)",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla purus arcu, varius egget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.",
            highlight: true
        },
        {
            id: 2,
            title: "User Interface (UI)",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla purus arcu, varius egget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum."
        },
        {
            id: 3,
            title: "Web Development",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla purus arcu, varius egget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum."
        }
    ];

    return (
        <section className="whatido-section">
            <div className="whatido-wrapper">
                {/* Left Section - Title and Button */}
                <div className="whatido-left">
                    <h2 className="whatido-title">What I do?</h2>
                    <p className="whatido-description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/> Nulla purus arcu, varius egget velit non, laoreet imperdiet <br/> orci. Mauris ultrices eget lorem ac vestibulum. Suspendis <br/> imperdiet.
                    </p>
                    <p className="whatido-description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/> Nulla purus arcu, varius egget velit non.
                    </p>
                    <button className="whatido-btn">Say Hello!</button>
                </div>

                {/* Right Section - Services Cards */}
                <div className="whatido-right">
                    <div className="services-list">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className={`service-card ${service.highlight ? "highlight" : ""}`}
                            >
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatIDo;
