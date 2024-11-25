
import React from 'react';
import './About.css';
const About: React.FC = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <p>
        Welcome to our website! We are a team dedicated to providing the best 
        experience to our users. Our platform offers a wide range of services 
        designed to meet your needs.
      </p>
      <p>
        Whether you're looking for information, resources, or just a community 
        to share your thoughts with, we're here for you. We believe in quality, 
        reliability, and user satisfaction.
      </p>
      <p>
        Thank you for visiting us and we hope you find everything you're 
        looking for. If you have any questions or feedback, please don't 
        hesitate to reach out.
      </p>
      <div className="about-content">
      <h2>EFA</h2>
      <p>Welcome to our organization.
         We are dedicated to to provide free and accessible online education to displanced students
         particularly focusing on the K-12 curriculum. 
        </p> 
        <p>
         access to quality education remains a challenge, especially after the recent changes in 
         the country’s educational landscape. We aim to bridge this gap by establishing a comprehensive
          e-learning platform that fosters interactive learning experiences, promotes engagement, and enables students to overcome educational barriers.</p>
      <h3>Our Mission</h3>
      <p>Our mission is to...</p>
      <h3>Our Story</h3>
      <p>Our journey began in...</p>
      {/* Include images or other media as needed */}
      <img src="image-path.jpg" alt="About Us" />
      {/* Team Information */}
      <h3>Meet the Team</h3>
      <div className="team-info">
        {/* Team members */}
      </div>
    </div>
  

    </div>
  );
};

export default About;