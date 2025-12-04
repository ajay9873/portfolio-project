import React, { useState } from "react";
import "./Testimonial.css";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "Nulla efficitur nisi sit amet velit malesuada dapibus. Duis mollis felis turpis, nec semper odio convallis at. Curabitur imperdiet semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh. Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien. Morbi ornare elit at libero suscipit porta.",
      author: "Esther Howard",
      role: "Managing Director, ABC company"
    },
    {
      id: 2,
      quote:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer euismod, arcu sed fermentum lacinia, mauris augue gravida nisl, vitae iaculis metus augue quis tortor.",
      author: "John Doe",
      role: "CEO, Example Co"
    },
    {
      id: 3,
      quote:
        "Aliquam erat volutpat. Donec venenatis, urna et dapibus gravida, lorem arcu tempor augue, non luctus sem purus in lacus. Suspendisse potenti.",
      author: "Jane Smith",
      role: "Product Lead, Startup"
    }
  ];

  const [index, setIndex] = useState(0);

  const goTo = (i) => setIndex(i);

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <header className="testimonial-header">
          <h2 className="testimonial-title">Testimonial</h2>
          <p className="testimonial-sub">There are many variations of passages of Lorem Ipsum available,<br/> but the majority have suffered alteration.</p>
        </header>

        <div className="testimonial-body">
          <blockquote className="testimonial-quote">“{testimonials[index].quote}”</blockquote>

          <div className="testimonial-author">
            <p className="author-name">{testimonials[index].author}</p>
            <p className="author-role">{testimonials[index].role}</p>
          </div>

          <div className="testimonial-dots">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                className={"dot " + (i === index ? "active" : "")}
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
