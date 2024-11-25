//import React from 'react';
// Import your CSS file for styling
import './Team.css';

const Team = () => {
  return (
    <div>
      <section className="about-introduction">
        <p>Welcome to School lrearning system, a place where we introduce an elearning platform and.</p>
      </section>
      <section className="mission-statement">
        <h2>Our Mission</h2>
        <p>[Your mission statement]</p>
      </section>
      <section className="team-members">
        <h2>Meet Our Team</h2>
        <div className="team-member">
          <img src="./public/SalimSaay.jpg" alt="Dr.Salim Saay" />
          <h3>Dr. Salim Saay</h3>
          <p>Dr. Salim Saay is an associate Professor and Researcher at the University of Limerick and Lero-the SFI Research Centre for Software. Salim has worked as Associate Professor at Kabul University and as a Lecturer at the Athlone Institute of Technology. He has also worked in government and various industries, including as Director of IT and Manager of AfgREN-Afghanistan Research and Education Network at the Ministry of Higher Education of Afghanistan, NATO, and UNDP. Salim's research interests include architecture designing, low-code software development, and organisational collaboration. He has secured international funding for his studies and research and currently working on three research project.</p>
        </div>
        {/* Repeat for other team members */}
      </section>
    
    </div>
  );
};

export default Team;


