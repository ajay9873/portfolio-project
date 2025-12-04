import React from "react";
import "./Project.css";

const ProjectIdea = () => {
    return (
        <section className="project-idea-section">
            <div className="project-idea-container">
                <div className="project-idea-content">
                    <h2 className="project-idea-title">
                        Do you have Project Idea?<br />
                        Let's discuss your project!
                    </h2>
                    <p className="project-idea-description">
                        There are many variations of passages of Lorem Ipsum available,<br />
                        but the majority have suffered alteration.
                    </p>
                    <a href="#contact" className="project-idea-btn">
                        Let's work Together <span className="btn-arrow">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProjectIdea;
