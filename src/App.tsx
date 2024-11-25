import { Routes, Route } from 'react-router-dom';
import './NavBar.css';
import './App.css';
import MainContent from './Content';
import Header from './Header';
import Footer from './Footer';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import { Link } from 'react-router-dom';
import Team from './components/Pages/Team';
import ApplyForm from './components/Pages/ApplyForm';
import SignUp from './components/Pages/SignUp';
import Contact from './components/Pages/Contact';
import News from './components/Pages/News';
import NewsManager from './components/NewsManager';
import Schedule from './components/Pages/Schedule';
import Chat from './components/Chat/Chat';
import SearchBar from './components/Search/SearchBar';
import Gallery from './components/Pages/Gallery';
import Feedback from './components/Pages/Feedback';
import Context from './Context';
import CMS from './components/Pages/CMS';

function App() {
  return (
    
    <div>
       <nav>
       <ul className="navbar">
        <div className="navbar-logo">
          <Link to="/"><img src="./public/EFAlogo.jpg" alt="Logo" /></Link>
        </div>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/team">Team</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
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
        <li><Link to="/signUp">SignUp</Link></li>
        <li><Link to="/chat">Chat</Link></li>
        <li><Link to="/searchBar">Search</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
        <li><Link to="/context">Context</Link></li>
        <li><Link to="/cms">CMS</Link></li>
      

      </ul>
      <Header 
      />
    </nav>
      <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/about" element={<About />} />
      <Route path="/team" element={<Team />} />
      <Route path="/apply" element={<ApplyForm/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/news" element={<News/>}/>
      <Route path="/newsmanager" element={<NewsManager/>}/>
      <Route path="/schedule" element={<Schedule/>}/>
      <Route path="/signUp" element={<SignUp/>}/>
      <Route path="/chat" element={<Chat/>}/>
      <Route path="/SearchBar" element={<SearchBar Search={function (): void {
          throw new Error('Function not implemented.');
        } }/>}/>
        <Route path="/feedback" element={<Feedback/>}/>
        <Route path="/context" element={<Context/>}/>
        <Route path="/cms" element={<CMS/>}/>
    </Routes>
      <MainContent></MainContent>
          <Footer></Footer>
    </div>

  );

}
export default App;

