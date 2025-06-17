
import './Navbar.css';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  return (
    <nav id="introduction" className="navbar">
      <div className="navbar-left">
        <Link to="/">cooperation</Link> 
      </div>

      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/services">portfolio</Link>
          </li>
          <li>
            <Link to="/services">services</Link>
          </li>
          <li>
            <Link to="/services">contacts</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <Link to="/">Social networks</Link>
      </div>
    </nav>
  );
};

export default Navbar;