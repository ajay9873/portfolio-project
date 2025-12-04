import React, { useState } from "react";
import "./Blog.css";
import blogimg from "../../assets/image/blog1.jpg";
import blogimg2 from "../../assets/image/blog2.jpg";
import blogimg3 from "../../assets/image/blog3.jpg";
import blogimg4 from "../../assets/image/blog4.jpg";

const Blog = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const blogPosts = [
        {
            id: 1,
            image: blogimg,
            date: "22 Oct, 2020",
            comments: "246",
            title: "Lorem ipsum dolor sit consea. Nulla purus arcu",
        },
        {
            id: 2,
            image: blogimg2,
            date: "22 Oct, 2020",
            comments: "246",
            title: "Lorem ipsum dolor sit consea. Nulla purus arcu",
        },
        {
            id: 3,
            image: blogimg3,
            date: "22 Oct, 2020",
            comments: "246",
            title: "Lorem ipsum dolor sit consea. Nulla purus arcu",
        },
        {
            id: 4,
            image: blogimg4,
            date: "22 Oct, 2020",
            comments: "246",
            title: "Lorem ipsum dolor sit consea. Nulla purus arcu",
        }
    ];

    const itemsPerPage = 4;
    const totalSlides = Math.ceil(blogPosts.length / itemsPerPage);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const startIndex = currentSlide * itemsPerPage;
    const visiblePosts = blogPosts.slice(startIndex, startIndex + itemsPerPage);

    return (
        <section className="blog-section">
            <div className="blog-container">
                {/* Header */}
                <div className="blog-header">
                    <h2 className="blog-title">Blog</h2>
                    <p className="blog-subtitle">
                        There are many variations of passages of Lorem Ipsum available,<br />
                        but the majority have suffered alteration.
                    </p>
                </div>

                {/* Blog Cards */}
                <div className="blog-carousel">
                    <div className="blog-grid">
                        {visiblePosts.map((post) => (
                            <div key={post.id} className="blog-card">
                                <div className="blog-image">
                                    <img src={post.image} alt={post.title} />
                                </div>
                                <div className="blog-content">
                                    <p className="blog-meta">
                                        {post.date} / {post.comments} Comments
                                    </p>
                                    <h3 className="blog-post-title">{post.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="blog-pagination">
                    {Array.from({ length: Math.max(totalSlides, 3) }).map((_, index) => (
                        <button
                            key={index}
                            className={`pagination-dot ${currentSlide === index ? "active" : ""}`}
                            onClick={() => goToSlide(Math.min(index, totalSlides - 1))}
                            aria-label={`Go to slide ${index + 1}`}
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
