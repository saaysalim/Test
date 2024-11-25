import { Link } from 'react-router-dom';
import './NavBar.css'; // Make sure this CSS file is updated with sub-menu styles

function NavBar() {
  return (
    <nav>
      <ul className="navbar">
        <div className="navbar-logo">
          <Link to="/"><img src="./public/EFAlogo.jpg" alt="Logo" /></Link>
        </div>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/team">Team</Link></li>
        <li className="submenu-parent">Class
          <ul className="submenu">
            <li><Link to="/class/schedule">Schedule</Link></li>
            <li><Link to="/class/assignments">Assignments</Link></li>
            <li><Link to="/class/resources">Resources</Link></li>
          </ul>
        </li>
        <li><Link to="/activities">Activities</Link></li>
        <li><Link to="/apply">Apply</Link></li>
        <li><Link to="/contact">Contact</Link></li> {/* Corrected the typo 'conctact' */}
        <li><Link to="/signup">SignUp</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/chat">Chat</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
