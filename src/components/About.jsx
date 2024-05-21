import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <p className="intro-text">Lorem ipsum dolor sit amet</p>

      <section className="about-section">
        <div className="text-content">
          <h2>Our Vision</h2>
          <p>
            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy.
          </p>
        </div>
        <div className="image-content">
          <img src="https://i.pinimg.com/236x/ab/59/63/ab5963fca54c755c399d1fed0540d133.jpg" alt="Our Vision" />
        </div>
      </section>

      <section className="about-section" >
        <div className="image-content">
          <img src="https://i.pinimg.com/236x/a3/64/08/a364087a92eb00d2d81f5d078b1091a2.jpg" alt="Our Approach" />
        </div>
        <div className="text-content">
          <h2>Our Approach</h2>
          <p>
            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="text-content">
          <h2>Our Process</h2>
          <p>
            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy.
          </p>
        </div>
        <div className="image-content">
          <img src="https://i.pinimg.com/236x/b6/94/e4/b694e4e6ab88c35b121a9d33d4b130f8.jpg" alt="Our Process" />
        </div>
      </section>
    </div>
  );
}

export default About;
