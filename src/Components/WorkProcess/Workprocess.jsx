import React from "react";
import "./Workprocess.css";
import researchIcon from "../../assets/icons/research.svg";
import analyzeIcon from "../../assets/icons/analyse.svg";
import designIcon from "../../assets/icons/design.svg";
import launchIcon from "../../assets/icons/launch.svg";

const Workprocess = () => {
    const processes = [
        {
            id: 1,
            number: "1.",
            title: "Research",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
            icon: <img src={researchIcon} alt="Research" />
        },
        {
            id: 2,
            number: "2.",
            title: "Analyze",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
            icon: <img src={analyzeIcon} alt="Analyze" />
        },
        {
            id: 3,
            number: "3.",
            title: "Design",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
            icon: <img src={designIcon} alt="Design" />
        },
        {
            id: 4,
            number: "4.",
            title: "Launch",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
            icon: <img src={launchIcon} alt="Launch" />
        }
    ];

    return (
        <section className="workprocess-section">
            <div className="workprocess-wrapper">
                {/* Left Section - Title & Description */}
                <div className="workprocess-left">
                    <h2 className="workprocess-title">Work Process</h2>
                    <p className="workprocess-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius egget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet.
                    </p>
                    <p className="workprocess-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius egget velit non.
                    </p>
                </div>

                {/* Right Section - Process Cards Grid */}
                <div className="workprocess-right">
                    <div className="workprocess-grid">
                        {processes.map((process) => (
                            <div key={process.id} className="workprocess-card">
                                <div className="card-icon">{process.icon}</div>
                                <h3 className="card-title">{process.number} {process.title}</h3>
                                <p className="card-description">{process.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Workprocess;
