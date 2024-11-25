import { Link } from 'react-router-dom';
import './Home.css';
function Home() {
  return (
    <div>
      <h1>Education For Displaced Children</h1>
      
      <p> The education for displaced children program initiative, providing critical online educational 
      services for secondary-level students, with a special focus on girls who are currently
       unable to attend school
       
       EDC, as a non-profit organization, is established by a group of volunteer 
       education activists around the world. 

       This initiative is especially s
       ignificant given the challenges faced by girls and women in accessing education.
      </p>
     {/* Container for movable images */}
     <div className="image-slider">
        {/* Images go here */}
        <img src="./Slide3.PNG" alt="Picture space" />
        {/* Add more images as needed */}
      </div>
      <Link to="/Home">Home</Link>
    </div>
  );
}


export default Home;
