import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'; // ✅ Import Link

const Navbar = () => {
  return (
    <nav id="introduction" className="navbar">
      <div className="navbar-left">
        <Link to="/">cooperation</Link> {/* ✅ Link instead of <a> */}
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