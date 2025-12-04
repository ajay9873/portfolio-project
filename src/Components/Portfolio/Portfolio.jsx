import React from "react";
import "./Portfolio.css";
import img1 from "../../assets/image/portfolio1.jpg";
import img2 from "../../assets/image/portfolio2.jpg";
import img3 from "../../assets/image/portfolio3.jpg";   
import img4 from "../../assets/image/portfolio4.jpg";
import img5 from "../../assets/image/portfolio5.jpg";
import img6 from "../../assets/image/portfolio6.jpg";   

const Portfolio = () => {
    const portfolioItems = [
        {
            id: 1,
            category: "UI/UX DESIGN",
            title: "Product Admin Dashboard",
            description: "Vivamus eifend convallis ante, non phastern libero molestie laoreet. Donec id imperdiet lacus.",
            image: img1,
            caseStudyLink: "#"
        },
        {
            id: 2,
            category: "UI/UX DESIGN",
            title: "Product Admin Dashboard",
            description: "Vivamus eifend convallis ante, non phastern libero molestie laoreet. Donec id imperdiet lacus.",
            image: img2,
            caseStudyLink: "#"
        },
        {
            id: 3,
            category: "UI/UX DESIGN",
            title: "Product Admin Dashboard",
            description: "Vivamus eifend convallis ante, non phastern libero molestie laoreet. Donec id imperdiet lacus.",
            image: img3,
            caseStudyLink: "#"
        },
        {
            id: 4,
            category: "UI/UX DESIGN",
            title: "Product Admin Dashboard",
            description: "Vivamus eifend convallis ante, non phastern libero molestie laoreet. Donec id imperdiet lacus.",
            image: img4,
            caseStudyLink: "#"
        },
        {
            id: 5,
            category: "UI/UX DESIGN",
            title: "Product Admin Dashboard",
            description: "Vivamus eifend convallis ante, non phastern libero molestie laoreet. Donec id imperdiet lacus.",
            image: img5,
            caseStudyLink: "#"
        },
        {
            id: 6,
            category: "UI/UX DESIGN",
            title: "Product Admin Dashboard",
            description: "Vivamus eifend convallis ante, non phastern libero molestie laoreet. Donec id imperdiet lacus.",
            image: img6,
            caseStudyLink: "#"
        }
    ];

    return (
        <section className="portfolio-section">
            <div className="portfolio-container">
                {/* Header */}
                <div className="portfolio-header">
                    <h2 className="portfolio-title">Portfolio</h2>
                    <p className="portfolio-subtitle">
                        There are many variations of passages of Lorem Ipsum available,<br />
                        but the majority have suffered alteration.
                    </p>
                </div>

                {/* Portfolio Grid */}
                <div className="portfolio-grid">
                    {portfolioItems.map((item) => (
                        <div key={item.id} className="portfolio-card">
                            <div className="portfolio-image">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className="portfolio-content">
                                <p className="portfolio-category">{item.category}</p>
                                <h3 className="portfolio-item-title">{item.title}</h3>
                                <p className="portfolio-item-description">{item.description}</p>
                                <a href={item.caseStudyLink} className="case-study-link">
                                    Case Study <span className="arrow">→</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="portfolio-project-btn">More Projects</button>
            </div>
        </section>
    );
};

export default Portfolio;
